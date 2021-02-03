import { boundClass } from 'autobind-decorator';
import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import Util from '../../Tools/Util';
import './spacebackground.scss';

export class Star {
    constructor(public x: number, public y: number){}
    render(ctx: CanvasRenderingContext2D, size: number): void {
        ctx.beginPath()
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}

@boundClass
export class SpaceBackground extends KKWAE<Attrib.Prop.SpaceBackground, Attrib.State.SpaceBackground> {
    ref: React.RefObject<HTMLCanvasElement> = React.createRef();
    stars: Star[] = [];
    ctx?: CanvasRenderingContext2D;
    state: Attrib.State.SpaceBackground = {
        x: 0,
        y: 0
    };
    componentDidMount(): void {
        this.ctx = this.ref.current!.getContext('2d')!;
        for(let i=0; i<Util.intRandom(50, 65); i++){
            this.stars.push(new Star(Util.intRandom(0, 1500), Util.intRandom(0, 750)))
        }
        requestAnimationFrame(this.renderStars)
        window.addEventListener("mousemove", e => {
            this.onMouseMove(e)
        })
    }
    renderStars(): void {
        for(const star of this.stars){
            star.render(this.ctx!, Util.intRandom(0.1, this.props.distance * 10))
        }
        requestAnimationFrame(this.renderStars)
    }
    onMouseMove(e: MouseEvent): void {
        this.setState({x: 0 - e.pageX * this.props.distance})
        this.setState({y: 0 - e.pageY * this.props.distance})
    }
    render(){
        return (
            <canvas className="space-background" style={{left: `${this.state.x}px`, top: `${this.state.y}px`}} ref={this.ref} width={window.innerWidth} height={window.innerHeight}/>
        )
    }
}