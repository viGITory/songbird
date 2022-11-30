import './gallerySlider.scss';

import { IBirdData } from '../../../../../types';

import BirdCard from '../../../quizPage/components/birdCard/birdCard';

import createElement from '../../../../../utils/createElement';
import clearContainer from '../../../../../utils/clearContainer';

class GallerySlider {
  container;

  slidesWrapper;

  slides;

  prevButton;

  nextButton;

  translatePersent;

  currentSlide;

  slidesCount;

  slideNum;

  birdCards: BirdCard[];

  constructor() {
    this.translatePersent = 0;
    this.currentSlide = 1;
    this.slidesCount = 0;
    this.birdCards = [];

    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-slider' },
    });
    this.slidesWrapper = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-slider__slides-wrapper' },
    });
    this.slideNum = createElement({
      tagName: 'p',
      attributes: { class: 'gallery-slider__slide-num' },
      children: [`${this.currentSlide}`],
    });
    this.slides = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-slider__slides' },
    });
    this.prevButton = createElement({
      tagName: 'button',
      attributes: { class: 'gallery-slider__button' },
    });
    this.nextButton = createElement({
      tagName: 'button',
      attributes: { class: 'gallery-slider__button' },
    });

    this.render();
    this.addListeners();
  }

  renderSlides = (birdsData: IBirdData[]) => {
    clearContainer(this.slides);

    birdsData.forEach((bird) => {
      const slide = new BirdCard();
      slide.render(bird, false);
      this.birdCards.push(slide);

      this.slides.append(slide.container);
    });

    this.slidesCount = this.slides.children.length;
  };

  stopAllAudio = () => {
    this.birdCards.forEach((card) => {
      card.audioPlayer.stopAudio();
    });
  };

  render = () => {
    this.prevButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z"/></svg>
    `;
    this.nextButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(-180)" viewBox="0 0 129 129"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z"/></svg>
    `;

    this.slidesWrapper.append(this.slideNum, this.slides);
    this.container.append(this.prevButton, this.slidesWrapper, this.nextButton);
  };

  addListeners = () => {
    this.prevButton.addEventListener('click', () => {
      this.currentSlide -= 1;

      if (this.currentSlide > 1) this.translatePersent += 100;
      if (this.currentSlide === 1) this.translatePersent = 0;

      if (this.currentSlide < 1) {
        this.currentSlide = this.slidesCount;
        this.translatePersent = -(this.slidesCount - 1) * 100;
      }

      this.slideNum.textContent = `${this.currentSlide}`;
      this.slides.style.transform = `translateX(${this.translatePersent}%)`;

      this.stopAllAudio();
    });

    this.nextButton.addEventListener('click', () => {
      if (this.currentSlide <= this.slidesCount) {
        this.currentSlide += 1;
        this.translatePersent -= 100;
      }

      if (this.currentSlide > this.slidesCount) {
        this.currentSlide = 1;
        this.translatePersent = 0;
      }

      this.slideNum.textContent = `${this.currentSlide}`;
      this.slides.style.transform = `translateX(${this.translatePersent}%)`;

      this.stopAllAudio();
    });
  };
}

export default GallerySlider;
