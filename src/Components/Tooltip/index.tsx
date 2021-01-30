import './tooltip.scss';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import L from '../../Tools/Language';


type TooltipDataFormat = {
    desc: string;
    img: string;
    name: string;
} | string;
export abstract class Tooltip<P = {}, S = {}> extends KKWAE<P, S> {
    static register(tooltip: TypeUtil.ClassType<Tooltip>, value: TooltipDataFormat): {onMouseMove: (e: React.MouseEvent) => void, onMouseEnter: () => void, onMouseLeave: () => void} {
        return {
            onMouseMove: (e: React.MouseEvent)=>{
                KKWAE.trigger('@tooltip-move', e.clientX, e.clientY)
            },
            onMouseEnter: ()=>{
                KKWAE.trigger('@tooltip', tooltip, value)
            },
            onMouseLeave: ()=>{
                KKWAE.trigger('@tooltip-off')
            }
        }
    }
}
export class TextTooltip extends Tooltip<Attrib.Prop.TextTooltip> {
    render(){
        return (
            <div className="tooltip textTooltip" style={{left: `${this.props.x + 10}px`, top: `${this.props.y + 10}px`}}>{this.props.data}</div>
        )
    }
}
export class CharacterTooltip extends Tooltip<Attrib.Prop.CharacterTooltip> {
    render(){
        return (
            <div className="tooltip characterTooltip" style={{left: `${this.props.x + 10}px`, top: `${this.props.y + 10}px`}}>
                <div className="characterTooltip-name">{this.props.data.name}</div>
                <div className="characterTooltip-body">
                    <img className="characterTooltip-img" src={this.props.data.img} />
                    <div className="characterTooltip-desc">{this.props.data.desc}</div>
                </div>
                <div className="characterTooltip-moreInfo">{L.process('goto_target_info', this.props.data.name)}</div>
            </div>
        )
    }
}
export class TooltipRenderer extends KKWAE<{}, Attrib.State.TooltipRenderer> {
    state: Attrib.State.TooltipRenderer = {
        currentTooltip: null,
    };
    ActionSynapse: KKWAE.Actions = {
        '@tooltip': (tooltipClass, value) => {
            this.setState({currentTooltip: tooltipClass, tooltipData: value})
        },
        '@tooltip-move': (x, y) => {
            this.setState({tooltipX: x, tooltipY: y})
        },
        '@tooltip-off': () => {
            this.setState({currentTooltip: null})
        }
    };
    render(){
        return (
            <div className="tooltip-renderer">
                {
                    this.state.currentTooltip ? React.createElement(this.state.currentTooltip, {data: this.state.tooltipData, x: this.state.tooltipX || 0, y: this.state.tooltipY || 0}) : null
                }
            </div>
        )
    }
}