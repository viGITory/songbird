import birdsData from './birdsData';

import getRandomInteger from './utils/getRandomInteger';

class AppModel {
  readonly birdsData;

  appState;

  constructor() {
    this.birdsData = birdsData;
    this.appState = {
      quizScore: 0,
      quizCategories: this.birdsData.map((item) => item.category),
      currentQuizCategoryNum: 0,
      currentQuizQuestionNum: getRandomInteger(0, 5),
      currentQuizAnswerNum: 0,
      answerCount: 0,
      hasCorrectAnswer: false,
    };
  }

  getQuizQuestionData = () => {
    return this.birdsData[this.appState.currentQuizCategoryNum]!.birds[
      this.appState.currentQuizQuestionNum
    ]!;
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
    const maxAnswers = 6;

    if (this.appState.hasCorrectAnswer || this.appState.answerCount === maxAnswers) return;

    this.appState.quizScore += maxAnswers - this.appState.answerCount;
  };
}

export default AppModel;
