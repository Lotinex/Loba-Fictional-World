import LobaPlanet from '../Assets/Areas/loba_planet.png';
import Reverse from '../Assets/Areas/reverse.png';
import Universe from '../Assets/Areas/universe.png';
import Lourde from '../Assets/Areas/lourde.png';
import OldLourde from '../Assets/Areas/old_lourde.png';
import ArkCude from '../Assets/Areas/arkcube.png';
import Eden from '../Assets/Areas/eden.png';

type AreaIdDataFormat<T> = {[key in Loba.AreaIds]: T};
type AreaNameDataFormat<T> = {[key in Loba.AreaNames]: T};

export default class Data {
    static AreaNames: AreaNameDataFormat<Loba.AreaIds> = {
        "로바계": "loba_planet",
        "리버스": "reverse",
        "우주": "universe",
        "로드": "lourde",
        "아크 큐브": "arkcube",
        "에덴": "eden",
        '과거의 로드': 'old_lourde'
    };
    static AreaImages: AreaIdDataFormat<any> = {
        loba_planet: LobaPlanet,
        reverse: Reverse,
        universe: Universe,
        lourde: Lourde,
        arkcube: ArkCude,
        eden: Eden,
        old_lourde: OldLourde

    };
    static AreaTypes: AreaIdDataFormat<Loba.AreaTypes> = {
        loba_planet: 'planet',
        reverse: 'planet',
        universe: 'other',
        lourde: 'star',
        arkcube: 'other',
        eden: 'planet',
        old_lourde: 'planet'
    };
    static AreaLocations = {};
}