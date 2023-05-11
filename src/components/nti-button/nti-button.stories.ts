import { html } from 'lit';
import '.';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'NTI/Buttons',
  tags: ['autodocs'],
  render: (args: any) => html`<nti-button .href=${args.href} .onClick=${() => console.log("Hello world")} .size=${args.size} >${args.label}</nti-button>`,
  argTypes: {
    onClick: { action: 'onClick' },
    size: { type: 'select', options: ['small', 'default', 'large'] },
  },
} ;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: any = {
    args: {
        label: 'Knapptext',
    },
};

export const knapplänk: any = {
    args: {
        href: "https://www.ntigymnasiet.se/", 
        label: 'Klickar du på denna så hamnar du på NTI',
    },
};
