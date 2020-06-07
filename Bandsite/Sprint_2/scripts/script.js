let commentsArray = [
  {
  name: "Micheal Lyons",
  date: "12/18/2018",
  comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
  name: "Gary Wong",
  date: "12/12/2018",
  comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
  name: "Theodore Duncan",
  date: "11/15/2018",
  comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
}];

//creating default comments and pushing information from the array.
function displayComments(array) {
let biggerContainer = document.querySelector(".comment__comments-array");

for (let i = 0; i < array.length; i++) {
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
  date.innerText = array[i]["date"];
  headerContainer.appendChild(date);

  let textContainer = document.createElement("div");
  textContainer.classList.add("comment__text-default");
  commentContainer.appendChild(textContainer);

  let comment = document.createElement("p");
  comment.classList.add("comment__text-comment");
  comment.innerText = array[i]["comment"];
  textContainer.appendChild(comment);
  }
}
displayComments(commentsArray);

const form = document.querySelector(".comment__input-container");

form.addEventListener("submit", function(event) {
event.preventDefault();

const addComment = {};
addComment.name = event.target.name.value;
addComment.comment = event.target.comment.value;

let biggerContainer = document.querySelector(".comment__comments-array");

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
name.innerText = addComment.name;
headerContainer.appendChild(name);

let getDate = new Date();
let getDay = String(getDate.getDate()).padStart(2, "0");
let getMonth = String(getDate.getMonth() + 1).padStart(2, "0");
let getYear = getDate.getFullYear();

getDate = `${getMonth}/${getDay}/${getYear}`;

let newDate = document.createElement("p");
newDate.innerText = getDate;
newDate.classList.add("comment__header-date");
headerContainer.appendChild(newDate);

let textContainer = document.createElement("div");
textContainer.classList.add("comment__text-default");
commentContainer.appendChild(textContainer);

let comment = document.createElement("p");
comment.classList.add("comment__text-comment");
comment.innerText = addComment.comment;
textContainer.appendChild(comment);

//Couldn't make it work with unshift. Found this method on Stack Overflow
let firstComment = document.querySelector(".comment__comments-array");
firstComment.insertBefore(commentContainer, firstComment.firstChild);

document.querySelector(".comment__input-container").reset();
});