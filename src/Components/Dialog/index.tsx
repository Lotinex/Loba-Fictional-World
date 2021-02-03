import KKWAE from "../../Tools/KKWAE";
import React from 'react';
import './dialog.scss';
import { boundClass } from "autobind-decorator";

@boundClass
export class Dialog extends KKWAE<Attrib.Prop.Dialog, Attrib.State.Dialog> {
    ref: React.RefObject<HTMLDivElement> = React.createRef();
    state: Attrib.State.Dialog = {
        show: true
    };
    close(): void {
        this.setState({show: false})
    }
    static show(dialog: JSX.Element): void {
        KKWAE.trigger('@add-dialog', dialog)
    }
    render(){
        return (
            this.state.show ? 
            <div ref={this.ref} className="dialog dialog-appear" style={{width: `${this.props.width}px`, height: `${this.props.height}px`/*, left: `${ - this.state.x}px`, top: `${this.state.y}px`*/}}>
                <div className="dialog-head">
                    <div className="dialog-title">{this.props.title}</div>
                    <div className="dialog-close" onClick={this.close}><i className="fas fa-times" /></div>
                </div>
                <div className="dialog-body">
                    {this.props.children}
                </div>
            </div>
            : null
        )
    }
}
export class DialogRenderer extends KKWAE<{}, Attrib.State.DialogRenderer> {
    state: Attrib.State.DialogRenderer = {
        dialogs: []
    };
    ActionSynapse: KKWAE.Actions = {
        '@add-dialog': (dialog) => {
            this.setState({dialogs: [...this.state.dialogs, dialog]})
        }
    };
    render(){
        return (
            <div className="dialog-renderer">
                {
                    this.state.dialogs
                }
            </div>
        )
    }
}