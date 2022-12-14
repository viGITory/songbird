import './quizAnswers.scss';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class QuizAnswers {
  container;

  audioAnswer;

  constructor() {
    this.container = createElement({ tagName: 'ul', attributes: { class: 'quiz-answers' } });
    this.audioAnswer = new Audio();
  }

  playAudioAnswer = (isRight: boolean) => {
    this.audioAnswer.src = isRight
      ? './assets/audio/win-sound.mp3'
      : './assets/audio/fail-sound.mp3';

    this.audioAnswer.currentTime = 0;
    this.audioAnswer.play();
  };

  render = (answers: string[]) => {
    clearContainer(this.container);

    answers.forEach((item) => {
      const answer = createElement({
        tagName: 'li',
        attributes: { class: 'quiz-answers__item' },
        children: [
          createElement({ tagName: 'span', attributes: { class: 'quiz-answers__indicator' } }),
          item,
        ],
      });

      this.container.append(answer);
    });
  };

  bindEventHandler = (handler: (index: number) => void) => {
    [...this.container.children].forEach((child, index) => {
      child.addEventListener('click', () => {
        handler(index);
      });
    });
  };

  markSuccessAnswer = (answerNum: number) => {
    [...this.container.children].forEach((child, index) => {
      if (index === answerNum) {
        child.classList.remove('quiz-answers__item--error');
        child.classList.add('quiz-answers__item--success');
      }
    });
  };

  markErrorAnswer = (answerNum: number) => {
    [...this.container.children].forEach((child, index) => {
      if (index === answerNum) {
        child.classList.add('quiz-answers__item--error');
      }
    });
  };
}

export default QuizAnswers;
