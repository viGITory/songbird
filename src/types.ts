interface IHTMLElementProps {
  tagName: string;
  attributes?: { [key: string]: string };
  children?: (HTMLElement | string)[];
}

export { IHTMLElementProps };
