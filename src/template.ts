// @ts-ignore
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("test-wc")
export class MyComponent extends LitElement {
  //     private static styles = css`
  //         :host {
  //             color: var(--my-element-text-color, yellow);
  //             background: var(--my-element-background-color, green);
  //             font-family: var(--my-element-font-family, Roboto);
  //             display: block;
  //             padding: 8px;
  //             margin: 8px;
  //         }
  //   `;

  override render() {
    return html`<div><slot></slot></div> `;
  }
}

export const myTemplate = (value: string) => {
  return html` <test-wc><div>${value}</div></test-wc> `;
};
