import View from "./View.js";

export default class NotFound extends View {
  constructor(params) {
    super(params);
    this.setTitle("404 Not Found");
  }

  async getHtml() {
    return `
      <h1>404 Not Found</h1>
    
    `;
  }
}
