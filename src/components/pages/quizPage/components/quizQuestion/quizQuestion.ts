import './quizQuestion.scss';

import { IBirdData } from '../../../../../types';

import AudioPlayer from '../../../../common/audioPlayer/audioPlayer';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class QuizQuestion {
  container;

  audioPlayer;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-question' } });
    this.audioPlayer = new AudioPlayer();
  }

  render = (birdData: IBirdData, hasCorrectAnswer: boolean) => {
    clearContainer(this.container);

    const imageCover = createElement({
      tagName: 'div',
      attributes: {
        class: 'quiz-question__image-cover',
      },
    });
    const birdImage = createElement({
      tagName: 'img',
      attributes: {
        class: 'quiz-question__image',
        src: birdData.image,
        alt: birdData.name,
      },
    });
    const birdName = createElement({
      tagName: 'h3',
      attributes: { class: 'quiz-question__title' },
      children: [hasCorrectAnswer ? birdData.name : '\u2217'.repeat(6)],
    });

    this.container.append(
      !hasCorrectAnswer ? imageCover : birdImage,
      birdName,
      this.audioPlayer.render(birdData.audio)
    );
  };
}

export default QuizQuestion;
