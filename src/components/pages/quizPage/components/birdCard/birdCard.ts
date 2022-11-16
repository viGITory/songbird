import AudioPlayer from '../audioPlayer/audioPlayer';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class BirdCard {
  container;

  audioPlayer;

  constructor() {
    this.container = createElement({ tagName: 'article', attributes: { class: 'bird-card' } });
    this.audioPlayer = new AudioPlayer();

    this.render();
  }

  render = () => {
    clearContainer(this.container);

    const cardInstruction = createElement({
      tagName: 'p',
      attributes: { class: 'bird-card__instruction' },
      children: ['Послушайте плеер. Выберите птицу из списка'],
    });

    const cardIamge = createElement({
      tagName: 'img',
      attributes: { class: 'bird-card__image', src: '', alt: 'Птица' },
    });
    const cardTitle = createElement({
      tagName: 'h3',
      attributes: { class: 'bird-card__title' },
      children: ['Название птицы'],
    });
    const cardSubtitle = createElement({
      tagName: 'p',
      attributes: { class: 'bird-card__subtitle' },
      children: ['Латинское название птицы'],
    });
    const cardDescription = createElement({
      tagName: 'p',
      attributes: { class: 'bird-card__description' },
      children: ['Описание'],
    });

    this.container.append(
      cardInstruction,
      cardIamge,
      cardTitle,
      cardSubtitle,
      this.audioPlayer.container,
      cardDescription
    );
  };

  get() {
    return this.container;
  }
}

export default BirdCard;
