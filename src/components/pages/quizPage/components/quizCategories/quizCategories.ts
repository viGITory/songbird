import './quizCategories.scss';

import createElement from '../../../../../utils/createElement';

class QuizCategories {
  container;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-categories' } });
  }

  render = (categories: string[]) => {
    categories.forEach((item, index) => {
      const category = createElement({
        tagName: 'li',
        attributes: { class: 'quiz-categories__item' },
        children: [item],
      });

      if (!index) {
        category.classList.add('quiz-categories__item--active');
      }

      this.container.append(category);
    });
  };

  highlightCurrentCategory = (categoryNum: number) => {
    [...this.container.children].forEach((child, index) =>
      index === categoryNum
        ? child.classList.add('quiz-categories__item--active')
        : child.classList.remove('quiz-categories__item--active')
    );
  };

  get() {
    return this.container;
  }
}

export default QuizCategories;
