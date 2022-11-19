import createElement from '../../../../../utils/createElement';

class NextQuestionButton {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'button',
      attributes: { class: 'next-question-button', type: 'button' },
      children: ['Следующий вопрос'],
    });

    this.turnOff();
  }

  turnOn = () => {
    this.container.removeAttribute('disabled');
  };

  turnOff = () => {
    this.container.setAttribute('disabled', '');
  };

  bindEventHandler = (handler: () => void) => {
    this.container.addEventListener('click', handler);
  };

  get() {
    return this.container;
  }
}

export default NextQuestionButton;
