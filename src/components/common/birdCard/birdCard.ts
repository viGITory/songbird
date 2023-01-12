import './birdCard.scss';

import { IBirdData } from '../../../types';

import AudioPlayer from '../audioPlayer/audioPlayer';

import createElement from '../../../utils/createElement';
import clearContainer from '../../../utils/clearContainer';

class BirdCard {
  container;

  audioPlayer;

  background;

  constructor() {
    this.container = createElement({ tagName: 'article', attributes: { class: 'bird-card' } });
    this.background = createElement({ tagName: 'div', attributes: { class: 'bird-card__bg' } });

    this.audioPlayer = new AudioPlayer();
  }

  renderBackground = (imageSources: string[]) => {
    clearContainer(this.background);

    imageSources.forEach((item) => {
      const img = createElement({
        tagName: 'img',
        attributes: { class: 'bird-card__bg-image', src: item },
      });

      this.background.append(img);
    });
  };

  render = (birdData: IBirdData, isFirstAnswer: boolean) => {
    clearContainer(this.container);
    this.audioPlayer.audio.pause();

    if (isFirstAnswer) {
      const cardInstruction = createElement({
        tagName: 'h3',
        attributes: { class: 'bird-card__instruction' },
        children: [
          createElement({ tagName: 'span', children: ['Послушайте плеер.'] }),
          createElement({ tagName: 'span', children: ['Выберите птицу из списка'] }),
        ],
      });

      this.container.append(this.background, cardInstruction);
    } else {
      const cardTitle = createElement({
        tagName: 'h3',
        attributes: { class: 'bird-card__title' },
        children: [birdData.name],
      });
      const cardSubtitle = createElement({
        tagName: 'p',
        attributes: { class: 'bird-card__subtitle' },
        children: [birdData.species],
      });
      const cardImage = createElement({
        tagName: 'img',
        attributes: { class: 'bird-card__image', src: birdData.image, alt: birdData.name },
      });
      const cardDescription = createElement({
        tagName: 'p',
        attributes: { class: 'bird-card__description' },
        children: [birdData.description],
      });

      this.container.append(
        cardTitle,
        cardSubtitle,
        this.audioPlayer.render(birdData.audio),
        cardImage,
        cardDescription
      );
    }
  };
}

export default BirdCard;
