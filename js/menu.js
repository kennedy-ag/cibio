class Menu {
    // Constrói um menu lateral de acordo com o conteúdo passado como parâmetro
    constructor(subtitle) {
        this.maxHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        this.subtitle = subtitle;
        this.init();
    }
    // Método de inicialização do menu.
    init() {

        // Cria a div do menu, contendo uma div interna que possui uma lista desordenada envolvendo um span
        var div = document.createElement('DIV'),
            content = document.createElement('DIV'),
            ul = document.createElement('UL'),
            span = document.createElement('SPAN');

        // Atribui menu-guide como nome de classe da divisão criada e menu-content como nome da classe do conteúdo
        div.className = "menu-guide";
        content.className = "menu-content";

        // Cria uma função para abrir o menu
        div.addEventListener('click', function () {
            this.parentElement.classList.toggle('open');
        });

        // Configura os ids de cada elemento que contém a classe key nas páginas de conteúdo
        [].forEach.call(document.querySelectorAll('.key'), function (element, idx) {
            element.id = "page-" + idx;
        });

        // Cria uma lista de hyperlinks redirecionando os hrefs para os respectivos ids configurados acima
        this.subtitle.forEach((element, idx) => {
            var li = document.createElement('LI'),
                anchor = document.createElement('A');
            anchor.innerHTML = element.texto;
            anchor.href = "#page-" + idx;
            li.appendChild(anchor);
            ul.appendChild(li);
        });

        // Cria a estrutura do menu
        div.appendChild(span);
        content.appendChild(ul);
        document.querySelector('#menu').appendChild(div);
        document.querySelector('#menu').appendChild(content);
    }

}