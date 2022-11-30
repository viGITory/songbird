import './birdCard.scss';

import { IBirdData } from '../../../../../types';

import AudioPlayer from '../audioPlayer/audioPlayer';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class BirdCard {
  container;

  audioPlayer;

  constructor() {
    this.container = createElement({ tagName: 'article', attributes: { class: 'bird-card' } });
    this.audioPlayer = new AudioPlayer();
  }

  render = (birdData: IBirdData, isFirstAnswer: boolean) => {
    clearContainer(this.container);
    this.audioPlayer.audio.pause();

    if (isFirstAnswer) {
      const cardInstruction = createElement({
        tagName: 'p',
        attributes: { class: 'bird-card__instruction' },
        children: [
          createElement({ tagName: 'p', children: ['Послушайте плеер.'] }),
          createElement({ tagName: 'p', children: ['Выберите птицу из списка'] }),
        ],
      });

      this.container.append(cardInstruction);
    } else {
      const cardImage = createElement({
        tagName: 'img',
        attributes: { class: 'bird-card__image', src: birdData.image, alt: birdData.name },
      });
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
      const cardDescription = createElement({
        tagName: 'p',
        attributes: { class: 'bird-card__description' },
        children: [birdData.description],
      });

      this.container.append(
        cardImage,
        cardTitle,
        cardSubtitle,
        this.audioPlayer.render(birdData.audio),
        cardDescription
      );
    }
  };
}

export default BirdCard;
