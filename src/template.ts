import { LitElement, html, css } from 'lit';
import {property, customElement } from 'lit/decorators.js'

@customElement('test-wc')
class MyComponent extends LitElement {

    static styles = css`
        :host {
            color: var(--my-element-text-color, yellow);
            background: var(--my-element-background-color, green);
            font-family: var(--my-element-font-family, Roboto);
            display: block;
            padding: 8px;
            margin: 8px;
        }
  `;



    render () {
        return html`<div><slot></slot></div> `
    }
}


export const myTemplate = (value: string) => {
    return html`
        <test-wc>${value}</test-wc>
    `
}