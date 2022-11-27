interface IHTMLElementProps {
  tagName: string;
  attributes?: { [key: string]: string };
  children?: (HTMLElement | string)[];
}

interface IBirdData {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

interface IBirdsData {
  category: string;
  birds: IBirdData[];
}

export { IHTMLElementProps, IBirdsData, IBirdData };
