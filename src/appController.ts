import AppModel from './appModel';
import AppView from './appView';

class AppController {
  model;

  view;

  constructor(model: AppModel, view: AppView) {
    this.model = model;
    this.view = view;

    this.view.renderCategories(this.getQuizCategories);

    this.view.quizPage.components.nextQuestionButton.bindEventHandler(this.changeQuizCategory);
  }

  getQuizCategories = () => {
    return this.model.appState.quizCategories;
  };

  changeQuizCategory = () => {
    this.model.incrementQuizCategoryNum();

    this.view.quizPage.components.quizCategories.highlightCurrentCategory(
      this.model.appState.currentQuizCategoryNum
    );
  };
}

export default AppController;
