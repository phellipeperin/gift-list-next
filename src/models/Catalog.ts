import Section from './Section';

interface Catalog {
  // id: string;
  name: string;
  description: string;
  userId: string;
  sections: Array<Section>;
}

export default Catalog;
