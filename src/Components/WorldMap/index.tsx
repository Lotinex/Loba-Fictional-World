import './worldmap.scss';
import React from 'react';

import {boundClass} from 'autobind-decorator';
import KKWAE from '../../Tools/KKWAE';

import Reverse from './assets/reverse.png';
import LobaPlanet from './assets/loba_planet.png';
import Universe from './assets/universe.png';
import Lourde from './assets/lourde.png';
import ArkCube from './assets/arkcube.png';

import { TextTooltip, Tooltip } from '../Tooltip';
import { changePage } from '../../Tools/PageRender';
import L from '../../Tools/Language';


export function WorldMapEntityName(name: string, x: number, y: number) {
    return {
        name,
        nameX: x,
        nameY: y
    };
}
@boundClass
export class WorldMapEntity extends KKWAE<Attrib.Prop.WorldMapEntity> {
    goToExplanationPage(target: string): void {
        changePage('areas')
    }
    render(){
        return (
            <>
            <img 
                src={this.props.img} 
                className="worldMapEntity" 
                style={{left:`${this.props.x}px`, top:`${this.props.y}px`, width:`${this.props.w}px`, height:`${this.props.h}px`}}
                {...Tooltip.register(TextTooltip, this.props.desc)}
                onClick={() => this.goToExplanationPage(this.props.name)}
            />
            <div className="worldMapEntity-name"  {...Tooltip.register(TextTooltip, this.props.desc)} style={{left:`${this.props.nameX}px`, top:`${this.props.nameY}px`}}>{this.props.name}</div>
            </>
        )
    }
}

export class WorldMap extends KKWAE {
    static entities = [
        <WorldMapEntity {...WorldMapEntityName('로바계', 250, 300)} x={200} y={200} w={200} h={200} img={LobaPlanet} desc="로바인들이 살고 있는 행성"/>,
        <WorldMapEntity {...WorldMapEntityName('리버스', 330, 400)} x={330} y={330} w={100} h={100} img={Reverse} desc="리버시안의 주둔지"/>,
        <WorldMapEntity {...WorldMapEntityName('우주', 300, 670)} x={340} y={630} w={30} h={30} img={Universe} desc="인류가 살고 있는 우주"/>,
        <WorldMapEntity {...WorldMapEntityName('로드', 540, 600)} x={540} y={500} w={100} h={100} img={Lourde} desc="멸망한 마력 얼음의 행성"/>,
        <WorldMapEntity {...WorldMapEntityName('아크 큐브', 740, 300)} x={740} y={200} w={100} h={100} img={ArkCube} desc="우주를 떠돌고 있는 기계"/>,
    ];
    render(){
        return (
            <div className="worldMap">
                {WorldMap.entities}
            </div>
        )
    }
}