var overzichtScherm = document.getElementById("overzicht");
var winkelmandjeScherm = document.getElementById("winkelmandje");
var switchButton = document.getElementById("switchButton");

var priceFilterButton = document.getElementById("priceFilterButton");
var priceFilterInput = document.getElementById("priceFilterInput");

const ratingDrop = document.getElementById('rating')
const genreDrop = document.getElementById('genre');

ratingDrop.addEventListener('change', filterRating);
genreDrop.addEventListener('change', filterGenre);
switchButton.addEventListener("click", switchScreens);
priceFilterButton.addEventListener("click", filterPrice);

var winkelmand = [];

winkelmandjeScherm.style.display = "none";

renderGames(games);

function switchScreens() {
    if (overzichtScherm.style.display == "none") {
        overzichtScherm.style.display = "block";
        winkelmandjeScherm.style.display = "none";
    }
        else {
            overzichtScherm.style.display = "none"; 
            winkelmandjeScherm.style.display = "block";
            renderWinkelmandjeContent();
        }
}

function addToCart() {
    //push alleen als deze niet in de list voorkomt.
    // wantedGame == argument bij lambda en daarna de pijl is de functie die moet doen.
    const foundAtIndex = winkelmand.findIndex(wantedGame => wantedGame.name === this.dataset.name);
    if (foundAtIndex > -1) {
        winkelmand.splice(foundAtIndex, 1);
    }

    else {
    winkelmand.push({name: this.dataset.name, price: this.dataset.price});
    console.log(this.dataset.name);
    }
}

function renderWinkelmandjeContent() {

    //Clear the inhoud!

    winkelmandjeScherm.innerHTML = "<h1>Dit is het scherm voor de winkelmandje</h1>"

    var totalPrice = 0;
    var winkelmandList = document.createElement("ul")

    winkelmand.forEach((winkelmandItem)=>{
        var winkelmandElem = document.createElement("li");

        winkelmandElem.innerText = winkelmandItem.name + " - " + winkelmandItem.price;
        winkelmandList.appendChild(winkelmandElem);

        totalPrice += parseFloat(winkelmandItem.price);
    })
    winkelmandjeScherm.appendChild(winkelmandList);

    var prijsElem = document.createElement("p");
    prijsElem.innerText = totalPrice;
    winkelmandjeScherm.appendChild(prijsElem);
}

function filterPrice() {
   var maxPrice = parseFloat(priceFilterInput.value);

   var filteredList = games.filter((game) => parseFloat(game.price) <= maxPrice); {
        console.log(filteredList);
        renderGames(filteredList);

   }
}

function filterGenre() {
   var genreValue = genreDrop.value;

   var filteredList = games.filter((game) => (game.genre) == genreValue); {
        console.log(filteredList);
        renderGames(filteredList);
    }
}

function filterRating() {
    var ratingValue = ratingDrop.value;

   var filteredList = games.filter((game) => (game.rating) == ratingValue); {
        console.log(filteredList);
        renderGames(filteredList);
    }
}

function renderGames(gamesToRender) {
    overzichtScherm.innerHTML = "<h1>Dit is het scherm voor de overzicht</h1>";

    gamesToRender.forEach((game)=>{
        //maak element
        var gameBox = document.createElement("div");
        var genreElem = document.createElement("h2");
        gameBox.classList.add("gameBoxStyle");
        var titelElem = document.createElement("h2");
        var ratingElem = document.createElement("h2");
        var selectGameButton = document.createElement('input')
    
        selectGameButton.type = "checkbox"
        //put content
        titelElem.innerText = game.title;
        gameBox.innerText = game.price;
        genreElem.innerText = "Genre - " + game.genre;
        ratingElem.innerText = "Rating - " + game.rating;

        selectGameButton.dataset.price = game.price;
        selectGameButton.dataset.name = game.title;
        selectGameButton.dataset.genre = game.genre;
        selectGameButton.dataset.rating = game.rating;
        

        selectGameButton.addEventListener("click", addToCart)
        //scherm aantonen
        gameBox.appendChild(selectGameButton);
        gameBox.appendChild(titelElem);
        gameBox.appendChild(genreElem);
        gameBox.appendChild(ratingElem);
        overzichtScherm.appendChild(gameBox);
    })    
}