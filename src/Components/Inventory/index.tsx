import React from 'react';
import KKWAE from '../../Tools/KKWAE';
import Rest from '../../Tools/Rest';
import { ItemTooltip, Tooltip } from '../Tooltip';
import './inventory.scss';

import Music from '../../Assets/Connellow/music.jpg';

export class ItemTag extends KKWAE<Attrib.Prop.ItemTag> {
    render(){
        return (
            <div className="item-tag" style={{background: this.props.color}}>{this.props.children}</div>
        )
    }
}
export class InventoryItem extends KKWAE<Attrib.Prop.InventoryItem> {
    render(){
        return (
            <div className="inventory-box" {...Tooltip.register(ItemTooltip, {
                desc: this.props.desc,
                name: this.props.name,
                img: this.props.img,
                tags: this.props.tags
            })}>
                <img className="inventory-box-img" src={this.props.img} />
            </div>
        )
    }
}
export class Inventory extends KKWAE {
    render(){
        return (
            <div className="inventory">
                <div className="inventory-head">
                    보관함
                    <span className="inventory-close"><i className="fas fa-times" /></span>
                </div>
                <div className="inventory-body">
                {
                    Rest.loop(60, (i) => {
                        return <InventoryItem img={Music} name="둠칫 쿵 치키타" desc="어디에 쓰는 무기인지 잘 모르겠다." tags={[
                            <ItemTag color="red">공격</ItemTag>,
                            <ItemTag color="green">민첩</ItemTag>
                        ]}/>
                    })
                }
                </div>
            </div>
        )
    }
}