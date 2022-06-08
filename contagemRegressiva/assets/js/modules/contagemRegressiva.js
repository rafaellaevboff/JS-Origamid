export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate(){
        return new Date();
    }
    get _futureDate(){
        return new Date(this.futureDate);
    }
    get _timeStampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime();
    }//getTime pega desde 1970
    get dias(){
        return Math.floor(this._timeStampDiff / (24*60*60*1000)); //24h o dia, cada hora 60min, cada min 60s, cada segundo 1000ms
    }
    get horas(){
        return Math.floor(this._timeStampDiff / (60*60*1000)); //24h o dia, cada hora 60min, cada min 60s, cada segundo 1000ms
    }
    get minutos(){
        return Math.floor(this._timeStampDiff / (60*1000)); //24h o dia, cada hora 60min, cada min 60s, cada segundo 1000ms
    }
    get segundos(){
        return Math.floor(this._timeStampDiff / 1000); //24h o dia, cada hora 60min, cada min 60s, cada segundo 1000ms
    }
    get total(){
        const days = this.dias;
        const hours = this.horas % 24;
        const minutes = this.minutos % 60;
        const seconds = this.segundos % 60;

        return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`
    }
}

