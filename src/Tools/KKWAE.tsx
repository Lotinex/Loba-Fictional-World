import React from 'react';

export default abstract class KKWAE<P = {}, S = {}> extends React.PureComponent<P, S> {
    public static Neuron: KKWAE.NeuronDatas = {
        sp: 0,
    };
    private static CONNECTED_SYNAPSES: KKWAE.ConnectedSynapses = {};
    private static CONNECTED_ACTION_SYNAPSES: KKWAE.ConnectedActionSynapses = {};
    protected readonly Synapse: KKWAE.Synapse = {};
    protected readonly ActionSynapse: KKWAE.Actions = {};
    abstract render(): React.ReactNode;

    public static transmit<K extends keyof KKWAE.NeuronDatas, V extends KKWAE.NeuronDatas[K]>(target: K, data: V): void {
        const synapses = KKWAE.CONNECTED_SYNAPSES[target];
        const prev = KKWAE.Neuron[target];
        KKWAE.Neuron[target] = data;
        if(!synapses) return;
        for(const synapse of synapses!){
            synapse.apply(synapse, [prev, KKWAE.Neuron[target]])
        }
    }
    public static trigger<K extends keyof KKWAE.Actions, A extends TypeUtil.ArgumentsOf<KKWAE.Actions[K]>>(action: K, ...args: A): void {
        const synapses = KKWAE.CONNECTED_ACTION_SYNAPSES[action];
        if(!synapses) return;
        for(const synapse of synapses!){
            (synapse as any).call(synapse, ...args)
        }
    }
    componentDidMount(): void {
        let key: keyof KKWAE.NeuronDatas;
        for(key in this.Synapse){
            if(KKWAE.CONNECTED_SYNAPSES.hasOwnProperty(key)) KKWAE.CONNECTED_SYNAPSES[key]!.push(this.Synapse[key]!)
            else KKWAE.CONNECTED_SYNAPSES[key] = [this.Synapse[key]!];
        }
        let action: keyof KKWAE.Actions;
        for(action in this.ActionSynapse){
            if(KKWAE.CONNECTED_ACTION_SYNAPSES.hasOwnProperty(action)) KKWAE.CONNECTED_ACTION_SYNAPSES[action]!.push(this.ActionSynapse[action] as any)
            else KKWAE.CONNECTED_ACTION_SYNAPSES[action] = [this.ActionSynapse[action] as any];
        }
    }

}
