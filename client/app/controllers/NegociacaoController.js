class NegociacaoController{

constructor(){
    let $ = document.querySelector.bind(document); 

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
}    

adiciona(evento){
    event.preventDefault();

    console.log(typeof this._inputData.value.split('-'));
    let data = new Date(...this._inputData.value.split('-')
        .map((item, indice) => {
            return item - (indice % 2);
            if(indice == 1){
                return item - 1;
            }
            return item;
        })
    );
    console.log(data);
    let negociacao = new negociacao(data, this._inputQuantidade, this._inputValor);
    

    console.log('controller funcionando');

    

    console.log(this._inputData.value);
    console.log(parseInt(this._inputQuantidade.value));
    console.log(parseFloat(this._inputValor.value));

    console.log(typeof (inputQuantidade.value));

}

}