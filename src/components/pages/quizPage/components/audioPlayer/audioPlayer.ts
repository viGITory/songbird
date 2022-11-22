import './audioPlayer.scss';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class AudioPlayer {
  container;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'audio-player' },
    });

    this.render();
  }

  render = () => {
    clearContainer(this.container);

    const playButton = createElement({
      tagName: 'button',
      attributes: { class: 'audio-player__button' },
      children: ['►'],
    });
    const progressBar = createElement({
      tagName: 'input',
      attributes: {
        class: 'audio-player__progress',
        type: 'range',
        value: '0',
        min: '0',
        max: '100',
      },
    });
    const currentTime = createElement({
      tagName: 'span',
      children: ['00:00/'],
    });
    const audioDuration = createElement({
      tagName: 'span',
      children: ['00:00'],
    });

    this.container.append(playButton, progressBar, currentTime, audioDuration);
  };

  get() {
    return this.container;
  }
}

export default AudioPlayer;
