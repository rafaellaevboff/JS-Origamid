    //mudar a cor da fonte
    const fonte = document.querySelector('#corFonte');
    function mudarCorFonte(event){
        const corLetra = event.target.value;
        document.body.style.color = corLetra;
    }
    fonte.addEventListener('change', mudarCorFonte);

    //mudar a cor de fundo
    const cor = document.querySelector('#backgroundColor');
    function mudarFundo(event){
        const corFundo = event.target.value;
        document.body.style.backgroundColor = corFundo;
    }
    cor.addEventListener('change', mudarFundo);

//cronometro
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
const tempo = document.querySelector('#tempo');
let t = 0;
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
        tempo.innerText = t++;
    }, 1000);
    iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function zerarTempo(){
    pausarTempo();
    tempo.innerText = 0;
    t = 0;
}

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
zerar.addEventListener('click', zerarTempo);