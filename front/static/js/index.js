import Home from "./views/Home.js";
import Posts from "./views/Posts.js";
import Setting from "./views/Setting.js";
import PostView from "./views/PostView.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  if (values) {
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );

    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]];
      })
    );
  }

  return {};
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/post/:id/:something", view: PostView },
    { path: "/setting", view: Setting },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
      //   isMatch: location.pathname === route.path,
    };
  });
  console.log("ma", potentialMatches);
  let match = potentialMatches.find(
    (potentialMatche) => potentialMatche.result !== null
  );
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  view.getHtml().then((html) => {
    document.querySelector("#root").innerHTML = html;
    view.bindEvents(); // 이벤트 리스너를 바인딩
  });
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches("[data-link]")) {
      console.log("e", e);
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
