import './quizScore.scss';

import createElement from '../../../../../utils/createElement';

class QuizScore {
  container;

  score;

  constructor() {
    this.container = createElement({
      tagName: 'p',
      attributes: { class: 'quiz-score' },
      children: ['Счет:'],
    });
    this.score = createElement({
      tagName: 'span',
      attributes: { class: 'quiz-score__count' },
      children: ['0'],
    });

    this.container.append(this.score);
  }

  updateScore = (score: number) => {
    this.score.textContent = `${score}`;
  };

  get() {
    return this.container;
  }
}

export default QuizScore;
