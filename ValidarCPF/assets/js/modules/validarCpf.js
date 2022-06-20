export default class validarCpfs{
    constructor(element){
        this.element = element;
    }

    limpar(cpf){
        return cpf.replace(/\D/g, '');
    }

    construir(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    formatar(cpf){
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf){
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);//se a pessoa digitar mais que o tamanho do cpf vai vir dois elementos dentro de um array
        //console.log(matchCpf);
        return(matchCpf && matchCpf[0] === cpf);//vai verificar se o que foi digitado primeiro(primeiro elemento do array) é valido no matchCpf, se são iguais, antes faz a verificação se o matchCpf é verdadeiro(array) ou não
    }

    validarNaMudanca(cpfElement){
        if(this.validar(cpfElement.value)){
            cpfElement.value = this.formatar(cpfElement.value); //se a pessoa digitar com caracteres diferentes na hora de separar os nums ou não colocar os caracteres o programa vai fazer por ela
            cpfElement.nextElementSibling.classList.remove('ativar');
            cpfElement.classList.remove('erro');            
            cpfElement.classList.add('valido');
        }else{
            cpfElement.classList.remove('valido');
            cpfElement.classList.add('erro');
            cpfElement.nextElementSibling.classList.add('ativar');
        };
    }
    
    adicionarEvento(){
        this.element.addEventListener('change', () => {
            //com a arow function o this é a classe, com function normal o this é o element
            this.validarNaMudanca(this.element); 
        })
    }

    adicionarErroSpan(){
        const erroElement = document.createElement('span');
        erroElement.classList.add('erro-teste');
        erroElement.innerText = 'CPF inválido';
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
        //o this é o validarCpfs
    }
    
    iniciar(){
        this.adicionarEvento();
        this.adicionarErroSpan();
        return this;
    }
}