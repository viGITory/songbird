import './gallerySlider.scss';

import { IBirdData } from '../../../../../types';

import BirdCard from '../../../../common/birdCard/birdCard';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class GallerySlider {
  container;

  components;

  translatePersent;

  currentSlide;

  slidesCount;

  birdCards: BirdCard[];

  constructor() {
    this.translatePersent = 0;
    this.currentSlide = 0;
    this.slidesCount = 6;
    this.birdCards = [];

    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-slider' },
    });

    this.components = {
      slidesWrapper: createElement({
        tagName: 'div',
        attributes: { class: 'gallery-slider__slides-wrapper' },
      }),
      slides: createElement({
        tagName: 'div',
        attributes: { class: 'gallery-slider__slides' },
      }),
      slidesPreview: createElement({
        tagName: 'div',
        attributes: { class: 'gallery-slider__slides-preview' },
      }),
      prevButton: createElement({
        tagName: 'button',
        attributes: { class: 'gallery-slider__button' },
      }),
      nextButton: createElement({
        tagName: 'button',
        attributes: { class: 'gallery-slider__button' },
      }),
    };

    this.render();
    this.addListeners();
  }

  renderSlides = (birdsData: IBirdData[]) => {
    clearContainer(this.components.slides);
    clearContainer(this.components.slidesPreview);

    birdsData.forEach((bird, index) => {
      const slide = new BirdCard();
      const previewImage = createElement({
        tagName: 'img',
        attributes: {
          class: 'gallery-slider__preview-image',
          src: bird.image,
          alt: bird.name,
        },
      });

      if (index === this.currentSlide) {
        previewImage.classList.add('gallery-slider__preview-image--active');
      }

      slide.render(bird, false);
      this.birdCards.push(slide);

      this.components.slidesPreview.append(previewImage);
      this.components.slides.append(slide.container);

      previewImage.addEventListener('click', () => {
        this.currentSlide = index;
        this.changeSlide();
      });
    });
  };

  stopAudio = () => {
    this.birdCards.forEach((card) => {
      card.audioPlayer.stopAudio();
    });
  };

  resetSlider = () => {
    this.currentSlide = 0;

    this.stopAudio();
    this.changeSlide();
  };

  render = () => {
    this.components.prevButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 129 129"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z"/></svg>
    `;
    this.components.nextButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1280 1280"><path d="M361.5 65.5c-2.7.8-5.3 1.4-5.6 1.5-.4 0-3.4 1.8-6.8 4.1-16.3 10.9-22.5 32.7-14.5 51 2.6 6.1 14.2 17.9 258.3 262.1L848.5 640 592.9 895.8c-244.1 244.2-255.7 256-258.3 262.1-9.5 21.8 1.2 47.4 23.4 55.7 6.9 2.6 21.9 2.4 29.1-.4 3-1.2 6.9-3.2 8.6-4.4 1.6-1.3 125.2-124.3 274.6-273.3 263.6-262.9 271.8-271.2 274.9-278 3.1-6.5 3.3-7.7 3.3-17.5 0-11.2-1.4-15.9-7.1-24.1-1.3-1.9-124.6-125.3-273.9-274.2C411 85.8 395.7 70.8 389.5 67.9c-8-3.8-19.9-4.8-28-2.4z"/></svg>
    `;

    this.components.slidesWrapper.append(this.components.slides);
    this.container.append(
      this.components.prevButton,
      createElement({
        tagName: 'div',
        attributes: { class: 'gallery-slider__center' },
        children: [this.components.slidesPreview, this.components.slidesWrapper],
      }),
      this.components.nextButton
    );
  };

  changeSlide = () => {
    if (this.currentSlide === this.slidesCount) {
      this.currentSlide = 0;
    }

    if (this.currentSlide < 0) {
      this.currentSlide = this.slidesCount - 1;
    }

    this.translatePersent = -this.currentSlide * 100;

    [...this.components.slidesPreview.children].forEach((image, index) =>
      this.currentSlide === index
        ? image.classList.add('gallery-slider__preview-image--active')
        : image.classList.remove('gallery-slider__preview-image--active')
    );

    this.components.slides.style.transform = `translateX(${this.translatePersent}%)`;

    this.stopAudio();
  };

  addListeners = () => {
    this.components.prevButton.addEventListener('click', () => {
      this.currentSlide -= 1;
      this.changeSlide();
    });

    this.components.nextButton.addEventListener('click', () => {
      this.currentSlide += 1;
      this.changeSlide();
    });
  };
}

export default GallerySlider;
