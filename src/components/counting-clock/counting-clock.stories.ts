import { html } from 'lit';
import '.'

const meta = {
    title: 'custom/CountingClock',
    tags: ['autodocs'],
    render: (args: any) => html`
            <counting-clock .format=${args.format} .tickInterval=${args.tickInterval}/>
        `,
    args: {
        format: "HH:mm:ss",
        tickInterval: 1000
    },
};
  
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: any = {
    args: {
        format: "HH:mm:ss",
        tickInterval: 1000
    },
};
