import { IBirdData } from './types';

import QuizPage from './components/pages/quizPage/quizPage';

class AppView {
  root;

  quizPage;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;

    this.quizPage = new QuizPage();

    this.root.append(this.quizPage.container);
  }

  renderCategories = (categories: string[], currentCategoryNum: number) => {
    this.quizPage.components.quizCategories.render(categories, currentCategoryNum);
  };

  renderQuestion = (handler: () => IBirdData, hasCorrectAnswer: boolean) => {
    this.quizPage.components.quizQuestion.render(handler(), hasCorrectAnswer);
  };

  renderAnswers = (handler: () => string[]) => {
    this.quizPage.components.quizAnswers.render(handler());
  };

  renderBirdCard = (handler: () => IBirdData, isFirstAnswer: boolean) => {
    this.quizPage.components.birdCard.render(handler(), isFirstAnswer);
  };
}

export default AppView;
