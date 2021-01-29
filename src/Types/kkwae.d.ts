

declare namespace KKWAE {
    type NeuronDatas = Partial<{
        sp: number;
    }>;
    type ConnectedSynapses = {
        [key in keyof KKWAE.NeuronDatas]: Array<(prev: KKWAE.NeuronDatas[key], curr: KKWAE.NeuronDatas[key]) => void>;
    };
    type ConnectedActionSynapses = {
        [key in keyof KKWAE.Actions]: Array<KKWAE.Actions[key]>;
    }
    type Synapse = {
        [key in keyof KKWAE.NeuronDatas]: (prev: KKWAE.NeuronDatas[key], curr: KKWAE.NeuronDatas[key]) => void;
    };
    type Actions = Partial<{
        '@tooltip': (tooltip: TypeUtil.ClassType<import("../Components/Tooltip").Tooltip>, data: any) => void;
        '@tooltip-move': (x: number, y: number) => void;
        '@tooltip-off': () => void;
        '@zoom-in': (x: number, y: number) => void;
    }>
}