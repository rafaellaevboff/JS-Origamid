// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima
const btnProxima = document.querySelector('#proxima');
const espacoPiada = document.querySelector('#piada');

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        espacoPiada.innerText = piada.value;
        document.body.classList.toggle('roxo')
    })
}

btnProxima.addEventListener('click', puxarPiada)
puxarPiada();