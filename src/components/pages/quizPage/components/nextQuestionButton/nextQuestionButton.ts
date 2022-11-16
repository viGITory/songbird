import createElement from '../../../../../utils/createElement';

class NextQuestionButton {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'button',
      attributes: { class: 'next-question-button', type: 'button' },
      children: ['Следующий вопрос'],
    });
  }

  get() {
    return this.container;
  }
}

export default NextQuestionButton;
