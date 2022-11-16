const clearContainer = (container: HTMLElement) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

export default clearContainer;
