import './resultsPage.scss';

import clearContainer from '../../../utils/clearContainer';
import createElement from '../../../utils/createElement';

class ResultsPage {
  container;

  homeButton;

  galleryButton;

  quizButton;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'results-page' },
    });
    this.quizButton = createElement({
      tagName: 'a',
      attributes: { class: 'results-page__button', href: '#/quiz' },
      children: ['Играть снова!'],
    });
    this.homeButton = createElement({
      tagName: 'a',
      attributes: { class: 'results-page__button', href: '#/' },
      children: ['На главную'],
    });
    this.galleryButton = createElement({
      tagName: 'a',
      attributes: { class: 'results-page__button', href: '#/gallery' },
      children: ['Галерея'],
    });

    this.render(0, 1);
  }

  render = (quizScore: number, maxQuizScore: number) => {
    clearContainer(this.container);

    const dynamicButton = quizScore < maxQuizScore ? this.quizButton : this.homeButton;
    const text = `Вы набрали ${
      quizScore < maxQuizScore
        ? `${quizScore} из 30 возможных баллов`
        : 'максимальное количество баллов!'
    }`;

    if (quizScore === maxQuizScore) {
      const title = createElement({
        tagName: 'p',
        attributes: { class: 'results-page__title' },
        children: ['Поздравляем!'],
      });

      this.container.append(title);
    }

    this.container.append(
      createElement({
        tagName: 'p',
        attributes: { class: 'results-page__text' },
        children: [text],
      }),
      createElement({
        tagName: 'div',
        attributes: { class: 'results-page__nav' },
        children: [dynamicButton, this.galleryButton],
      })
    );
  };

  bindEventHandler = (handler: () => void) => {
    this.quizButton.addEventListener('click', handler);
    this.homeButton.addEventListener('click', handler);
    this.galleryButton.addEventListener('click', handler);
  };
}

export default ResultsPage;
