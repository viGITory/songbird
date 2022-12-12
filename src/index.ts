import './index.scss';

import AppController from './appController';
import AppModel from './appModel';
import AppView from './appView';

(() => new AppController(new AppModel(), new AppView()))();
