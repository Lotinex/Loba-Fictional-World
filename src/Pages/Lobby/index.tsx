import KKWAE from '../../Tools/KKWAE';
import React from 'react';
import './index.scss';
import { Menu } from '../../Components/Menu';
import { WorldMap } from '../../Components/WorldMap';
import { TooltipRenderer } from '../../Components/Tooltip';


export default class Index extends KKWAE {
    render(){
        return (
            <>
            <TooltipRenderer />
            <Menu />
            <div className="header">
                <div className="header-title">로바 세계관</div>
                <div className="header-subtitle">Loba Fictional World</div>
            </div>
            <WorldMap />
            </>
        )
    }
}
