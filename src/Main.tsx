import React from 'react';

import {changePage, render} from './Tools/PageRender';

import Index from './Pages/Lobby';

changePage('index')

const PathTable = {
  'index': Index,
};

render(PathTable)