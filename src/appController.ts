import AppModel from './appModel';
import AppView from './appView';

class AppController {
  model;

  view;

  constructor(model: AppModel, view: AppView) {
    this.model = model;
    this.view = view;

    this.render();

    this.view.quizPage.components.nextQuestionButton.bindEventHandler(this.changeQuizCategory);
    this.view.quizPage.components.quizAnswers.bindEventHandler(this.checkQuizAnswer);
  }

  render = () => {
    this.view.renderCategories(
      this.model.appState.quizCategories,
      this.model.appState.currentQuizCategoryNum
    );
    this.view.renderQuestion(this.model.getQuizQuestionData, this.model.appState.hasCorrectAnswer);
    this.view.renderAnswers(this.model.getQuizAnswers);
    this.view.renderBirdCard(this.model.getBirdCardData, !(this.model.appState.answerCount > 0));
  };

  changeQuizCategory = () => {
    this.model.incrementQuizCategoryNum();
    this.model.resetAnswerCount();
    this.model.resetHasCorrectAnswer();

    this.render();

    this.view.quizPage.components.quizAnswers.bindEventHandler(this.checkQuizAnswer);
    this.view.quizPage.components.nextQuestionButton.turnOff();
  };

  checkQuizAnswer = (answerNum: number) => {
    this.model.incrementAnswerCount();

    if (!this.model.appState.hasCorrectAnswer) {
      this.view.quizPage.components.quizAnswers.markErrorAnswer(answerNum);
    }

    if (answerNum === this.model.appState.currentQuizQuestionNum) {
      this.model.setHasCorrectAnswer();

      this.view.quizPage.components.nextQuestionButton.turnOn();
      this.view.quizPage.components.quizAnswers.markSuccessAnswer(answerNum);

      this.view.renderQuestion(
        this.model.getQuizQuestionData,
        this.model.appState.hasCorrectAnswer
      );
    }

    this.model.setCurrentAnswerNum(answerNum);

    this.view.renderBirdCard(this.model.getBirdCardData, !(this.model.appState.answerCount > 0));
  };
}

export default AppController;
