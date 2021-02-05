import React from 'react';

import {changePage, render} from './Tools/PageRender';

import Index from './Pages/Lobby';
import Areas from './Pages/Areas';
import Connellow from './Pages/Connellow';

const PathTable = {
  'index': Index,
  'areas': Areas,
  'Connellow': Connellow
};

render(PathTable)
