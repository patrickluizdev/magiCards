let number = parseFloat(0);

///////////////////////////////////////////////////////////////////////////////////////
(function() {
    spanOne.innerHTML = ' <h1> Pense em um numero de 0 a 100 é guarde na sua memoria</h1> <h2>Este Algoritimo e capaz de extrair este numero de você!!</h2> <h3>ACREDITE !!</h3> <h3> Após pensar no numero clique em iniciar ↓</h3> ';
    btn.innerHTML = '<button onclick=" init()">Iniciar</button>';
})();

//////////////////////////////////////////////////////////////////////////////////////////////
function button() {
    btnGo.innerHTML = '<button class="yes" id="toGo">Contem</button>';
    btNot.innerHTML = '<button class="not" id = "isNot">Não Contem</button>';
    back.innerHTML = '<button onclick="reload()">Voltar</button>';
}

function init() {
    spanOne.innerHTML = '  '
    btn.innerHTML = '  '
    questOne()
}

///////////////////////////////////////////////////////////////////////////////////

function questOne() {
    spanOne.innerHTML = '<h2> Verifique se esté card contem o seu Numero  ↓</h2> ';
    spanImg.innerHTML = '<img src="src/img/card00.jpeg" alt="cartao" id="cartao">';
    button()
    document.getElementById('toGo').onclick = function() {
        calcOne();
        questTwo();
    }
    document.getElementById('isNot').onclick = function() {
        questTwo();
        teste();
    }
}

function questTwo() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif";

    setTimeout(`document.getElementById("cartao").src = "src/img/card01.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        questThree();
        calcTwo();
    }
    document.getElementById('isNot').onclick = function() {
        questThree();
        teste();
    }

}

function questThree() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"

    setTimeout(`document.getElementById("cartao").src = "src/img/card02.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        questFour();
        calcThree();
    }
    document.getElementById('isNot').onclick = function() {
        questFour();
    }
}

function questFour() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"

    setTimeout(`document.getElementById("cartao").src = "src/img/card03.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        questFive();
        calcFour();
    }
    document.getElementById('isNot').onclick = function() {
        questFive();
    }
}


function questFive() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"

    setTimeout(`document.getElementById("cartao").src = "src/img/card04.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        questSix();
        calcFive();
    }
    document.getElementById('isNot').onclick = function() {
        questSix();
    }
}

function questSix() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"

    setTimeout(`document.getElementById("cartao").src = "src/img/card05.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        questSeven();
        calcSix();
    }
    document.getElementById('isNot').onclick = function() {
        questSeven();
    }
    number - ((5 ^ -4 * 9 - 3 - 9 * -4 - 8) / 2) > 100 ? result() : teste();
}

function questSeven() {
    document.getElementById("cartao").src = "https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-19.gif"
    setTimeout(`document.getElementById("cartao").src = "src/img/card06.jpeg"`, 2000);

    document.getElementById('toGo').onclick = function() {
        calcSeven();
        result();
    }
    document.getElementById('isNot').onclick = function() {
        result();
    }
}

/////////////////////////////////////////////////////////////////////////

function result() {
    spanOne.innerHTML = '  '
    btn.innerHTML = '  '
    btNot.innerHTML = '  '
    btnGo.innerHTML = '  '
    spanImg.innerHTML = '  '
    spanOne.innerHTML = ' <span> Seu numero é o: ↓ <div class="result">' + number + '</div> </span> ';

}

///////////////////////////////////////////////////////////////////

function calcOne() {

    number = number + (5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14);
}

function calcTwo() {

    number = number + ((5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14) / 2);
}

function calcThree() {

    number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 * -4 - 8);
    number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 + 30 - 1 + 2) >= 100 ? result() : teste();

}

function calcFour() {

    number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 + 30 - 1 + 2);

}



function calcFive() {

    number = number + (5 ^ 2 + 43 - 3 ^ 3 + 6 ^ 2 - 6 ^ 2 - 4 * 9 - 3);
    number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8) > 100 ? result() : teste();
}

function calcSix() {

    number = number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8);

}

function calcSeven() {

    number = number - ((5 ^ -4 * 9 - 3 - 9 * -4 - 8) / 2);
}


function teste() {
    console.log("Hello, World");

}

function reload() {
    location.reload();
}

//number = number + (5 ^ 2 + 43 - 3 ^ 3 + 6 ^ 2 - 6 ^ 2 - 4 * 9 - 3)

//number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 + 30 - 1 + 2)


// number = number + (5 ^ 2 - 3 ^ 3 + 6 ^ 2 - 4 * 9 - 3 - 9 * -4 - 8)

// number = number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8) / 2

//   number = number - (5 ^ -4 * 9 - 3 - 9 * -4 - 8)

//  number = number + (5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14) / 2


//  number = number + (5 ^ -4 * 9 - 3 - 9 * -4 - 8 * 8 + 16 + 106 + 14)