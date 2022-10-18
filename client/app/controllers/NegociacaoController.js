class NegociacaoController{

constructor(){
    let $ = document.querySelector.bind(document); 

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
}    

adiciona(evento){
    event.preventDefault();

    let converter = new DateConverter();

    console.log(typeof this._inputData.value.split('-'));
    let data = DateConverter.paraData(this._inputData.value);
    console.log(data);
    let negociacao = new negociacao(data, parseInt(this._inputQuantidade), parseInt(this._inputValor));

    let diaMesAno = DateConverter.paraTexto(data);

    console.log(diaMesAno);


    console.log('controller funcionando');

    

    console.log(this._inputData.value);
    console.log(parseInt(this._inputQuantidade.value));
    console.log(parseFloat(this._inputValor.value));

    console.log(typeof (inputQuantidade.value));

}

}