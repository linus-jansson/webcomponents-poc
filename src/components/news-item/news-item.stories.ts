import { html } from 'lit';
import '.';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'NTI/news-item',
  tags: ['autodocs'],
  render: (args: any) => html`<news-item 
        image=${args.image} 
        title=${args.title}
        description=${args.description}
        date=${args.date}
        readmorelink=${args.readmorelink}
    />`,
  
} ;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: any = {
    args: {
        image: 'https://placehold.co/500x300.webp',
        title: 'NTI Gymnasiet och Uppsala universitet utvecklar undervisning i programmering',
        description: 'NTI Gymnasiet i Uppsala har sedan 2018 deltagit i ULF (utbildning, lärande, forskning), en statlig försöksverksamhet som främjar praktiknära forskning...',
        date: '2023-03-03',
        readmorelink: 'https://www.ntigymnasiet.se/nyheter/nti-gymnasiet-och-uppsala-universitet-utvecklar-undervisning-i-programmering/',
    },
};