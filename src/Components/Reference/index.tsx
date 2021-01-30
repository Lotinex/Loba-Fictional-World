import './reference.scss';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import { CharacterTooltip, Tooltip } from '../Tooltip';

export class CharacterReference extends KKWAE<Attrib.Prop.Reference> {
    render(){
        return (
            <span className="char-reference" {...Tooltip.register(CharacterTooltip, {
                img: '',
                desc: 'asdf',
                name: '엘더'
            })}><img className="char-reference-img" src={this.props.icon}></img>{this.props.children}</span>
        )
    }
}
