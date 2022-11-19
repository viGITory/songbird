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

  updateScore = (score: number) => {
    this.container.textContent = `Счет: ${score}`;
  };

  get() {
    return this.container;
  }
}

export default QuizScore;
