import { IHTMLElementProps } from '../types';

const createElement = (props: IHTMLElementProps): HTMLElement => {
  const { tagName, attributes, children } = props;
  const element = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (children) {
    children.forEach((child) => element.append(child));
  }

  return element;
};

export default createElement;
