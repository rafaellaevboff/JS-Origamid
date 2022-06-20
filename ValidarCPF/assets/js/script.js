import validarCpfs from "./modules/validarCpf.js";

const cpf = document.querySelector('#cpf');
const validaCpfs = new validarCpfs(cpf).iniciar();

//pode ser usado pra interagir direto ou usar separado:
// const validadorCpf  = new validarCpfs();
// console.log(validadorCpf.validar('111 222 333 44'));
// console.log(validadorCpf.formatar('111 999 777 44'));


// console.log(validaCpfs);
// console.log(validaCpfs.limpar('111.222.333-44'));
// console.log(validaCpfs.construir('11122233344'));
//console.log(validaCpfs.formatar('158  58 6654 78'));//retorna: 158.586.654-78

console.log(validaCpfs);