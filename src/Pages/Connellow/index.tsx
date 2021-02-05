import { boundClass } from 'autobind-decorator';
import React from 'react';
import { Menu } from '../../Components/Menu';
import { SpaceBackground } from '../../Components/SpaceBackground';
import { TooltipRenderer } from '../../Components/Tooltip';
import KKWAE from '../../Tools/KKWAE';
import './index.scss';

import Char from '../../Assets/Connellow/char.png';
import { Dialog, DialogOKButton, DialogRenderer } from '../../Components/Dialog';


import LobaPlanet from '../../Assets/Areas/loba_planet.png';
import Reverse from '../../Assets/Areas/reverse.png';
import Universe from '../../Assets/Areas/universe.png';
import Lourde from '../../Assets/Areas/lourde.png';
import ArkCube from '../../Assets/Areas/arkcube.png';
import Eden from '../../Assets/Areas/eden.png';
import OldLourde from '../../Assets/Areas/old_lourde.png';
import L from '../../Tools/Language';
import Util from '../../Tools/Util';
import { TransitionEffect } from '../../Components/TransitionEffect';
import { Inventory } from '../../Components/Inventory';

@boundClass
class GameTitle extends KKWAE<Attrib.Prop.GameTitle> {
    render(){
        return (
            <>
                <div className="game-title-body">
                    <div className="game-title">Connellow</div>
                    <div className="game-subtitle">커넬로우</div>
                    <div className="game-start" onClick={this.props.startGame}>시작하기</div>
                </div>
            </>
        )
    }
}
@boundClass
class Stage extends KKWAE<Attrib.Prop.Stage, Attrib.State.Stage> {
    state: Attrib.State.Stage = {
        selected: false,
        index: 0
    };
    ActionSynapse: KKWAE.Actions = {
        '@update-stage-index': (targetIndex) => {
            this.setState({index: this.state.index - targetIndex})
        }
    };
    componentDidMount(): void {
        super.componentDidMount()
        this.setState({index: this.props.index})
    }
    select(): void {
        this.setState({selected: true, index: 0})
        KKWAE.trigger('@update-stage-index', this.state.index)
        this.props.changeSelectedStage(this.props.name, this.props.reqLv)
    }
    render(){
        return (
            <div 
                className={`stage ${this.state.index == 0 ? 'selected-stage' : ''}`} 
                style={{
                    left: `${50 + this.state.index * 10}%`, 
                    zIndex: Stages.stageNumber - Math.abs(this.state.index),
                    transform: `scale(${1 - 0.1 * Math.abs(this.state.index)}) translateX(-50%)`,
                    filter: `brightness(${1 - 0.15 * Math.abs(this.state.index)})`
                }} 
                onClick={this.select}
            >
                <img className={`stage-img`} src={this.props.img} style={{
                    filter: `brightness(${KKWAE.Neuron.lv! < this.props.reqLv ? 0.25 : 1})`
                }}/>
                {
                    KKWAE.Neuron.lv! < this.props.reqLv ? 
                    <div className="stage-locked">
                        <i className="fas fa-lock" />
                        <div className="stage-lv-required">{L.process("stage_level_required", this.props.reqLv.toString())}</div>
                        <div className="stage-lack-lv">{L.process("stage_lack_lv", (this.props.reqLv - KKWAE.Neuron.lv!).toString())}</div>
                    </div> 
                    : null 
                }
                <div className={`stage-name ${this.state.index == 0 ? `stage-name-selected` : ``}`}>{this.props.name}</div>
            </div>
        )
    }
}
@boundClass
class Stages extends KKWAE<{}, Attrib.State.Stages> {
    state: Attrib.State.Stages = {
        currentSelection: '로바계',
        cannotGo: false,
    };
    static stageNumber = 6;
    stageStart(): void {
        if(this.state.cannotGo) return;
        Dialog.show(
            <Dialog hasOK title="전송 중" width={300} height={130} onOK={() => TransitionEffect.do()}>
                {L.process('stage_loading', this.state.currentSelection)}
            </Dialog>
        )
    }
    changeSelectedStage(stage: Loba.AreaNames, reqLv: number): void {
        this.setState({currentSelection: stage})
        if(KKWAE.Neuron.lv! < reqLv) this.setState({cannotGo: true})
        else this.setState({cannotGo: false})
    }
    render(){
        return (
            <div className="stages">
                <Stage reqLv={1} img={LobaPlanet} name="로바계" index={0} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={1} img={Reverse} name="리버스" index={1} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={1}img={Universe} name="우주" index={2} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={25}img={Lourde} name="로드" index={-1} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={1} img={ArkCube} name="아크 큐브" index={-2} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={999}img={Eden} name="에덴" index={3} changeSelectedStage={this.changeSelectedStage}/>
                <Stage reqLv={100} img={OldLourde} name="과거의 로드" index={-3} changeSelectedStage={this.changeSelectedStage}/>

                <div className={`pure-button ${this.state.cannotGo ? "cannotgo" : "go"}`} onClick={this.stageStart}><i className={`fas fa-${this.state.cannotGo ? "lock" : "check"}`} />{this.state.cannotGo ? "여기로는 갈 수 없습니다." : "여기로 선택!"}</div>
            </div>
        )
    }
}
@boundClass 
class PureButton extends KKWAE<Attrib.Prop.PureButton> {
    render(){
        return (
            <div className={`pure-button ${this.props.className}`} onClick={this.props.onClick}>
                <i className={`fas fa-${this.props.icon}`} />
                {this.props.children}
            </div>
        )
    }
}
@boundClass
class Profile extends KKWAE {
    openInventory(): void {
        Dialog.show(<Inventory />)
    }
    render(){
        return (
            <div className="profile">
                <div className="profile-head">
                    <img className="profile-img" src={Char}/>
                    <div className="profile-title">
                        <span className="profile-name">용사1</span>
                        <span className="profile-lv">Lv.{KKWAE.Neuron.lv}</span>
                    </div>
                </div>
                <div className="profile-body">
                    <PureButton className="open-inventory" icon="archive" onClick={this.openInventory}>보관함</PureButton>
                    <PureButton className="open-skills" icon="book">스킬</PureButton>
                </div>
            </div>
        )
    }
}
class ActiveMenu extends KKWAE {
    render(){
        return (
            <div className="active-menu">
                <div className="active-menu-head"><i className="fas fa-compass" /></div>
                <div className="active-menu-buttons">
                    <PureButton className="shop" icon="store">상점</PureButton>
                    <PureButton className="practice" icon="infinity">연습</PureButton>
                </div>
            </div>
        )
    }
}
@boundClass
class Game extends KKWAE {
    render(){
        return (
            <div className="game">
                <div className="stages-title">스테이지를 선택하세요.</div>
                <Stages />
                <ActiveMenu />
                <Profile />
            </div>
        )
    }
}
@boundClass
export default class Connellow extends KKWAE<{}, Attrib.State.Connellow> {
    state: Attrib.State.Connellow = {
        inGame: true
    };
    startGame(): void {
        this.setState({inGame: true})
    }
    componentDidMount(): void {
        Util.setPageOverflow(false)
    }
    render(){
        return (
            <>
                <TransitionEffect/>
                <TooltipRenderer />
                <Menu />
                <DialogRenderer />
                <div className="game">
                    {!this.state.inGame ? <GameTitle startGame={this.startGame}/> : <Game />}
                    <SpaceBackground distance={0.03}/>
                    <SpaceBackground distance={0.01}/>
                </div>
            </>
        )
    }
}