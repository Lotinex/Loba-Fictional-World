import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import './transitioneffect.scss';

export class TransitionEffect extends KKWAE<{}, Attrib.State.TransitionEffect> {
    ref: React.RefObject<HTMLDivElement> = React.createRef();
    state: Attrib.State.TransitionEffect = {
        active: false
    };
    ActionSynapse: KKWAE.Actions = {
        '@transition': () => {
            this.setState({active: true})
            this.ref.current!.onanimationend = () => {
                this.setState({active: false})
            };
        }
    };
    static do(): void {
        KKWAE.trigger('@transition')
    }
    render(){
        return (
            <div ref={this.ref} className={`transition-effect-mask${this.state.active ? " transition-active" : ""}`} />
        )
    }
}