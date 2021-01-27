import React from 'react';

export default class Rest {
    public static loop(number: number, action: (i: number) => JSX.Element): JSX.Element[] {
        let res = [];
        for(let i=0; i<number; i++){
            res.push(action(i))
        }
        return res;
    }
}