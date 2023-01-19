let $opcoes = $("header ul li");
let $opcaoSelecionda = $("#ola");

let conteudo = {
    ola: `<section>\
    <img src="imgs/Eloy.jpg" alt="sou eu ai" id="minha-foto">\
    <h3>Me contate:</h3>\
    <div id="contatos">\
        <a href="https://github.com/El0y-C0SM0"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></a>\
        <a href="mailto:eloymaciel06@gmail.com"><img src="imgs/gmail.wine.svg" alt="meu email"></a>\
        <a href="https://www.instagram.com/el0y_c0sm0/"><img src="imgs/instagram.svg" alt="meu instagram"></a>\
    </div>\
</section>\
<section>\
    <h1>Bão?!</h1>\
    <p>Prazer, me chamo Eloy, sou aluno do segundo ano do curso integrado (médio e técnico) do CEFET-MG. Sou alguém fascinado por tecnologia e computação desde novo, sempre tendo disposição para aprender mais sobre, acho simplesmente incrivel o que dá para fazer com a tecnologia.</p>\
    <h1>Por que quero participar?</h1>\
    <p>Gostária de participar para aprender mais sobre programação na prática, além de adquirir experiencia com projetos em grupo e me tornar um profissional mais completo. Para isso me dedicarei no trabalho, irei estudar para realizar para ter um bom entendimento dos códigos e ser capaz de contribuir da melhor maneira.</p>\
</section>`,
    formacao: `<p><strong>Cursando:</strong> 2° ano do curso integrado de informática no CEFET-MG</p>\
    <p><strong>Tenho Experiencia Com:</strong></p>\
    <ul>\
        <li>Linguagem C. Cheguei até a terceira fase da Olimpiada Brasileira de informática (OBI) usando essa linguagem, além de também ter alguns projetos utilizando C, caso deseje ve-los pode acessar a seção <strong>Projetos</strong></li>\
        <li>HTML e CSS. Além de ter terminado um ano inteiro de curso dedicado a HTML e CSS com total, participei do desenvolvimento de dois sites que também podem ser acessados em <strong>Projetos</strong>, também fiz esse site.</li>\
        <li>Javascript. Também tive aulas sobre o tema durante o primeiro ano além de ter usado em inumeros exercios e em trabalhos.</li>\
        <li>Git e Github, uso para projetos e organizar exercios que realizo.</li>\
    </ul>\
    <p><strong>Tenho Noção ou estou estudando:</strong></p>\
    <ul>\
        <li>Phython, já fiz exercios, resolvi problemas e usei para otimizar alguns processos em eventuais atividades que já realizei. Também tenho familiaridade com Jupyter e Django. Recentemente fiz um bot para o discord usando a linguagem e também fiz uma pagina para ele, para ver vá na aba <strong>Projetos</strong></li>\
        <li>Markdown, já usei em varias ocasiões para documentar projetos e fazer anotações</li>\
        <li>Estou estudando programação orientada a objetos</li>\
    </ul>`,
    projetos: `<h1>Projetos em que trabalhei</h1>\
        <dl>\
            <dt><a href="https://el0y-c0sm0.github.io/Casa-do-Hobbit/"><strong>Casa do Hobbit</strong></a></dt>\
            <dd>Meu primeiro trabalho prático. É uma apresentação as regras e detalhes do sistema de rpg D&D (Dungeons and Dragons). Esse guia apresenta as principais regras para começar a jogar</dd>\
            <dt><a href="https://edu15076.github.io/xadrez/"><strong>Chess</strong></a></dt>\
            <dd>Um site para jogar xadrez, contra uma engine ou contra outro player presencialmente. O site conta com um sistema de login no navegador que contabiliza pontos e salva configurações.</dd>\
            <dt><a href="https://github.com/El0y-C0SM0/RPG-Tools"><strong>RPG Tools</strong></a></dt>\
            <dd>Uma série de aplicações para console, feitas em C, para auxiliar jogadores de rpg, idependente de qual. São três programas que podem ser acessados a partir de um programa que gerencia a aplicação. São esses programas um sistema para rolar dados, uma calculadora básica e um sistema de registro para armas.</dd>\
            <dt><a href="https://el0y-c0sm0.github.io/rpg-tools-dice-bot/site/"><strong>RPG Tools - Dice Bot</strong></a></dt>\
            <dd>Um bot do discord para rolar dados e ajudar nos jogos de RPG.</dd>\
            <dt><a href="https://marketplace.visualstudio.com/items?itemName=el0yc0sm0.comos-owl"><strong>Cosmos Owl</strong></a></dt>\
            <dd>Uma extensão de tema de cor para o vs code inspirada na extensão Omni Owl.</dd>\
        </dl>`
}

$opcoes.click(e => {
    $opcaoSelecionda = $(e.currentTarget);
    $opcoes.removeClass('selecionado');
    $opcaoSelecionda.addClass('selecionado');

    let escolha = $opcaoSelecionda.html();

    $('#menu h2').html(escolha);
    $('main').removeClass();
    $('nav').removeClass();
    $('.seta').removeClass('cima');

    if(escolha === 'Olá') {
        $('main').html(conteudo.ola);
        $('main').addClass('ola'); 
    } else if(escolha === 'Formação') {
        $('main').html(conteudo.formacao);
        $('main').addClass('formacao');
    } else if(escolha === 'Projetos') {
        $('main').html(conteudo.projetos);
        $('main').addClass('projetos');
    }
})

let $botao = $('.seta');

$botao.click(() => {
    $('nav').toggleClass('expandida');
    $('.seta').toggleClass('cima')
})