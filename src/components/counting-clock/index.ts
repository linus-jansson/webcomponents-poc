import { LitElement, PropertyValueMap, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { format as dateFormater}  from 'date-fns'
@customElement('counting-clock')
export class CountingClock extends LitElement {
       
    @property({ type: String })
    format = "HH:mm:ss"

    @property({ type: Number })
    tickInterval = 1000

    private formatTime = (time: Date) => {
        try {
            return dateFormater(time, this.format)
        }
        catch {
            return new Date();
        }
    }
    private dateNow = this.formatTime(new Date())!;
    private ticker : NodeJS.Timer | undefined;
    private setTicker = () => {
        this.ticker = setInterval(this.updateTime, this.tickInterval);
    }
    private updateTime = () => {
        this.dateNow = this.formatTime(new Date());
        this.requestUpdate();
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);
        
        if (_changedProperties.size > 0) {
            // if old value is not the same as new value and ticker interval is set
            if (_changedProperties.get("tickInterval") !== undefined && 
                _changedProperties.get("tickInterval") !== this.tickInterval
                ) {
                clearInterval(this.ticker);
                this.setTicker();
            }
        }
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.setTicker();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        console.log("disconnectedCallback");
        clearInterval(this.ticker);
    }

    render() {
        return html`<span>${this.dateNow}</span>`;
    };

}

declare global {
    interface HTMLElementTagNameMap {
        'CountingClock': CountingClock
    }
}
