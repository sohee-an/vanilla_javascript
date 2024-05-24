import View from "./View.js";

export default class extends View {
  constructor(params) {
    super(params);
    this.setTitle("Setting");
  }
  async getHtml() {
    return `
    <h1>Welcome Setting</h1>`;
  }
}
