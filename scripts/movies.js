// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movies = document.getElementById("movies");
let id;

async function searchMovie(){

    // https://www.omdbapi.com/?apikey=f29b803d&s=${};

    try{
        let search = document.getElementById("search").value ;

        let res = fetch(`https://www.omdbapi.com/?apikey=f29b803d&s=${search}`);

        let data = await (await res).json();
        let movie = data.Search
        
        return movie;

    }
    catch(error){
        console.log('error:', error)
    }

}

function appendMovie(data){
    if(data == undefined){
        return false;
    }

    movies.innerHTML = null;
    
        data.forEach(function(elem){
            let div = document.createElement("div")

            let image = document.createElement("img");
            image.src = elem.Poster;

            let name = document.createElement("h3");
            name.innerText = elem.Title;

            let button = document.createElement("button");
            button.textContent = "Book Now";
            button.classList.add("book_now");

            button.addEventListener("click" , function(){
                let arr = JSON.parse(localStorage.getItem("movie")) || [];
                arr.push(elem)
                localStorage.setItem("movie", JSON.stringify(arr) );
                window.location.href = "checkout.html";
            })

            div.append(image,name,button)
            movies.append(div)

        })

        
}

async function main(){
    let data = await searchMovie();
    console.log('data:', data)

    if(data == undefined){
        return false;
    }

    appendMovie(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function(){
        func();
    },delay)
}