import './resultsPage.scss';

import clearContainer from '../../../utils/clearContainer';
import createElement from '../../../utils/createElement';

class ResultsPage {
  container;

  components;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'results-page' },
    });

    this.components = {
      quizButton: createElement({
        tagName: 'a',
        attributes: { class: 'results-page__button', href: '#/quiz' },
        children: ['Играть снова!'],
      }),
      homeButton: createElement({
        tagName: 'a',
        attributes: { class: 'results-page__button', href: '#/' },
        children: ['На главную'],
      }),
      galleryButton: createElement({
        tagName: 'a',
        attributes: { class: 'results-page__button', href: '#/gallery' },
        children: ['Галерея'],
      }),
    };

    this.render(0, 1);
  }

  render = (quizScore: number, maxQuizScore: number) => {
    clearContainer(this.container);

    const dynamicButton =
      quizScore < maxQuizScore ? this.components.quizButton : this.components.homeButton;
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
        tagName: 'nav',
        attributes: { class: 'results-page__nav' },
        children: [
          dynamicButton,
          createElement({ tagName: 'span', attributes: { class: 'nav-separator' } }),
          this.components.galleryButton,
        ],
      })
    );
  };

  bindEventHandler = (handler: () => void) => {
    this.components.quizButton.addEventListener('click', handler);
    this.components.homeButton.addEventListener('click', handler);
    this.components.galleryButton.addEventListener('click', handler);
  };
}

export default ResultsPage;
