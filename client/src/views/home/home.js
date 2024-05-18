let testEl = document.querySelector(".mainTop");

testEl.addEventListener("click", function () {});

document.addEventListener("DOMContentLoaded", function () {
  const userId = 1;
  const url = `/api/${userId}/post`;

  // API 호출
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const postContainer = document.createElement("div");
      postContainer.className = "postContainer";

      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        const titleElement = document.createElement("h4");
        titleElement.className = "postTitle"; // title 요소에 class 추가
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.className = "postContent";
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        postContainer.appendChild(postElement);
      });

      document.querySelector(".postsWrapper").appendChild(postContainer);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
