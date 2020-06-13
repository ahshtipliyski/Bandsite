const apiKey = "7b95bc92-a319-4ff5-a56a-47ea95497abd";

//creating default comments and pushing information from the array.
function displayComments(array) {
let biggerContainer = document.querySelector(".comment__comments-array");
biggerContainer.innerText = "";

  for (let i = 0; i < array.length; i++) {

    let actualDate = new Date(array[i]["timestamp"]);
    let displayDate = actualDate.getUTCMonth() + 1 + "/" + actualDate.getUTCDate() + "/" + actualDate.getUTCFullYear();

    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__container");
    biggerContainer.appendChild(commentContainer);

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("comment__image-container");
    commentContainer.appendChild(imageContainer);

    let headerContainer = document.createElement("div");
    headerContainer.classList.add("comment__header");
    commentContainer.appendChild(headerContainer);

    let image = document.createElement("div");
    image.classList.add("comment__header-image");
    imageContainer.appendChild(image);

    let name = document.createElement("h2");
    name.classList.add("comment__header-name");
    name.innerText = array[i]["name"];
    headerContainer.appendChild(name);

    let date = document.createElement("p");
    date.classList.add("comment__header-date");
    date.innerText = displayDate;
    headerContainer.appendChild(date);

    let textContainer = document.createElement("div");
    textContainer.classList.add("comment__text-default");
    commentContainer.appendChild(textContainer);

    let comment = document.createElement("p");
    comment.classList.add("comment__text-comment");
    comment.innerText = array[i]["comment"];
    textContainer.appendChild(comment);

    let removeCommentContainer = document.createElement("div");
    removeCommentContainer.classList.add("comment__button-container");
    commentContainer.appendChild(removeCommentContainer);

    let removeComment = document.createElement("button");
    removeComment.classList.add("comment__remove-comment");
    removeComment.addEventListener("click", event => {
      let commentId = event.target.id;
      deleteComment(commentId);
    });
    removeComment.id = array[i]["id"];
    removeComment.innerText = "Delete Comment";
    removeCommentContainer.appendChild(removeComment);
  }
}


const form = document.querySelector(".comment__input-container");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let addComment = axios
  .post(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`,
    {
    name: event.target.name.value,
    comment: event.target.comment.value
    }
  );
  addComment.then(() => {
    getComments();
  })

  let clearForm = document.querySelector(".comment__input-container");
  clearForm.reset();
  });

  function getComments() {
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`)
    .then(response => {
      displayComments(
        response.data.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      );
    });
  };
  getComments();

  function deleteComment(id) {
    axios
    .delete(`https://project-1-api.herokuapp.com/comments/${id}?api_key=<${apiKey}>`)
    .then (response => {
      getComments();
    });
  }


