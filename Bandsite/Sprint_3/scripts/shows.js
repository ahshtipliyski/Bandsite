// const upcomingShows = [
//   {
//     date: "Mon Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Tue Jul 18 2019",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Fri Jul 22 2019",
//     venue: "View Loungue",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Sat Aug 12 2019",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Fri Sep 05 2019",
//     venue: "Moscow Center",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Wed Aug 11 2019",
//     venue: "Pres Club",
//     location: "San Francisco, CA"
//   }
// ];

let parentTable = document.querySelector(".table__full");

let tableContainerTop = document.createElement('div');
tableContainerTop.classList.add('table__container-one');
parentTable.appendChild(tableContainerTop);

let dateHeaderTop = document.createElement('p');
dateHeaderTop.classList.add('table__header-date-one');
dateHeaderTop.innerText = ("DATES");
tableContainerTop.appendChild(dateHeaderTop);

let venueHeaderTop = document.createElement('p');
venueHeaderTop.classList.add('table__header-venue-one');
venueHeaderTop.innerText = ("VENUE");
tableContainerTop.appendChild(venueHeaderTop);

let locationHeaderTop = document.createElement('p');
locationHeaderTop.classList.add('table__header-location-one');
locationHeaderTop.innerText = ("LOCATION");
tableContainerTop.appendChild(locationHeaderTop);

upcomingShows = () => {
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=<7b95bc92-a319-4ff5-a56a-47ea95497abd>")
    .then(response => {
      console.log(response.data)
      response.data.forEach(post => {
        showDates(post);
      })
    })
    .catch(error => {
      console.log(error);
    })
};
upcomingShows();

showDates = (post) => {
  let tableContainer = document.createElement('div');
  tableContainer.classList.add('table__container');
  parentTable.appendChild(tableContainer);

  let dateHeader = document.createElement('p');
  dateHeader.classList.add('table__header-date');
  dateHeader.innerText = ("DATE");
  tableContainer.appendChild(dateHeader);

  let tableDate = document.createElement('p');
  tableDate.classList.add("table__date");
  tableDate.innerText = `${post.date}`;
  tableContainer.appendChild(tableDate);

  let venueHeader = document.createElement('p');
  venueHeader.classList.add('table__header-venue');
  venueHeader.innerHTML = ("VENUE");
  tableContainer.appendChild(venueHeader);

  let tableVenue = document.createElement('p');
  tableVenue.classList.add("table__venue");
  tableVenue.innerText = `${post.place}`
  tableContainer.appendChild(tableVenue);

  let locationHeader = document.createElement('p');
  locationHeader.classList.add('table__header-location');
  locationHeader.innerHTML = ("LOCATION");
  tableContainer.appendChild(locationHeader);

  let tableLocation = document.createElement('p');
  tableLocation.classList.add("table__location");
  tableLocation.innerText = `${post.location}`;
  tableContainer.appendChild(tableLocation);

  let tableButton = document.createElement('button');
  tableButton.classList.add("table__button");
  tableButton.innerHTML = ("BUY TICKETS");
  tableContainer.appendChild(tableButton);

};
