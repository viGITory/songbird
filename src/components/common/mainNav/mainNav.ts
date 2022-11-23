import './mainNav.scss';

import createElement from '../../../utils/createElement';

class MainNav {
  container;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'main-nav' } });

    this.render();
  }

  render = () => {
    const routes = {
      '#/': 'Главная',
      '#/quiz': 'Игра',
      '#/gallery': 'Галерея',
    };

    Object.entries(routes).forEach(([route, name]) => {
      const navItem = createElement({
        tagName: 'li',
        attributes: { class: 'main-nav__item' },
        children: [
          createElement({
            tagName: 'a',
            attributes: { class: 'main-nav__link', href: route },
            children: [name],
          }),
        ],
      });

      this.container.append(navItem);
    });

    return this.container;
  };
}

export default MainNav;
