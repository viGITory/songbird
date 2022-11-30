import './quizCategories.scss';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class QuizCategories {
  container;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-categories' } });
  }

  render = (categories: string[], currentCategoryNum: number) => {
    clearContainer(this.container);

    categories.forEach((item, index) => {
      const category = createElement({
        tagName: 'li',
        attributes: { class: 'quiz-categories__item' },
        children: [item],
      });

      if (index === currentCategoryNum) {
        category.classList.add('quiz-categories__item--active');
      }

      this.container.append(category);
    });
  };
}

export default QuizCategories;
