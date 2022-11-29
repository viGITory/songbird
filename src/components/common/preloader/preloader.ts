import './preloader.scss';

import createElement from '../../../utils/createElement';

class Preloader {
  container;

  constructor() {
    this.container = createElement({ tagName: 'div', attributes: { class: 'preloader' } });
    this.render();
  }

  render = () => {
    this.container.innerHTML = `
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  };
}

export default Preloader;
