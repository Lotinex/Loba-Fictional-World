import KKWAE from "../../Tools/KKWAE";
import React from 'react';

import './menu.scss';
import {boundClass} from 'autobind-decorator';
import { TextTooltip, Tooltip } from "../Tooltip";


const menuItems = [
    {icon: 'fas fa-map', text: '월드맵'},
    {icon: 'fas fa-user', text: '등장인물'},
    {icon: 'fas fa-hat-wizard', text: '설정 및 능력'}
];
@boundClass
export class Menu extends KKWAE<{}, Attrib.State.Menu> {
    state: Attrib.State.Menu = {
        active: false
    };
    onMenuClick(): void {
        this.setState({active:true})
        KKWAE.trigger('@tooltip-off')
    }
    render(){
        return (
            <>
                {
                    !this.state.active ? 
                    <div className="menu-hover" onClick={this.onMenuClick} {...Tooltip.register(TextTooltip, "클릭하여 메뉴 보기")}>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    : null
                }
                <div 
                    className="menu" 
                    style={this.state.active ? {left:0} : {left:-250}} 
                    onMouseLeave={() => this.setState({active:false})}
                >
                    <div className="menu-head">
                        <div className="menu-head-title">로바 세계관</div>
                        <div className="menu-head-subtitle">둘러보기</div>
                    </div>
                    {
                        menuItems.map(item => <div className="menu-item"><i className={item.icon} />{item.text}</div>)
                    }
                </div>
            </>
        )
    }
}