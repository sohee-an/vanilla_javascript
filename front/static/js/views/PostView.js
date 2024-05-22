import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Post");
  }
  async getHtml() {
    console.log("hihi", this.params.id);
    return `
    <h1>Welcome Posts ${this.params.id}</h1>`;
  }
}
