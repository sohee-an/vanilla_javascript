import Home from "./views/Home.js";
import Posts from "./views/Posts.js";
import Setting from "./views/Setting.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/setting", view: Setting },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(
    (potentialMatche) => potentialMatche.isMatch
  );
  if (!match) {
    match = {
      route: routes[0],
    };
  }

  const view = new match.route.view();

  document.querySelector("#root").innerHTML = await view.getHtml();
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
