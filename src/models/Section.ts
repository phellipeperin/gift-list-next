import Gift from './Gift';

interface Section {
  name: string;
  description: string;
  order: number;
  gifts: Array<Gift>;
}

export default Section;
