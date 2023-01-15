import './quizCategories.scss';

import createElement from '../../../../../utils/createElement';

class QuizCategories {
  container;

  categories: HTMLElement[];

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-categories' } });
    this.categories = [];
  }

  render = (categories: string[], currentCategoryNum: number) => {
    categories.forEach((item, index) => {
      if (this.container.children.length < categories.length) {
        const category = createElement({
          tagName: 'li',
          attributes: { class: 'quiz-categories__item' },
          children: [item],
        });

        this.categories.push(category);
        this.container.append(category);
      }

      return index === currentCategoryNum
        ? this.categories[index]?.classList.add('quiz-categories__item--active')
        : this.categories[index]?.classList.remove('quiz-categories__item--active');
    });
  };
}

export default QuizCategories;
