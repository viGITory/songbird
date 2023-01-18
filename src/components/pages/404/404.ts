import './404.scss';

import createElement from '../../../utils/createElement';

class NotFoundPage {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'not-found-page' },
    });

    this.render();
  }

  render = () => {
    this.container.append(
      createElement({
        tagName: 'h1',
        attributes: { class: 'not-found-page__title' },
        children: [
          createElement({
            tagName: 'span',
            attributes: { class: 'not-found-page__title-wrapper' },
            children: [
              ...[...'404'].map((char) =>
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
        tagName: 'a',
        attributes: { class: 'not-found-page__button', href: '#/' },
        children: ['На главную'],
      })
    );
  };
}

export default NotFoundPage;
