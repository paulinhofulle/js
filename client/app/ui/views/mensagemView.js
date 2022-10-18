class mensagemView extends View{
    template(){
        return model.texto ? `<p class="alert-info">${model.texto}</p>` : `<p></p>`; 
    }

}