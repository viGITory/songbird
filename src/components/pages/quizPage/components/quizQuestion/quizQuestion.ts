import AudioPlayer from '../audioPlayer/audioPlayer';

import createElement from '../../../../../utils/createElement';

class QuizQuestion {
  container;

  audioPlayer;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'quiz-question' } });
    this.audioPlayer = new AudioPlayer();

    this.render();
  }

  render = () => {
    const birdImage = createElement({
      tagName: 'img',
      attributes: { class: 'quiz-question__image', src: '', alt: 'Птица' },
    });
    const birdName = createElement({
      tagName: 'h3',
      attributes: { class: 'quiz-question__title' },
      children: ['Название птицы'],
    });

    this.container.append(birdImage, birdName, this.audioPlayer.container);
  };

  get() {
    return this.container;
  }
}

export default QuizQuestion;
