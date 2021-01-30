import './index.scss';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import { Menu } from '../../Components/Menu';
import { CharacterTooltip, TextTooltip, Tooltip, TooltipRenderer } from '../../Components/Tooltip';

import LobaPlanet from '../../Assets/Areas/loba_planet.png';
import Reverse from '../../Assets/Areas/reverse.png';
import Universe from '../../Assets/Areas/universe.png';
import Lourde from '../../Assets/Areas/lourde.png';
import OldLourde from '../../Assets/Areas/old_lourde.png';

import Reversian from '../../Assets/Characters/reversian.png';

import L from '../../Tools/Language';
import { CharacterReference } from '../../Components/Reference';

export class AreaAssociatedChar extends KKWAE<Attrib.Prop.AreaAssociatedChar> {
    render(){
        return (
            <img className="area-associated-char" src={this.props.img} {...Tooltip.register(CharacterTooltip, {
                img: this.props.img,
                name: L.dprocess(`char_${this.props.id}_name`),
                desc: L.dprocess(`char_${this.props.id}_desc`)
            })} />
        )
    }
}
export class Area extends KKWAE<Attrib.Prop.Area, Attrib.State.Area> {
    state: Attrib.State.Area = {
        showAdditional: false
    };
    componentDidMount(): void {
        super.componentDidMount()
    }
    static AreaTypeIcon = {
        star: 'star',
        planet: 'globe-asia',
        other: 'question'
    };
    render(){
        return (
            <div className={`area ${this.props.sub ? 'sub-area' : ''} ${this.state.showAdditional ? 'show-actived' : ''}`}>
                <div className="area-title">
                    <span className={`area-type fas fa-${Area.AreaTypeIcon[this.props.type]}`} {...Tooltip.register(TextTooltip, L.dprocess(`area_icon_${this.props.type}`))}/>
                    <span className="area-name">{this.props.name}</span>
                    <span className="associated-chars">{this.props.associatedChars}</span>
                    {
                        this.props.additional ? 
                        <span 
                            {...Tooltip.register(TextTooltip, L.process("additional_number_info", this.props.additional.length.toString()))}
                            onClick={() => this.setState({showAdditional : !this.state.showAdditional})} 
                            className={`area-show-button fas fa-chevron-${this.state.showAdditional ? 'down' : 'right'}`}
                        />
                        : null
                    }
                </div>
                <div className="area-body">
                    <img className="area-img" src={this.props.img} width={200} height={200} />
                    <div className="area-description">{this.props.description}</div>
                </div>
                {
                    this.props.additional ? 
                    <div className="area-additional">{this.state.showAdditional ? this.props.additional : null}</div>
                    : null
                }
            </div>
        )
    }
}
export default class Areas extends KKWAE {
    render(){
        return (
            <>
            <TooltipRenderer />
            <Menu />
            <div className="container">
                <Area type="planet" name="로바계" img={LobaPlanet} description={L.process('loba_planet_description')}/>
                <Area type="planet" name="리버스" img={Reverse} description={L.process('reverse_description')} associatedChars={[
                    <AreaAssociatedChar id="reversian" img={Reversian}/>
                ]}/>
                <Area type="other" name="우주" img={Universe} description={L.process('universe_description')}/>
                <Area type="star" name="멸망한 로드" img={Lourde} description={L.process('lourde_description')} additional={[
                    <Area type="planet" sub name="로드" img={OldLourde} description={L.process('old_lourde_description')} />
                ]}/>
            </div>
            </>
        )
    }
}