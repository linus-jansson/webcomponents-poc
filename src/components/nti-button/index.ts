import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('nti-button')
export class NTIButton extends LitElement {
       
    @property({ type: String })
    href = null

    @property({ type: Function })
    onClick = () => {};

    @property({ type: String })
    size = "default"

    @property({ type: String })
    target = "_self"

    render() {
        return html`
            <button class="custom-button ${this._getSize()}" @click=${this._onClick}>
                <slot>
                    Det här borde inte synnas
                </slot>
            </button>
        `
    }

    private _onClick() {
        if (this.href && (this.href as string)?.length > 0) {
            window.open(this.href, this.target)
        }
        else {
            this.onClick()
        }
    }

    private _getSize() {
        switch (this.size) {
            case "small":
                return "button-small"
            case "large":
                return "button-large"
            default:
                return "button-default"
        }
    }

    static styles = css`
        .custom-button {
            font-family: Helvetica;
            font-weight: bold;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,.33);
            border-radius: 7px;
            text-transform: uppercase;
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

        .custom-button.button-default {
            font-size: 19px;
            padding: 21px 54px;
        }

        .custom-button.button-small {
            font-size: 16px;
            padding: 17px 45px;
        }

        .custom-button.button-large {
            font-size: 22px;
            padding: 25px 60px;
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
