import LobaPlanet from '../Assets/Areas/loba_planet.png';
import Reverse from '../Assets/Areas/reverse.png';
import Universe from '../Assets/Areas/universe.png';
import Lourde from '../Assets/Areas/lourde.png';
import OldLourde from '../Assets/Areas/old_lourde.png';
import ArkCude from '../Assets/Areas/arkcube.png';

type AreaIdDataFormat<T> = {[key in Loba.AreaIds]: T};
type AreaNameDataFormat<T> = {[key in Loba.AreaNames]: T};

export default class Data {
    static AreaNames: AreaNameDataFormat<Loba.AreaIds> = {
        "로바계": "loba_planet",
        "리버스": "reverse",
        "우주": "universe",
        "로드": "lourde",
        "아크 큐브": "arkcube"
    };
    static AreaImages: AreaIdDataFormat<any> = {
        loba_planet: LobaPlanet,
        reverse: Reverse,
        universe: Universe,
        lourde: Lourde,
        arkcube: ArkCude
    };
    static AreaTypes: AreaIdDataFormat<Loba.AreaTypes> = {
        loba_planet: 'planet',
        reverse: 'planet',
        universe: 'other',
        lourde: 'star',
        arkcube: 'other'
    };
    static AreaLocations = {};
}