import { IBirdsData, IBirdData } from './types';

import Preloader from './components/common/preloader/preloader';
import HomePage from './components/pages/homePage/homePage';
import QuizPage from './components/pages/quizPage/quizPage';
import ResultsPage from './components/pages/resultsPage/resultsPage';
import GalleryPage from './components/pages/galleryPage/galleryPage';
import NotFoundPage from './components/pages/404/404';

import router from './utils/router';

class AppView {
  root;

  routes: { [key: string]: HTMLElement };

  preloader;

  homePage;

  quizPage;

  resultsPage;

  galleryPage;

  notFoundPage;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;

    this.preloader = new Preloader();
    this.homePage = new HomePage();
    this.quizPage = new QuizPage();
    this.resultsPage = new ResultsPage();
    this.galleryPage = new GalleryPage();
    this.notFoundPage = new NotFoundPage();

    this.routes = {
      '/': this.homePage.container,
      '/quiz': this.quizPage.container,
      '/results': this.resultsPage.container,
      '/gallery': this.galleryPage.container,
      '/404': this.notFoundPage.container,
    };

    this.root.append(this.preloader.container);
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

  renderBirdCardBackground = (handler: () => IBirdData[]) => {
    this.quizPage.components.birdCard.renderBackground(handler());
  };

  renderGallery = (handler: () => IBirdsData[]) => {
    this.galleryPage.render(handler());
  };

  markCurrentRoute = () => {
    this.quizPage.components.header.mainNav.markCurrentRoute();
    this.galleryPage.components.header.mainNav.markCurrentRoute();
  };

  stopAllAudio = () => {
    this.quizPage.stopAudio();
    this.galleryPage.stopAudio();
  };

  changePage = () => {
    this.stopAllAudio();
    router(this.routes);
  };

  addListeners = () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        router(this.routes);
      }, 2000);
    });
    window.addEventListener('hashchange', () => {
      this.markCurrentRoute();
      this.changePage();
    });
  };
}

export default AppView;
