/* Cria o objeto Tools */
var Tools = function () {
    this.instance;
}
/* Verifica se a instância do objeto é nula, se for, cria uma, se não for, usa a já criada */
Tools.Get = function () {
    this.instance = this.instance == null ? new Tools() : this.instance;
    return this.instance;
}
/* Cria uma caixa de diálogo */
Tools.prototype.Modal = function (element) {
    document.querySelector(element.target).querySelector('.modal-dialog').className = "modal-dialog";
    if (element.classModal)
        document.querySelector(element.target).querySelector('.modal-dialog').classList.add(element.classModal);
        document.querySelector(element.target).querySelector('.modal-title').innerHTML = element.titulo;
        document.querySelector(element.target).querySelector('.modal-body').innerHTML = element.conteudo;
        $(element.target).modal("show");
}
/* Para cada classe info-box, adiciona uma função de clique para a classe titulo que troca o estado dela para ativo */
Tools.prototype.InfoBox = function () {
    [].forEach.call(document.querySelectorAll('.info-box'),function(element){
        element.querySelector('.titulo').addEventListener('click',function(e){
            element.classList.toggle('active');
        })
    })
}
// Rola a tela para o topo
Tools.prototype.ScrollTop = function () {
    window.scrollTo(0,0);
}