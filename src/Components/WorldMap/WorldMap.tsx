import './worldmap.scss';
import React from 'react';

import {boundClass} from 'autobind-decorator';
import KKWAE from '../../Tools/KKWAE';

import Reverse from './assets/reverse.png';
import LobaPlanet from './assets/loba_planet.png';
import Universe from './assets/universe.png';

import { TextTooltip, Tooltip } from '../Tooltip/Tooltip';

export class WorldMapEntity extends KKWAE<Attrib.Prop.WorldMapEntity> {
    render(){
        return (
            <>
            <img 
                src={this.props.img} 
                className="worldMapEntity" 
                style={{left:`${this.props.x}px`, top:`${this.props.y}px`, width:`${this.props.w}px`, height:`${this.props.h}px`}}
                {...Tooltip.register(TextTooltip, this.props.desc)}
            />
            <div className="worldMapEntity-name" style={{left:`${this.props.x + (this.props.w <= 70 ? -this.props.w / 4 : this.props.w / 2)}px`, top:`${this.props.y + this.props.h / 2}px`}}>{this.props.name}</div>
            </>
        )
    }
}
export class WorldMap extends KKWAE {
    static entities = [
        <WorldMapEntity x={200} y={150} w={350} h={350} img={LobaPlanet} desc="로바인들이 살고 있는 행성" name="로바계"/>,
        <WorldMapEntity x={370} y={330} w={200} h={200} img={Reverse} desc="리버시안의 주둔지" name="리버스"/>,
        <WorldMapEntity x={340} y={630} w={70} h={70} img={Universe} desc="인류가 살고 있는 우주" name="우주"/>,
    ];
    render(){
        return (
            <div className="worldMap">
                {WorldMap.entities}
            </div>
        )
    }
}