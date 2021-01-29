import './reference.scss';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';

export class Reference extends KKWAE<Attrib.Prop.Reference> {
    render(){
        return (
            <span className="reference">{this.props.icon ? <i className={`fas fa-${this.props.icon}`} /> : null}{this.props.children}</span>
        )
    }
}