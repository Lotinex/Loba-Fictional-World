import React from 'react';

import * as LANG_TABLE from '../Data/lang.json';

export default class L {
    static process(templateString: keyof typeof LANG_TABLE, ...replacers: string[]): string {
        return 'asdf';
    }
    static reactProcess(templateString: keyof typeof LANG_TABLE, ...replacers: string[]){

    }
}