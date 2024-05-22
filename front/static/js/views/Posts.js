import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
    <h1>Welcome Posts</h1>`;
  }
}
