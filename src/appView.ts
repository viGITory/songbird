import { IBirdsData, IBirdData } from './types';

import HomePage from './components/pages/homePage/homePage';
import QuizPage from './components/pages/quizPage/quizPage';
import GalleryPage from './components/pages/galleryPage/galleryPage';

import router from './utils/router';

class AppView {
  root;

  routes: { [key: string]: HTMLElement };

  homePage;

  quizPage;

  galleryPage;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;

    this.homePage = new HomePage();
    this.quizPage = new QuizPage();
    this.galleryPage = new GalleryPage();

    this.routes = {
      '/': this.homePage.container,
      '/quiz': this.quizPage.container,
      '/gallery': this.galleryPage.container,
    };

    this.addListeners();
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

  renderGallery = (handler: () => IBirdsData[]) => {
    this.galleryPage.render(handler());
  };

  addListeners = () => {
    window.addEventListener('load', () => {
      router(this.routes);
    });
    window.addEventListener('hashchange', () => {
      router(this.routes);
    });
  };
}

export default AppView;
