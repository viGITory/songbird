import './mainNav.scss';

import createElement from '../../../utils/createElement';

class MainNav {
  container;

  navLinks: HTMLAnchorElement[];

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'main-nav' } });
    this.navLinks = [];

    this.render();
    this.markCurrentRoute();
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
      });
      const navLink = createElement({
        tagName: 'a',
        attributes: { class: 'main-nav__link', href: route },
        children: [name],
      });

      if (navLink instanceof HTMLAnchorElement) {
        this.navLinks.push(navLink);
      }

      navItem.append(navLink);
      this.container.append(navItem);
    });

    return this.container;
  };

  markCurrentRoute = () => {
    this.navLinks.forEach((link) => {
      return link.href.indexOf(window.location.hash) !== -1
        ? link.classList.add('main-nav__link--active')
        : link.classList.remove('main-nav__link--active');
    });
  };
}

export default MainNav;
