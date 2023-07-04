//element.remove()

let newGame = document.createElement('div');
newGame.classList.add('video-games');

let containerDiv = document.querySelector('.container');
containerDiv.appendChild(newGame);

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addNewGame);

function addedGame (){
    let gameName = document.getElementById('Gname').value;
    let gameImage = document.getElementById('img').value;
    let console = document.getElementById('cType').value;
    let gamePrice = document.getElementById('price').value;
    let stock = document.querySelector('#inStock').value;

    newGame.insertAdjacentHTML('beforeend', html)
};

let html = `
<div class="video-games" id="videoGames">
    <h2>${gameName}</h2>
    <div class="image1">
        <img src="${gameImage}" alt="video game poster" height="355" width="280">
    </div>
<hr/>
    <p id="console">${console}</p>
<br>
    <p id="price">${gamePrice}/p>
<br>
<br>
    <button id="stock">${stock}</button>
<br>
    <button id="delete">Remove</button>
</div>`


// let addedGame = document.getElementById('videoGames');
// addedGame.appendChild(newGame)

// addedGame.insertBefore(newGame, addedGame.firstElementChild);

