import View from "./View.js";

export default class extends View {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  async getHtml() {
    return `
    <h1 class="home_title">Welcome home</h1>
    <p>
    <a href="/posts" class="posts_link" data-link >Welcome to my blog</a>
    </p>`;
  }
}
