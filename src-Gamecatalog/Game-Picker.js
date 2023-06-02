var overzichtScherm = document.getElementById("overzicht");
var winkelmandjeScherm = document.getElementById("winkelmandje");
var switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", switchScreens);

var winkelmand = [];

winkelmandjeScherm.style.display = "none";

games.forEach((game)=>{
    //maak element
    var gameBox = document.createElement("div");
    gameBox.classList.add("gameBoxStyle");
    var titelElem = document.createElement("h2");
    var selectGameButton = document.createElement('input')

    selectGameButton.type = "checkbox"
    //put content
    titelElem.innerText = game.title;
    gameBox.innerText = game.price;

    selectGameButton.dataset.price = game.price;
    selectGameButton.dataset.name = game.title;

    selectGameButton.addEventListener("click", addToCart)
    //scherm aantonen
    gameBox.appendChild(selectGameButton);
    gameBox.appendChild(titelElem);
    overzichtScherm.appendChild(gameBox);
})

function switchScreens() {
    if (overzichtScherm.style.display == "none") {
        overzichtScherm.style.display = "block";
        winkelmandjeScherm.style.display = "none";
    }
        else {
            overzichtScherm.style.display = "none";
            winkelmandjeScherm.style.display = "block";
        }
}

function addToCart() {
    winkelmand.push({name: this.dataset.name, price: this.dataset.price});
    console.log(this.dataset.name);
}