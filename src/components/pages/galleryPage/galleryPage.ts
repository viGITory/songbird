import './galleryPage.scss';

import { IBirdsData } from '../../../types';

import Header from '../../common/header/header';
import GallerySlider from './components/gallerySlider/gallerySlider';

import createElement from '../../../utils/createElement';
import getRandomInteger from '../../../utils/getRandomInteger';

class GalleryPage {
  container;

  components;

  constructor() {
    this.container = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-page' },
    });

    this.components = {
      header: new Header(),
      slider: new GallerySlider(),
    };
  }

  render = (birdsData: IBirdsData[]) => {
    const categories = createElement({
      tagName: 'div',
      attributes: { class: 'gallery-page__categories' },
    });

    birdsData.forEach((item, index) => {
      const randomBirdNum = getRandomInteger(0, item.birds.length - 1);

      const categoryButton = createElement({
        tagName: 'button',
        attributes: { class: 'gallery-page__category-button' },
        children: [
          createElement({
            tagName: 'p',
            attributes: { class: 'gallery-page__category-title' },
            children: [item.category],
          }),
          createElement({
            tagName: 'img',
            attributes: {
              class: 'gallery-page__category-image',
              src: item.birds[randomBirdNum]?.image || '',
              alt: item.birds[randomBirdNum]?.name || '',
            },
          }),
        ],
      });

      if (!index) {
        this.components.slider.renderSlides(item.birds);
        categoryButton.setAttribute('disabled', '');
      }

      categoryButton.addEventListener('click', () => {
        if (categoryButton.textContent === item.category) {
          [...categories.children].forEach((child) => child.removeAttribute('disabled'));
          categoryButton.setAttribute('disabled', '');

          this.components.slider.stopAllAudio();
          this.components.slider.renderSlides(item.birds);
        }
      });

      categories.append(categoryButton);
    });

    this.container.append(
      this.components.header.container,
      createElement({
        tagName: 'main',
        attributes: { class: 'gallery-page__main' },
        children: [
          categories,
          createElement({
            tagName: 'div',
            attributes: { class: 'gallery-page__center' },
            children: [this.components.slider.container],
          }),
        ],
      })
    );
  };
}

export default GalleryPage;
