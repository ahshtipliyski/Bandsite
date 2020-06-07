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
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA"
  }
];

let parentTable = document.querySelector(".table__full");

let tableContainerOne = document.createElement('div');
tableContainerOne.classList.add('table__container-one');
parentTable.appendChild(tableContainerOne);

let dateHeaderOne = document.createElement('p');
dateHeaderOne.classList.add('table__header-date-one');
tableContainerOne.appendChild(dateHeaderOne);
document.querySelector(".table__header-date-one").innerText = ("DATES");

let venueHeaderOne = document.createElement('p');
venueHeaderOne.classList.add('table__header-venue-one');
tableContainerOne.appendChild(venueHeaderOne);
document.querySelector(".table__header-venue-one").innerHTML = ("VENUE");

let locationHeaderOne = document.createElement('p');
locationHeaderOne.classList.add('table__header-location-one');
tableContainerOne.appendChild(locationHeaderOne);
document.querySelector(".table__header-location-one").innerHTML = ("LOCATION");

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

};






















// let displayTable = document.querySelector('.table__body');
// let newTr = document.createElement('tr');
// let dateTh = document.createElement('th');
// let venueTd = document.createElement('td');
// let locationTd = document.createElement('td');
// let ticketTd = document.createElement('td');
// let ticketButton = document.createElement('button');

















