//Arquivo responsável por controlar o conteúdo mostrado

//objeto CIBIO criado com seus atributos e respectivos valores
var CIBIO = function(){
    this.telaAtual = 1;
    this.totalTelas = 5;       
}

/*
    Método de inicialização do conteúdo.

    Inicia a página principal com o conteúdo do primeira página de conteúdos
*/
CIBIO.prototype.init = function(){
    this.loadpage();
    var _this = this;
    document.querySelector('select').addEventListener('change', function(e){
        _this.telaAtual = e.target.options[e.target.selectedIndex].value;
        _this.loadpage();
        this.disableButton();
    });
}

/*
    Método para carregar uma página específica.

    Recebe um valor passado por parâmetro que corresponde ao número da página desejada.
    Atualiza o valor da tela atual para o valor passado e carrega a tela correspondente ao número passado.
    Verifica se precisa desativar algum botão.
*/
CIBIO.prototype.goToPage = function(value){
    this.telaAtual = value;
    this.loadpage();
    this.disableButton();
}

/*
    Método para carregar o conteúdo na tela.

    Define o valor do caminho que o iframe com id iframe vai usar para exibir o conteúdo.
    O caminho é definido de acordo com o valor da variável telaAtual.
*/
CIBIO.prototype.loadpage = function(){
    document.querySelector('#iframe').src = "html/unid"+this.telaAtual+".html";
}

/*
    Método para avançar para a próxima página.

    Verifica se a página atual é a última, se for, ele não faz nenhuma ação.
    Se não for, ele incrementa o valor da tela atual em 1 e carrega a nova tela na sequência.
    Depois executa o método disableButton() para verificar se é necessário desativar algum botão.
    Na sêquencia ele seta a opção correspondente à página no select.
*/
CIBIO.prototype.nextPage = function(){
    if(this.telaAtual === this.totalTelas) return;
    this.telaAtual++;
    this.loadpage();
    this.disableButton();
    document.querySelector('select').selectedIndex = this.telaAtual - 1;
}

/*
    Método para retornar para a página anterior.

    Verifica se a página atual é a primeira, se for, ele não faz nenhuma ação.
    Se não for, ele decrementa o valor da tela atual em 1 e carrega a nova tela na sequência.
    Depois executa o método disableButton() para verificar se é necessário desativar algum botão.
    Na sequência ele seta a opção correspondente à página no select.
*/
CIBIO.prototype.prevPage = function(){
    if(this.telaAtual === 1) return;
    this.telaAtual--;
    this.loadpage();
    this.disableButton();
    document.querySelector('select').selectedIndex = this.telaAtual - 1;
}

/*
    Método para desabilitar os botões de anterior e próximo.

    Ele verifica se a tela atual é a primeira tela, se for,
    ele altera o valor do atributo disabled para true, deixando o botão da classe prev desabilitado;
    Caso contrário, deixa ele habilitado.

    Ele faz o mesmo procedimento com o botão da classe next, porém não verifica se é a tela atual é a primeira,
    e sim se ela é a última.
*/
CIBIO.prototype.disableButton = function(){
    if(this.telaAtual === 1)
    document.querySelector('.prev').disabled = true;
    else
    document.querySelector('.prev').disabled = false;
    if(this.telaAtual === this.totalTelas)
    document.querySelector('.next').disabled = true;
    else
    document.querySelector('.next').disabled = false;
}
