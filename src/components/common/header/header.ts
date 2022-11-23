import './header.scss';

import MainNav from '../mainNav/mainNav';
import QuizScore from '../../pages/quizPage/components/quizScore/quizScore';

import createElement from '../../../utils/createElement';

class Header {
  container;

  mainNav;

  score;

  constructor() {
    this.container = createElement({
      tagName: 'header',
      attributes: { class: 'header' },
      children: [
        createElement({
          tagName: 'a',
          attributes: { class: 'header__logo', href: '#/' },
          children: [
            createElement({ tagName: 'span', children: ['Song'] }),
            createElement({
              tagName: 'span',
              attributes: { class: 'header__logo-end' },
              children: ['Bird'],
            }),
          ],
        }),
      ],
    });
    this.mainNav = new MainNav();
    this.score = new QuizScore();

    this.container.append(this.mainNav.container, this.score.container);
  }
}

export default Header;
