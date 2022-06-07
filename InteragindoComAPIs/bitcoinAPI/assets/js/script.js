// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin e em reais, atualize este valor a cada 1 hora
const brl = document.getElementById('brl');
const usd = document.getElementById('usd');
const eur = document.getElementById('eur');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        brl.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
        usd.innerText = ('$ ' + btcJson.USD.buy).replace('.', ',');
        eur.innerText = ('€ ' + btcJson.EUR.buy).replace('.', ',');
    })
    //primeiro then recebe a resposta e o segundo o que fazer com a resposta
}

// setInterval(() =>{
//     fetchBtc();
// }, 1000*60*60);

fetchBtc();