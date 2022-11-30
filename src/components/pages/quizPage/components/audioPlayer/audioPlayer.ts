import './audioPlayer.scss';

import createElement from '../../../../../utils/createElement';

class AudioPlayer {
  audio;

  components;

  constructor() {
    this.components = {
      playButton: createElement({
        tagName: 'button',
        attributes: { class: 'audio-player__button' },
        children: ['►'],
      }),
      progressBar: createElement({
        tagName: 'input',
        attributes: {
          class: 'audio-player__progress',
          type: 'range',
          value: '0',
          min: '0',
          max: '100',
        },
      }),
      currentTime: createElement({
        tagName: 'span',
        children: ['00:00'],
      }),
      audioDuration: createElement({
        tagName: 'span',
        children: ['00:00'],
      }),
    };

    this.audio = new Audio();
    this.addListeners();
  }

  stopAudio = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.components.playButton.textContent = '►';
  };

  showAudioProgress = () => {
    const minutes = Math.floor(this.audio.currentTime / 60);
    const seconds = Math.floor(this.audio.currentTime % 60);
    const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

    this.components.currentTime.textContent = `${currentMinutes}:${currentSeconds}`;

    if (this.components.progressBar instanceof HTMLInputElement) {
      this.components.progressBar.value = `${
        Math.floor(this.audio.currentTime) / (Math.floor(this.audio.duration) / 100) || 0
      }`;
      this.components.progressBar.style.background = `
        linear-gradient(to right, #00bc8c 0%, #00bc8c ${this.components.progressBar.value}%, #e5e5e5 ${this.components.progressBar.value}%, #e5e5e5 100%)
      `;
    }
  };

  changeAudioTime = () => {
    if (this.components.progressBar instanceof HTMLInputElement)
      this.audio.currentTime = this.audio.duration * (+this.components.progressBar.value / 100);
  };

  addListeners = () => {
    this.components.playButton.addEventListener('click', () => {
      if (this.audio.paused) {
        this.audio.play();
        this.components.playButton.textContent = '❚❚';
      } else {
        this.audio.pause();
        this.components.playButton.textContent = '►';
      }
    });

    this.audio.addEventListener('loadedmetadata', () => {
      const minutes = Math.floor(this.audio.duration / 60);
      const seconds = Math.floor(this.audio.duration % 60);
      const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

      this.components.audioDuration.textContent = `${currentMinutes}:${currentSeconds}`;
    });

    this.audio.addEventListener('ended', () => {
      this.audio.currentTime = 0;
      this.components.playButton.textContent = '►';
    });

    this.audio.addEventListener('timeupdate', this.showAudioProgress);

    this.components.progressBar.addEventListener('pointerdown', () => {
      this.audio.removeEventListener('timeupdate', this.showAudioProgress);

      this.components.progressBar.addEventListener('input', () => {
        if (this.components.progressBar instanceof HTMLInputElement) {
          this.components.progressBar.style.background = `
            linear-gradient(to right, #00bc8c 0%, #00bc8c ${this.components.progressBar.value}%, #e5e5e5 ${this.components.progressBar.value}%, #e5e5e5 100%)
          `;
        }
      });

      this.components.progressBar.addEventListener('pointerup', () => {
        this.changeAudioTime();
        this.audio.addEventListener('timeupdate', this.showAudioProgress);
      });
    });
  };

  render = (audioSrc: string) => {
    const container = createElement({
      tagName: 'div',
      attributes: { class: 'audio-player' },
    });

    this.audio.src = audioSrc;
    this.components.playButton.textContent = '►';

    container.append(
      this.components.playButton,
      this.components.progressBar,
      createElement({
        tagName: 'div',
        children: [this.components.currentTime, ' / ', this.components.audioDuration],
      })
    );
    return container;
  };
}

export default AudioPlayer;
