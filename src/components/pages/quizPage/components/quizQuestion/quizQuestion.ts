import { IBirdData } from '../../../../../types';

import AudioPlayer from '../audioPlayer/audioPlayer';

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

    const birdImage = createElement({
      tagName: 'img',
      attributes: {
        class: 'quiz-question__image',
        src: hasCorrectAnswer
          ? birdData.image
          : 'https://srisovki.one/wp-content/uploads/2021/06/0a46e0ba2d2eb0c9a6fb9b4ccf3b0cda-bird-doodle-awesome-drawings.jpg',
        alt: hasCorrectAnswer ? birdData.name : '',
      },
    });
    const birdName = createElement({
      tagName: 'h3',
      attributes: { class: 'quiz-question__title' },
      children: [hasCorrectAnswer ? birdData.name : '******'],
    });

    this.container.append(birdImage, birdName, this.audioPlayer.container);
  };

  get() {
    return this.container;
  }
}

export default QuizQuestion;
