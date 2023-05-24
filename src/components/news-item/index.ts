import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {styles} from './styles'

@customElement('news-item')
export class NTIButton extends LitElement {
    @property({ type: String })
    image = null // https://www.ntigymnasiet.se/wp-content/uploads/resized/46/ntig-uppsala_338x220_7c73d4c01c11b17c176b7e0ec895b594.jpeg

    @property({ type: String })
    title = null // NTI Gymnasiet och Uppsala universitet utvecklar undervisning i programmering

    @property({ type: String })
    description = null // NTI Gymnasiet i Uppsala har sedan 2018 deltagit i ULF (utbildning, lärande, forskning), en statlig försöksverksamhet som främjar praktiknära forskning...

    @property({ type: String })
    date = null // date 2023-03-03

    @property({ type: String })
    readmorelink = null // https://www.ntigymnasiet.se/nyheter/nti-gymnasiet-och-uppsala-universitet-utvecklar-undervisning-i-programmering/

    render() {
        return html`
            <div class="col-4 list-card">
                <div class="list-card-inner">
                <div class="image-holder purple" style="position:relative; background-image: url(${this.image || '#'});">
                    <img src="${this.image || '#'}" class="entered">
                </div>
                <div class="card-content-holder bg-white">
                    <div class="card-content c-black">
                        <p class="avantbold card-date">${this.date}</p>
                        <h2 class="title-s avantbold">${this.title}</h2>
                        <p class="excerpt">${this.description}</p>
                        <a class="readmore" href="${this.readmorelink || '#'}">Läs mer</a>
                        <div class="news-line"></div>
                    </div>
                </div>
                </div>
            </div>
        `
    }

    static styles = styles
}

declare global {
    interface HTMLElementTagNameMap {
        'nti-button': NTIButton
    }
}
