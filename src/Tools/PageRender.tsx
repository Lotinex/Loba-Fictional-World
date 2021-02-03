import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Index from '../Pages/Lobby';

type PathTable = {
    [hash: string]: React.FunctionComponent<{}> | React.ComponentClass<{}, any>;
}
export function changePage(stage: string):void {
    if(stage == 'index') window.location.href = '';
    else window.location.hash = `#/${stage}`
}
export function render(pathTable: PathTable):void {
    ReactDOM.render(
        <HashRouter>
            {
                Object.keys(pathTable).map((path, index) => {
                    return (
                        /**
                         * path가 'index' 면 기본(/) 으로 취급한다.
                         */
                        <Route exact path={`/${path == 'index' ? '' : path}`} component={pathTable[path]}/>
                    )
                })
            }
        </HashRouter>,
        document.getElementById('stage')
    )
}
