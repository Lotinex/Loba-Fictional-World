

declare namespace KKWAE {
    type NeuronDatas = Partial<{
        lv: number;
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
        '@view-info': (name: Loba.AreaNames) => void;
        '@add-dialog': (dialog: JSX.Element) => void;
        '@update-stage-index': (targetIndex: number) => void;
    }>
}