import KKWAE from "../../Tools/KKWAE";
import React from 'react';

import './menu.scss';
import {boundClass} from 'autobind-decorator';
import { TextTooltip, Tooltip } from "../Tooltip";
import { changePage } from "../../Tools/PageRender";
import { Dialog } from "../Dialog";


const menuItems = [
    {icon: 'fas fa-map', text: '월드맵'},
    {icon: 'fas fa-user', text: '등장인물'},
    {icon: 'fas fa-hat-wizard', text: '설정 및 능력'},
    {icon: 'fas fa-mountain', text: '지역'},
    {icon: 'fas fa-gamepad', text: '커넬로우'}
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
    goToAreasPage(): void {
        changePage('areas')
    }
    menuAction(type: string): void {
        switch(type){
            case '월드맵':
                changePage('index')
                break;
            case '등장인물':
                Dialog.show(<Dialog title="접근 불가" width={250} height={100}>아직 개발되지 않은 구역입니다.</Dialog>)
                break;
            case '설정 및 능력':
                Dialog.show(<Dialog title="접근 불가" width={250} height={100}>아직 개발되지 않은 구역입니다.</Dialog>)
                break;
            case '지역':
                changePage('areas')
                break;
            case '커넬로우':
                changePage('connellow')
                break;
        }
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
                        menuItems.map(item => <div className="menu-item" onClick={() => this.menuAction(item.text)}><i className={item.icon} />{item.text}</div>)
                    }
                </div>
            </>
        )
    }
}