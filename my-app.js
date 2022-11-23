import {LitElement, html} from 'lit';
import {Router} from '@lit-labs/router';
import './my-element';

export class MyApp extends LitElement {
  _routes = new Router(this, [
    {
      path: '/',
      render: () => html`
        <h1>Home</h1>
        <my-element>
          <p>This is child content</p>
        </my-element>
      `,
    },
    {path: '/projects', render: () => html`<h1>Projects</h1>`},
    {path: '/about', render: () => html`<h1>About</h1>`},
  ]);

  render() {
    return html`
      <header>...</header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}

window.customElements.define('my-app', MyApp);