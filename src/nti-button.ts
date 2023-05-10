import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('nti-button')
export class NTIButton extends LitElement {
       
    @property({ type: String })
    href = null

    @property({ type: Function })
    onClick = () => {};

    render() {
        return html`
            <button class="custom-button" @click=${this._onClick}>
                <slot>
                    Det här borde inte synnas
                </slot>
            </button>
        `
    }

    private _onClick() {
        if (this.href && (this.href as string)?.length > 0) {
            window.location.href = this.href
        }
        
        if (this.onClick) {
            this.onClick()
        }
    }

    static styles = css`
        .custom-button {
            font-family: Helvetica;
            font-size: 19px;
            font-weight: bold;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.33);
            border-radius: 7px;
            text-transform: uppercase;
            padding: 21px 54px;
            color: #fff;
            background-image: 
                linear-gradient(
                    -90deg,
                    #dd0890 0,
                    #200c9c 30%,
                    #4a0082 70%,
                    #dd0890 100%
                );
            cursor: pointer;
            background-size: 300% 100%;
            transition: all .4s ease-in-out;
            border: 0;
        }
        .custom-button:hover{
            background-position: 100% 0;
            -webkit-transition: all .4s ease-in-out;
            -o-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'nti-button': NTIButton
    }
}
