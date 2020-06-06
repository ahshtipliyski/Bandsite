const upcomingShows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {
    date: "Web Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA"
  },
];

let parentTable = document.querySelector(".table__full");

for(let i = 0; i < upcomingShows.length; i++) {
  let tableContainer = document.createElement('div');
  tableContainer.classList.add('table__container');
  parentTable.appendChild(tableContainer);

  let dateHeader = document.createElement('p');
  dateHeader.classList.add('table__header-date');
  tableContainer.appendChild(dateHeader);
  document.querySelectorAll(".table__header-date")[i].innerHTML = ("DATE");

  let tableDate = document.createElement('p');
  tableContainer.appendChild(tableDate);
  tableDate.classList.add("table__date");
  document.querySelectorAll(".table__date")[i].innerHTML = upcomingShows[i].date;

  let venueHeader = document.createElement('p');
  venueHeader.classList.add('table__header-venue');
  tableContainer.appendChild(venueHeader);
  document.querySelectorAll(".table__header-venue")[i].innerHTML = ("VENUE");

  let tableVenue = document.createElement('p');
  tableContainer.appendChild(tableVenue);
  tableVenue.classList.add("table__venue");
  document.querySelectorAll(".table__venue")[i].innerHTML = upcomingShows[i].venue;

  let locationHeader = document.createElement('p');
  locationHeader.classList.add('table__header-location');
  tableContainer.appendChild(locationHeader);
  document.querySelectorAll(".table__header-location")[i].innerHTML = ("LOCATION");

  let tableLocation = document.createElement('p');
  tableContainer.appendChild(tableLocation);
  tableLocation.classList.add("table__location");
  document.querySelectorAll(".table__location")[i].innerHTML = upcomingShows[i].location;

  let tableButton = document.createElement('button');
  tableContainer.appendChild(tableButton);
  tableButton.classList.add("table__button");
  document.querySelectorAll(".table__button")[i].innerHTML = ("BUY TICKETS");


  // let commentName = document.createElement("h4");
  // commentContainer.appendChild(commentName);
  // commentName.classList.add("comments__person");
  // document.querySelectorAll(".comments__person")[i].innerHTML = commentsArray[i].name;


  // let showContainer = document.createElement('div');
  // showContainer.classList.add("table__container");

  // let newTr = document.createElement('tr');
  // let dateTh = document.createElement('th');
  // let venueTd = document.createElement('td');
  // let locationTd = document.createElement('td');
  // let ticketTd = document.createElement('td');
  // let ticketButton = document.createElement('button');

  // newTr.classList.add();
  // dateTh.classList.add('table__date');
  // venueTd.classList.add('tabel__venue');
  // locationTd.classList.add('table__location');
  // ticketButton.classList.add('table__ticket-button');

  // let commentContainer = document.createElement('div');
  // commentContainer.classList.add("comments__container");
  // parentForm.appendChild(commentContainer);
  // let imageUrl = document.createElement('img');
  // imageUrl.classList.add("comments__image-url");
  // commentContainer.appendChild(imageUrl);
  // let commentName = document.createElement("h4");
  // commentContainer.appendChild(commentName);
  // commentName.classList.add("comments__person");
  // document.querySelectorAll(".comments__person")[i].innerHTML = commentsArray[i].name;
  // let commentDate = document.createElement("p");
  // commentContainer.appendChild(commentDate);
  // commentDate.classList.add("comments__date");
  // document.querySelectorAll(".comments__date")[i].innerHTML = commentsArray[i].date;
  // let commentText = document.createElement("p");
  // commentContainer.appendChild(commentText);
  // commentText.classList.add("comments__text");
  // document.querySelectorAll(".comments__text")[i].innerHTML = commentsArray[i].comment;
};






















// let displayTable = document.querySelector('.table__body');
// let newTr = document.createElement('tr');
// let dateTh = document.createElement('th');
// let venueTd = document.createElement('td');
// let locationTd = document.createElement('td');
// let ticketTd = document.createElement('td');
// let ticketButton = document.createElement('button');

















