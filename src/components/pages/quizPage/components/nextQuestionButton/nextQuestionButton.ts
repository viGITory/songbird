import './nextQuestionButton.scss';

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

  removeEventHandler = (handler: () => void) => {
    this.container.removeEventListener('click', handler);
  };
}

export default NextQuestionButton;
