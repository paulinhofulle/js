class negociacoes{

    constructor(contexto, armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
        Object.freeze(this);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);

    }

    paraArray(){
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        let total = 0;
//        for(let i = 0; i < this._negociacoes.length; i++){
//            total += this._negociacoes[i].volume;
//        }
//        return total;
        return this._negociacoes.reduce(function(total, negociacao){
            return total + negociacao.volume;
        }, 0);
    }

    esvazia(){
        this._negociacoes.length = 0;
        this._armadilha(this);
    }
}