import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class QuizAnswers {
  container;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-answers' } });

    this.render();
  }

  render = () => {
    clearContainer(this.container);

    for (let i = 1; i < 7; i += 1) {
      const answer = createElement({
        tagName: 'li',
        attributes: { class: 'quiz-answers__item' },
        children: [`Вариант ответа ${i}`],
      });

      this.container.append(answer);
    }
  };

  get() {
    return this.container;
  }
}

export default QuizAnswers;
