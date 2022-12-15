import AppModel from './appModel';
import AppView from './appView';

class AppController {
  model;

  view;

  answerAudio;

  constructor(model: AppModel, view: AppView) {
    this.model = model;
    this.view = view;

    this.view.renderGallery(this.model.getBirdsData);
    this.render();

    this.view.quizPage.components.nextQuestionButton.bindEventHandler(this.changeQuizCategory);
    this.view.quizPage.components.quizAnswers.bindEventHandler(this.checkQuizAnswer);
    this.view.resultsPage.bindEventHandler(this.startNewGame);

    this.answerAudio = new Audio();
  }

  startNewGame = () => {
    this.model.resetGame();
    this.render();

    this.view.quizPage.components.nextQuestionButton.removeEventHandler(this.goToResults);

    this.view.quizPage.components.quizAnswers.bindEventHandler(this.checkQuizAnswer);
    this.view.quizPage.components.nextQuestionButton.bindEventHandler(this.changeQuizCategory);
  };

  render = () => {
    this.view.renderCategories(
      this.model.appState.quizCategories,
      this.model.appState.currentQuizCategoryNum
    );
    this.view.renderQuestion(this.model.getQuizQuestionData, this.model.appState.hasCorrectAnswer);
    this.view.renderAnswers(this.model.getQuizAnswers);
    this.view.renderBirdCard(this.model.getBirdCardData, !(this.model.appState.answerCount > 0));
    this.view.quizPage.components.score.updateScore(this.model.appState.quizScore);
    this.view.quizPage.components.nextQuestionButton.updateButtonText(this.model.appState.isFinish);
    this.view.quizPage.components.nextQuestionButton.turnOff();
  };

  changeQuizCategory = () => {
    this.model.incrementQuizCategoryNum();
    this.model.setRandomQuestionNum();
    this.model.resetAnswerCount();
    this.model.resetHasCorrectAnswer();
    this.model.appState.checkedAnswers.clear();

    this.render();

    this.view.quizPage.components.quizAnswers.bindEventHandler(this.checkQuizAnswer);
    this.view.quizPage.components.nextQuestionButton.turnOff();

    if (
      this.model.appState.currentQuizCategoryNum ===
      this.model.appState.quizCategories.length - 1
    ) {
      this.model.setIsFinishGame();

      this.view.quizPage.components.nextQuestionButton.updateButtonText(
        this.model.appState.isFinish
      );
      this.view.quizPage.components.nextQuestionButton.bindEventHandler(this.goToResults);
    }
  };

  goToResults = () => {
    window.location.hash = '/results';

    this.view.resultsPage.render(this.model.appState.quizScore, this.model.appState.maxQuizScore);
    this.view.changePage();
  };

  checkQuizAnswer = (answerNum: number) => {
    if (!this.model.appState.hasCorrectAnswer) {
      if (!this.model.appState.checkedAnswers.has(answerNum)) {
        this.model.incrementAnswerCount();

        this.answerAudio.src = './assets/audio/fail-sound.wav';
        this.answerAudio.play();
      }

      if (answerNum === this.model.appState.currentQuizQuestionNum) {
        this.model.setHasCorrectAnswer();
        this.model.countQuizScore();

        this.answerAudio.src = './assets/audio/win-sound.wav';
        this.answerAudio.play();

        this.view.quizPage.components.nextQuestionButton.turnOn();
        this.view.quizPage.components.quizAnswers.markSuccessAnswer(answerNum);
        this.view.quizPage.components.score.updateScore(this.model.appState.quizScore);

        this.view.renderQuestion(
          this.model.getQuizQuestionData,
          this.model.appState.hasCorrectAnswer
        );
      } else {
        this.view.quizPage.components.quizAnswers.markErrorAnswer(answerNum);
      }

      this.model.appState.checkedAnswers.add(answerNum);
    }

    this.model.setCurrentAnswerNum(answerNum);
    this.view.renderBirdCard(this.model.getBirdCardData, !(this.model.appState.answerCount > 0));
  };
}

export default AppController;
