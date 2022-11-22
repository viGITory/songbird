import './index.scss';

import AppController from './appController';
import AppModel from './appModel';
import AppView from './appView';

const app = new AppController(new AppModel(), new AppView());
console.log(app);
