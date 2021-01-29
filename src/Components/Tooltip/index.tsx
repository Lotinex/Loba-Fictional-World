import './tooltip.scss';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';


type TooltipContent = {
    
}
export abstract class Tooltip<P = {}, S = {}> extends KKWAE<P, S> {
    static register(tooltip: TypeUtil.ClassType<Tooltip>, value: any): {onMouseMove: (e: React.MouseEvent) => void, onMouseEnter: () => void, onMouseLeave: () => void} {
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
            <div className="tooltip textTooltip" style={{left: `${this.props.x + 10}px`, top: `${this.props.y + 10}px`}}>{this.props.children}</div>
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
                    this.state.currentTooltip ? React.createElement(this.state.currentTooltip, {children: this.state.tooltipData, x: this.state.tooltipX || 0, y: this.state.tooltipY || 0}) : null
                }
            </div>
        )
    }
}