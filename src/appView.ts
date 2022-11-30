import { IBirdsData, IBirdData } from './types';

import Preloader from './components/common/preloader/preloader';
import HomePage from './components/pages/homePage/homePage';
import QuizPage from './components/pages/quizPage/quizPage';
import ResultsPage from './components/pages/resultsPage/resultsPage';
import GalleryPage from './components/pages/galleryPage/galleryPage';

import router from './utils/router';

class AppView {
  root;

  routes: { [key: string]: HTMLElement };

  preloader;

  homePage;

  quizPage;

  resultsPage;

  galleryPage;

  constructor() {
    this.root = document.getElementById('root') as HTMLElement;

    this.preloader = new Preloader();
    this.homePage = new HomePage();
    this.quizPage = new QuizPage();
    this.resultsPage = new ResultsPage();
    this.galleryPage = new GalleryPage();

    this.routes = {
      '/': this.homePage.container,
      '/quiz': this.quizPage.container,
      '/results': this.resultsPage.container,
      '/gallery': this.galleryPage.container,
    };

    this.root.append(this.preloader.container);
    this.addListeners();
  }

  changePage = () => {
    this.galleryPage.components.slider.stopAllAudio();
    router(this.routes);
  };

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

  markCurrentRoute = () => {
    this.quizPage.components.header.mainNav.markCurrentRoute();
    this.galleryPage.components.header.mainNav.markCurrentRoute();
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
