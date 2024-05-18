document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");
  const userId = 1;

  if (postId) {
    fetch(`/api/posts/${userId}/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        const postDetailElement = document.querySelector(".postDetail");
        const titleWrapperElement = document.createElement("div");
        titleWrapperElement.className = "titleWrapper";

        const diverWrapperElement = document.createElement("div"); // diverWrapperElement 생성
        diverWrapperElement.className = "diverwrapper";

        const diverElement = document.createElement("div");
        diverElement.className = "diver";

        diverWrapperElement.appendChild(diverElement);

        const titleElement = document.createElement("h1");
        titleElement.className = "postTitle";
        titleElement.innerHTML = data.title;
        titleWrapperElement.appendChild(titleElement);

        const contentElement = document.createElement("p");
        contentElement.className = "postContent";
        contentElement.textContent = data.content;

        postDetailElement.appendChild(titleWrapperElement);
        postDetailElement.appendChild(diverWrapperElement);
        postDetailElement.appendChild(contentElement);
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  } else {
    console.error("No post ID found in URL");
  }
});
