import KKWAE from '../../Tools/KKWAE';
import React from 'react';
import './index.scss';
import { Menu } from '../../Components/Menu';
import { WorldMap } from '../../Components/WorldMap';
import { TooltipRenderer } from '../../Components/Tooltip';
import { boundClass } from 'autobind-decorator';


import L from '../../Tools/Language';
import Data from '../../Tools/Data';
import { SpaceBackground } from '../../Components/SpaceBackground';

class AreaProperty extends KKWAE<Attrib.Prop.AreaProperty> {
    render(){
        return (
            <span className="area-property">
                <span className="area-property-name">{this.props.property}</span>
                <span className="area-property-value">{this.props.value}</span>
            </span>
        )
    }
}
@boundClass
export default class Index extends KKWAE<{}, Attrib.State.Index> {
    state: Attrib.State.Index = {};
    ActionSynapse: KKWAE.Actions = {
        '@view-info': (name) => {
            this.setState({viewInfoName: name})
        }
    };
    get AreaId() {
        return Data.AreaNames[this.state.viewInfoName!];
    }
    render(){
        return (
            <>
                <TooltipRenderer />
                <Menu />
                <div className="header">
                    <div className="header-title">로바 세계관</div>
                    <div className="header-subtitle">Loba Fictional World</div>
                </div>
                <SpaceBackground distance={0.03}/>
                <SpaceBackground distance={0.01}/>
                {
                    this.state.viewInfoName ? 
                    <div className="areaInfo" style={{right: '-300px'}}>
                        <div className="areaInfo-head">
                            <div className="areaInfo-name">{this.state.viewInfoName}</div>
                            <img className="areaInfo-img" src={Data.AreaImages[this.AreaId]}/>
                        </div>
                        <div className="areaInfo-body">
                            <div className="areaInfo-properties">
                                <AreaProperty property="유형" value={Data.AreaTypes[this.AreaId]}/>
                                <AreaProperty property="위치" value={Data.AreaTypes[this.AreaId]}/>
                            </div>
                        </div>
                    </div> 
                    : null
                }
                <WorldMap />
            </>
        )
    }
}
