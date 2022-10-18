import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {


    static get properties() {
        return {

        };
    }
    static get styles() {
        return css `
    ::slotted(*){
        border: 1px solid blue;
        padding: 6px;
    }
    `
    }


    render() {
        return html `
        <div>
            <slot></slot>
        </div>
        `;
    }
}
customElements.define('my-element', MyElement);