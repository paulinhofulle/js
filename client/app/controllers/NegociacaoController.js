class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document); 

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Bind(
            new negociacoes(), new negociacoesView('#negociacoes'), 'adiciona', 'esvazia'
        );
        this._mensagem = new Bind(new Mensagem(), new mensagemView('#mensagemView'), ['texto']);
    }    

    adiciona(evento){
        event.preventDefault();
        let diaMesAno = DateConverter.paraTexto(data);

        this._negociacoes.adiciona(this._criaNegociacao);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';

        this._mensagemView.update(this._mensagem);  

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

    apaga(){
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso.';
        this._mensagemView.update(this._mensagem);
    }

}