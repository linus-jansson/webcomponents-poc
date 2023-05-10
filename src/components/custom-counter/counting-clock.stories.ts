import { html } from 'lit';
import './counting-clock'

const meta = {
    title: 'custom/CountingClock',
    tags: ['autodocs'],
    render: () => html`<h1><counting-clock></counting-clock></h1>`,
  } ;
  
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: any = {
    args: {
        dateFormat: "", 
    },
};
