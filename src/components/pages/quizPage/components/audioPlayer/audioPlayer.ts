import './audioPlayer.scss';

import createElement from '../../../../../utils/createElement';

class AudioPlayer {
  audio;

  playButton;

  progressBar;

  currentTime;

  audioDuration;

  constructor() {
    this.playButton = createElement({
      tagName: 'button',
      attributes: { class: 'audio-player__button' },
      children: ['►'],
    });
    this.progressBar = createElement({
      tagName: 'input',
      attributes: {
        class: 'audio-player__progress',
        type: 'range',
        value: '0',
        min: '0',
        max: '100',
      },
    });
    this.currentTime = createElement({
      tagName: 'span',
      children: ['00:00'],
    });
    this.audioDuration = createElement({
      tagName: 'span',
      children: ['00:00'],
    });

    this.audio = new Audio();
    this.addListeners();
  }

  stopAudio = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playButton.textContent = '►';
  };

  showAudioProgress = () => {
    const minutes = Math.floor(this.audio.currentTime / 60);
    const seconds = Math.floor(this.audio.currentTime % 60);
    const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

    this.currentTime.textContent = `${currentMinutes}:${currentSeconds}`;

    if (this.progressBar instanceof HTMLInputElement) {
      this.progressBar.value = `${
        Math.floor(this.audio.currentTime) / (Math.floor(this.audio.duration) / 100) || 0
      }`;
      this.progressBar.style.background = `
        linear-gradient(to right, #00bc8c 0%, #00bc8c ${this.progressBar.value}%, #e5e5e5 ${this.progressBar.value}%, #e5e5e5 100%)
      `;
    }
  };

  changeAudioTime = () => {
    if (this.progressBar instanceof HTMLInputElement)
      this.audio.currentTime = this.audio.duration * (+this.progressBar.value / 100);
  };

  addListeners = () => {
    this.playButton.addEventListener('click', () => {
      if (this.audio.paused) {
        this.audio.play();
        this.playButton.textContent = '❚❚';
      } else {
        this.audio.pause();
        this.playButton.textContent = '►';
      }
    });

    this.audio.addEventListener('loadedmetadata', () => {
      const minutes = Math.floor(this.audio.duration / 60);
      const seconds = Math.floor(this.audio.duration % 60);
      const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

      this.audioDuration.textContent = `${currentMinutes}:${currentSeconds}`;
    });

    this.audio.addEventListener('ended', () => {
      this.audio.currentTime = 0;
      this.playButton.textContent = '►';
    });

    this.audio.addEventListener('timeupdate', this.showAudioProgress);

    this.progressBar.addEventListener('pointerdown', () => {
      this.audio.removeEventListener('timeupdate', this.showAudioProgress);

      this.progressBar.addEventListener('input', () => {
        if (this.progressBar instanceof HTMLInputElement) {
          this.progressBar.style.background = `
            linear-gradient(to right, #00bc8c 0%, #00bc8c ${this.progressBar.value}%, #e5e5e5 ${this.progressBar.value}%, #e5e5e5 100%)
          `;
        }
      });

      this.progressBar.addEventListener('pointerup', () => {
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
    this.playButton.textContent = '►';

    container.append(
      this.playButton,
      this.progressBar,
      createElement({ tagName: 'div', children: [this.currentTime, ' / ', this.audioDuration] })
    );
    return container;
  };
}

export default AudioPlayer;
