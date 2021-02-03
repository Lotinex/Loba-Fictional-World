import { boundClass } from 'autobind-decorator';
import React from 'react';
import { Menu } from '../../Components/Menu';
import { SpaceBackground } from '../../Components/SpaceBackground';
import { TooltipRenderer } from '../../Components/Tooltip';
import KKWAE from '../../Tools/KKWAE';
import './index.scss';

import Char from '../../Assets/Connellow/char.png';
import { Dialog, DialogRenderer } from '../../Components/Dialog';


import LobaPlanet from '../../Assets/Areas/loba_planet.png';
import Reverse from '../../Assets/Areas/reverse.png';
import Universe from '../../Assets/Areas/universe.png';
import Lourde from '../../Assets/Areas/lourde.png';
import ArkCube from '../../Assets/Areas/arkcube.png';
import Eden from '../../Assets/Areas/eden.png';
import OldLourde from '../../Assets/Areas/old_lourde.png';
import L from '../../Tools/Language';

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
        this.props.changeSelectedStage(this.props.name)
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
                <img className={`stage-img`} src={this.props.img}/>
                <div className={`stage-name ${this.state.index == 0 ? `stage-name-selected` : ``}`}>{this.props.name}</div>
            </div>
        )
    }
}
@boundClass
class Stages extends KKWAE<{}, Attrib.State.Stages> {
    state: Attrib.State.Stages = {
        currentSelection: '로바계'
    };
    static stageNumber = 6;
    stageStart(): void {
        Dialog.show(<Dialog title="전송 중" width={300} height={150}>{L.process('stage_loading', this.state.currentSelection)}</Dialog>)
    }
    changeSelectedStage(stage: Loba.AreaNames): void {
        this.setState({currentSelection: stage})
    }
    render(){
        return (
            <div className="stages">
                <Stage img={LobaPlanet} name="로바계" index={0} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={Reverse} name="리버스" index={1} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={Universe} name="우주" index={2} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={Lourde} name="로드" index={-1} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={ArkCube} name="아크 큐브" index={-2} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={Eden} name="에덴" index={3} changeSelectedStage={this.changeSelectedStage}/>
                <Stage img={OldLourde} name="과거의 로드" index={-3} changeSelectedStage={this.changeSelectedStage}/>

                <div className="pure-button go" onClick={this.stageStart}><i className="fas fa-check" />여기로 선택!</div>
            </div>
        )
    }
}
@boundClass 
class PureButton extends KKWAE<Attrib.Prop.PureButton> {
    render(){
        return (
            <div className={`pure-button ${this.props.className}`}>
                <i className={`fas fa-${this.props.icon}`} />
                {this.props.children}
            </div>
        )
    }
}
class Profile extends KKWAE {
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
                    <PureButton className="open-inventory" icon="archive">보관함</PureButton>
                    <PureButton className="open-skills" icon="book">스킬</PureButton>
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
                <Profile />
            </div>
        )
    }
}
@boundClass
export default class Connellow extends KKWAE<{}, Attrib.State.Connellow> {
    state: Attrib.State.Connellow = {
        inGame: false
    };
    startGame(): void {
        this.setState({inGame: true})
    }
    render(){
        return (
            <>
                <Menu />
                <TooltipRenderer />
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