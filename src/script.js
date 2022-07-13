let number = parseFloat(0);
console.log("Hello, World");
(function() {
    spanOne.innerHTML = ' <h1> Pense em um numero de 0 a 100 é guarde na sua memoria</h1> <h2>Este Algoritimo e capaz de extrair este numero de você!!</h2> <h3>ACREDITE !!</h3> <h3> Após pensar no numero clique em iniciar ↓</h3> ';
    btn.innerHTML = '<button onclick=" init()">Iniciar</button>';
})();

function reload() {
    location.reload();
}

function init() {
    spanOne.innerHTML = '  '
    btn.innerHTML = '  '
    questOne()
}

function questOne() {
    spanOne.innerHTML = '<h2> Verifique se esté card contem o seu Numero  ↓</h2> ';
    spanImg.innerHTML = '<img src="src/img/01.jpeg" alt="cartao" id="cartao">';
    btn.innerHTML = '<button class="yes" onclick="questTwo(); calcOne()">Contem</button> <button class="not"onclick="questTwo()">Não Contem</button>';
    back.innerHTML = '<button onclick="reload()">Voltar</button>';
}

function questTwo() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/02.jpeg"`, 2000);
    btn.innerHTML = '<button class="yes" onclick="questThree(); calcTwo()">Contem</button> <button class="not" onclick="questThree()">Não Contem</button>';

}

function questThree() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/04.jpeg"`, 2000);
    btn.innerHTML = '<button class="yes" onclick="questFour(); calcThree()">Contem</button> <button class="not" onclick="questFour()">Não Contem</button>';

}

function questFour() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/08.jpeg"`, 2000);
    btn.innerHTML = '<button class="yes" onclick="questFive(); calcFour()">Contem</button> <button class="not" onclick="questFive()">Não Contem</button>';

}


function questFive() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/16.jpeg"`, 2000);
    btn.innerHTML = '<button  class="yes"onclick="questSix(); calcFive()">Contem</button> <button class="not" onclick="questSix()">Não Contem</button>';
}

function questSix() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/32.jpeg"`, 2000);
    btn.innerHTML = '<button class="yes" onclick="questSeven(); calcSix()">Contem</button> <button class="not" onclick="questSeven()">Não Contem</button>';

}

function questSeven() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/64.jpeg"`, 2000);
    btn.innerHTML = '<button class="yes" onclick="calcSeven(); result()">Contem</button> <button class="not" onclick="result()">Não Contem</button>';

}

function result() {
    spanOne.innerHTML = '  '
    btn.innerHTML = '  '
    spanImg.innerHTML = '  '
    spanOne.innerHTML = ' <span> Seu numero é o: <br> ↓ <br> ' + number + '</span> ';

}

function calcOne() {
    number = number + (5 ^ 2 + 43 - 3 ^ 3 + 6 ^ 2 - 6 ^ 2 - 4 * 9 - 3)
}

function calcTwo() {
    number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 + 30 - 1 + 2)
}

function calcThree() {
    number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 * -4 - 8)
}

function calcFour() {
    number = number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8) / 2
}



function calcFive() {
    number = number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8)
}

function calcSix() {
    number = number + (5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14) / 2
}

function calcSeven() {
    number = number + (5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14)
}