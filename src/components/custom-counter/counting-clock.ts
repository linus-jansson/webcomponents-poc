import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('counting-clock')
export class CountingClock extends LitElement {
       
    @property({ type: String })
    format = null

    @property({ type: Number })
    tickInterval = 1000

    private dateNow = this._getFormattedTime();
    private ticker: NodeJS.Timer | undefined;

    render = () => this.dateNow

    connectedCallback(): void {
        super.connectedCallback();
        console.log("connectedCallback")
        this.ticker = setInterval(() => {
            this.dateNow = this._getFormattedTime()
            this.requestUpdate();
        }, this.tickInterval)
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        console.log("disconnectedCallback");
        console.log(this.ticker)
        clearInterval(this.ticker);
    }

    private _getFormattedTime() {
        const date = new Date()

        // depending on this.format return different formats
        const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        const milliseconds = (date.getMilliseconds() < 10 ? '0' : '') + date.getMilliseconds();
        // date.toISOString().slice(0, 10) + " " + hours + ":" + minutes + ":" + seconds;
        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }



    static styles = css`

    `
}

declare global {
    interface HTMLElementTagNameMap {
        'CountingClock': CountingClock
    }
}
