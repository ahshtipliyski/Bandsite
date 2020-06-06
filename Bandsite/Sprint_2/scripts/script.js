

const commentsArray = [
  {
    imgUrl: "/assets/images/Mohan-muruge.jpg",
    name: "Michael Lyons",
    date: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    imgUrl: "/assets/images/Mohan-muruge.jpg",
    name: "Not Michael Lyons",
    date: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    imgUrl: "/assets/images/Mohan-muruge.jpg",
    name: "Michael Lyons",
    date: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  }
];

let commentsSection = document.querySelector(".comments");
let parentForm = document.getElementById("comments__form");
let biggerContainer = document.createElement('div');
biggerContainer.classList.add("comments__bigger-container");
commentsSection.appendChild(biggerContainer);

function loopingFunction(commentsArray) {
for(let i = 0; i < commentsArray.length; i++) {  

  
  let commentContainer = document.createElement('div');
  commentContainer.classList.add("comments__container");
  biggerContainer.appendChild(commentContainer);
  let imageUrl = document.createElement('img');
  imageUrl.classList.add("comments__image-url");
  commentContainer.appendChild(imageUrl);
  let commentName = document.createElement("h4");
  commentContainer.appendChild(commentName);
  commentName.classList.add("comments__person");
  document.querySelectorAll(".comments__person")[i].innerHTML = commentsArray[i].name;
  let commentDate = document.createElement("p");
  commentContainer.appendChild(commentDate);
  commentDate.classList.add("comments__date");
  document.querySelectorAll(".comments__date")[i].innerHTML = commentsArray[i].date;
  let commentText = document.createElement("p");
  commentContainer.appendChild(commentText);
  commentText.classList.add("comments__text");
  document.querySelectorAll(".comments__text")[i].innerHTML = commentsArray[i].comment;
};
};
loopingFunction(commentsArray);


let form = document.getElementById("comments__form")

form.addEventListener("submit", function displayComment(event){
  let submitBtn = document.getElementById('submitBtn');
  event.preventDefault();
  // let commentContainer = document.createElement('div');
  // commentContainer.classList.add("comments__container");
  
  // parentForm.appendChild(commentContainer);
  // let imageUrl = document.createElement('img');
  // imageUrl.classList.add("comments__image-url");
  // commentContainer.appendChild(imageUrl);

  let newName = event.target.name.value;
  let newComment = event.target.message.value;
  let dateValue = event.target.message.value;

  ////////////

  
  



  // let newContainer = document.createElement('div');
  // newContainer.classList.add("comments__container");
  // parentForm.appendChild(newContainer);
  // let imageUrl = document.createElement('img');
  // imageUrl.classList.add("comments__image-url");
  // commentContainer.appendChild(imageUrl);
  // let newCommentName = document.createElement("h4");
  // newContainer.appendChild(newCommentName);
  // newCommentName.classList.add("comments__person");
  // document.querySelectorAll(".comments__person").innerHTML.newName;
  // let newCommentDate = document.createElement("p");
  // newCommentContainer.appendChild(newCommentDate);
  // newCommentDate.classList.add("comments__date");
  // document.querySelectorAll(".comments__date")[i].innerHTML.dateValue;
  // let newCommentText = document.createElement("p");
  // commentContainer.appendChild(newCommentText);
  // newCommentText.classList.add("comments__text");
  // document.querySelectorAll(".comments__text")[i].innerHTML.newComment;



  ////////////put the infor in the tag

  let getDate = new Date()
  let getMonth = getDate.getMonth()+1; 
  let getDay = getDate.getDate();
  let getYear = getDate.getFullYear();
  let newDate = `${getMonth}/${getDay}/${getYear}`;
  console.log('date: '+ newDate);

  let newCommentObject = {
    name: newName,
    date: newDate,
    comment: newComment    
  };



  

  
  console.log("this is name: " + newName);
  console.log("this is comment: " + newComment);
  // commentName.classList.add("comments__person");
  // let input = event.target.name.value;
  // commentName.innerHTML = input;
  // document.querySelector("input").value = "";

  // createComment(newCommentObject);
  // console.log(newCommentObject);
  commentsArray.unshift(
    {
    name: newName,
    date: newDate,
    comment: newComment
  });

  // function createComment(input) {
    // console.log("input goes here: " + input);
    // let commentContainer = document.createElement('div');

    // let imageUrl = document.createElement('img');
    // let commentName = document.createElement("h4");
    // let commentDate = document.createElement("p");
    // let commentText = document.createElement("p");
    // commentContainer.classList.add('comments__container');
    // let newContainer = document.createElement("div");
    // let newImage = document.createElement("img");
    // let newCommentName = document.createElement("h4");
    // let newCommentDate = document.createElement("p");
    // let newCommentText = document.createElement("p");
  
    // biggerContainer.appendChild(commentContainer);
    // commentContainer.appendChild(imageUrl);
    // commentContainer.appendChild(commentName); 
    // commentContainer.appendChild(commentDate);
    // commentContainer.appendChild(commentText);
  
    // commentName.innerText = newName;
    // commentDate.innerText = newDate;
    // commentText.innerText = newComment; 
    
    // };
    console.log(commentsArray);
    

    commentsArray.forEach(element => {
      let commentContainer = document.createElement('div');
      let imageUrl = document.createElement('img');
      let commentName = document.createElement("h4");
      let commentDate = document.createElement("p");
      let commentText = document.createElement("p");
      biggerContainer.classList.add("comments__bigger-container");
      commentContainer.classList.add("comments__container");
      imageUrl.classList.add("comments__image-url");
      commentName.classList.add("comments__person");
      commentDate.classList.add("comments__date");
      commentText.classList.add("comments__text");
      
      biggerContainer.appendChild(commentContainer);
      commentContainer.appendChild(imageUrl);
      commentContainer.appendChild(commentName); 
      commentContainer.appendChild(commentDate);
      commentContainer.appendChild(commentText);
    
      commentName.innerText = element.name;
      commentDate.innerText = element.date;
      commentText.innerText = element.comment; 
    });
});







