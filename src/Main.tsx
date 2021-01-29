import React from 'react';

import {changePage, render} from './Tools/PageRender';

import Index from './Pages/Lobby';
import Areas from './Pages/Areas';

changePage('index')

const PathTable = {
  'index': Index,
  'areas': Areas
};

render(PathTable)