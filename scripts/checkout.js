// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = localStorage.getItem("amount")

let movies = JSON.parse(localStorage.getItem("movie"))
console.log('movies:', movies);

let movie = document.getElementById("movie")

appendMovie(movies)

function appendMovie(data){
    data.forEach(function(elem){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.Poster;

        let name = document.createElement("h3");
        name.innerText = elem.Title;

        div.append(name,image);
        movie.append(div)

    })
}

function confirm(){

    let seat = Number(document.getElementById("number_of_seats").value);
    let result = seat*100;
    
    if(amount === result){
        alert("Booking successful!")
        
    }
    else{
        alert("Insufficient Balance!");
    }
}