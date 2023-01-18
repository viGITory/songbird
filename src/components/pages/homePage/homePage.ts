import './homePage.scss';

import createElement from '../../../utils/createElement';

class HomePage {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'home-page' },
    });

    this.render();
  }

  render = () => {
    this.container.append(
      createElement({
        tagName: 'h1',
        attributes: { class: 'home-page__title' },
        children: [
          createElement({
            tagName: 'span',
            attributes: { class: 'home-page__title-left' },
            children: ['Song'],
          }),
          createElement({
            tagName: 'span',
            attributes: { class: 'home-page__title-right' },
            children: [
              ...[...'Bird'].map((char) =>
                createElement({
                  tagName: 'span',
                  children: [char],
                })
              ),
            ],
          }),
        ],
      }),
      createElement({
        tagName: 'nav',
        attributes: { class: 'home-page__nav' },
        children: [
          createElement({
            tagName: 'a',
            attributes: { class: 'home-page__button', href: '#/quiz' },
            children: ['К игре'],
          }),
          createElement({ tagName: 'span', attributes: { class: 'nav-separator' } }),
          createElement({
            tagName: 'a',
            attributes: { class: 'home-page__button', href: '#/gallery' },
            children: ['Галерея'],
          }),
        ],
      })
    );
  };
}

export default HomePage;
