class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document); 

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new negociacoes();
        this._negociacoesView = new this.negociacoesView("#negociacoes");
        this._negociacoesView.update(this._negociacoes);
    }    

    adiciona(evento){
        event.preventDefault();

        let converter = new DateConverter();

        console.log(typeof this._inputData.value.split('-'));
        console.log(data);

        let diaMesAno = DateConverter.paraTexto(data);

        console.log(diaMesAno);


        console.log('controller funcionando');

        this._negociacoes.adiciona(this._criaNegociacao);
        this._negociacoesView.update(this._negociacoes);

        console.log(this._negociacoes.paraArray());

        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));

        console.log(typeof (inputQuantidade.value));

        this._limparFormulario;

    }

    _limparFormulario(){
        this._inputData.value = '2020-01-01';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 3;
        this._inputData.focus();

    }

    _criaNegociacao(){
        return new negociacao(DateConverter.paraData(this._inputData.value), parseInt(this._inputQuantidade), parseInt(this._inputValor));
    }

}