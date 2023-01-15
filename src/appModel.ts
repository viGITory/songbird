import birdsData from './birdsData';

import getRandomInteger from './utils/getRandomInteger';

class AppModel {
  readonly birdsData;

  appState;

  constructor() {
    this.birdsData = birdsData;
    this.appState = {
      quizScore: 0,
      maxQuizScore: 30,
      quizCategories: this.birdsData.map((item) => item.category),
      currentQuizCategoryNum: 0,
      currentQuizQuestionNum: getRandomInteger(0, 5),
      currentQuizAnswerNum: 0,
      answerCount: 0,
      checkedAnswers: new Set(),
      maxAnswersCount: 6,
      hasCorrectAnswer: false,
      isFinish: false,
    };
  }

  resetGame = () => {
    this.appState.quizScore = 0;
    this.appState.currentQuizCategoryNum = 0;
    this.appState.currentQuizAnswerNum = 0;
    this.appState.answerCount = 0;
    this.appState.hasCorrectAnswer = false;
    this.appState.isFinish = false;

    this.setRandomQuestionNum();
  };

  getBirdsData = () => {
    return this.birdsData;
  };

  setIsFinishGame = () => {
    this.appState.isFinish = !this.appState.isFinish;
  };

  setRandomQuestionNum = () => {
    this.appState.currentQuizQuestionNum = getRandomInteger(0, 5);
  };

  getQuizQuestionData = () => {
    return this.birdsData[this.appState.currentQuizCategoryNum]!.birds[
      this.appState.currentQuizQuestionNum
    ]!;
  };

  getCurrentCategoryBirds = () => {
    return this.birdsData[this.appState.currentQuizCategoryNum]!.birds;
  };

  getQuizAnswers = () => {
    return this.birdsData[this.appState.currentQuizCategoryNum]!.birds.map((item) => item.name);
  };

  getBirdCardData = () => {
    return this.birdsData[this.appState.currentQuizCategoryNum]!.birds[
      this.appState.currentQuizAnswerNum
    ]!;
  };

  setCurrentAnswerNum = (answer: number) => {
    this.appState.currentQuizAnswerNum = answer;
  };

  incrementQuizCategoryNum = () => {
    if (this.appState.currentQuizCategoryNum < this.appState.quizCategories.length - 1) {
      this.appState.currentQuizCategoryNum += 1;
    }
  };

  incrementAnswerCount = () => {
    this.appState.answerCount += 1;
  };

  resetAnswerCount = () => {
    this.appState.answerCount = 0;
  };

  resetHasCorrectAnswer = () => {
    this.appState.hasCorrectAnswer = false;
  };

  setHasCorrectAnswer = () => {
    this.appState.hasCorrectAnswer = true;
  };

  countQuizScore = () => {
    this.appState.quizScore += this.appState.maxAnswersCount - this.appState.answerCount;
  };
}

export default AppModel;
