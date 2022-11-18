import birdsData from './birdsData';

class AppModel {
  readonly birdsData;

  appState;

  constructor() {
    this.birdsData = birdsData;
    this.appState = {
      quizCategories: this.birdsData.map((item) => item.category),
      currentQuizCategoryNum: 0,
    };
  }

  incrementQuizCategoryNum = () => {
    if (this.appState.currentQuizCategoryNum < this.appState.quizCategories.length - 1) {
      this.appState.currentQuizCategoryNum += 1;
    }
  };
}

export default AppModel;
