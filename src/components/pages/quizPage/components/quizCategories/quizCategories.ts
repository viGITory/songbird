import createElement from '../../../../../utils/createElement';

class QuizCategories {
  container;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-categories' } });

    this.render();
  }

  render = () => {
    for (let i = 1; i < 7; i += 1) {
      const answer = createElement({
        tagName: 'li',
        attributes: { class: 'quiz-categories__item' },
        children: [`Категория ${i}`],
      });

      this.container.append(answer);
    }
  };

  get() {
    return this.container;
  }
}

export default QuizCategories;
