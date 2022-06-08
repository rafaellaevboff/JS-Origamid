import Countdown from "./modules/contagemRegressiva.js";

//o GMT é para especificar de onde é o horário
const tempoNatal = new Countdown('24 December 2022 23:59:59 GMT-0300')
const tempoAnoNovo = new Countdown('31 December 2022 23:59:59 GMT-0300')

const natal = document.querySelector('#natal');
const anoNovo = document.querySelector('#anoNovo');

//console.log(tempoNatal._futureDate.getTime());
setInterval(() => {
    natal.innerHTML = tempoNatal.total;
    anoNovo.innerHTML = tempoAnoNovo.total;
    // console.log(tempoNatal.total);
    // console.log(tempoAnoNovo.total);
},1000)