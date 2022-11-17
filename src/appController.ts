import AppModel from './appModel';
import AppView from './appView';

class AppController {
  model;

  view;

  constructor(model: AppModel, view: AppView) {
    this.model = model;
    this.view = view;
  }
}

export default AppController;
