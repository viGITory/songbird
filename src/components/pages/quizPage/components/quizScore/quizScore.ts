import createElement from '../../../../../utils/createElement';

class QuizScore {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'p',
      attributes: { class: 'quiz-score' },
      children: ['Счет: 0'],
    });
  }

  get() {
    return this.container;
  }
}

export default QuizScore;
