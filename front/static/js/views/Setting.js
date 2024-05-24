import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Setting");
  }
  async getHtml() {
    return `
    <h1>Welcome Setting</h1>`;
  }
}
