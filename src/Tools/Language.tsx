import React from 'react';

import LANG_TABLE from '../Data/lang.json';

export default class L {
    static process(templateString: keyof typeof LANG_TABLE, ...replacers: string[]): string {
        let template = LANG_TABLE[templateString];
        template = template.replace(/\{#(\d+)\}/, (m: string, $1: string) => replacers[parseInt($1)]);
        return template;
    }
    static dprocess(templateString: string, ...replacers: string[]): string {
        return L.process(templateString as any, ...replacers)
    }
    static reactProcess(templateString: keyof typeof LANG_TABLE, ...replacers: string[]){

    }
}
