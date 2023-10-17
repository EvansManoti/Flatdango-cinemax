let films = [];
let selectedfilms =null;
fecthFilms
function fecthFilms() {
    fetch("http://localhost:3000/films", requestOptions,{
         method: 'GET',
      })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

function films() {
let films=document.getElementById('character-bar');
let str = "";
for(let i = 0; i < films.length; i++){
let film = films[i];
str = str+`<span onclick="displayfilm('${i}')" id="${film.id}">${film.title}</span>`;
}

bar.innerHTML = str;
displayfilm(0);
}

function displayfilm(id) {
let film = films[id];
selectedFilm=id;
let charTitle = document.getElementById("title");
let charRuntime = document.getElementById("runtime");
let charCapacity = document.getElementById("capacity");
let charShowtime = document.getElementById("showtime");
let charTicketsSold = document.getElementById("ticketssold");
let charDescription = poster.getElementById("description");
let charPoster = document.getElementById("poster");
charTitle.innerText = film.title;
charRuntime = film.runtime;
charCapacity.innerText = film.capacity; 
charShowtime.innerText = film.showtime;
charTicketsSold.innerText = film.ticketsSold;
charDescription.innerText = film.description;
charPoster.innerText = film.poster
}
let Totalticket=document.getElementById("total-tickets")
totaltickets.addEventListener("submit", function(e) {
e.preventDefault();
let ticketsInput=document.getElementById("tickets");
let tickets = parseInt(ticketsInput.value);
if (!tickets) return;
let film =films[selectedFilm];
film.tickets = tickets + film.tickets;
displayFilm(selectedFilm);
ticketsInput.value =""
}); 
