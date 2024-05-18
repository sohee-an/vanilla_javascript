document.addEventListener("DOMContentLoaded", function () {
  const userId = 1;
  const url = `/api/posts/${userId}`;

  // API 호출
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const postContainer = document.createElement("div");
      postContainer.className = "postContainer";

      data.forEach((post) => {
        const postCountElement = document.getElementById("postCount");
        postCountElement.textContent = `전체 글 (${data.length}개)`;

        const postElement = document.createElement("div");
        postElement.className = "post";

        const titleElement = document.createElement("h4");
        titleElement.className = "postTitle";
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.className = "postContent";
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        postContainer.appendChild(postElement);
        postElement.addEventListener("click", function () {
          // 글 클릭 시 상세 페이지로 이동
          window.location.href = `/detail?id=${post.id}`;
        });
      });

      document.querySelector(".postsWrapper").appendChild(postContainer);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
