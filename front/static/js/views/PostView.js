import View from "./View.js";

export default class extends View {
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
