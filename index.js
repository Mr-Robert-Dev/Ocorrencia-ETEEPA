const imagens = [
    './imagens/camila.webp',
    './imagens/emmily.webp',
    './imagens/selete.jpg',
    './imagens/Alexandre.webp',
    './imagens/erica.webp',

]
const text =[
    "Camila Cristina Silva Cunha",
    "Emmily Oliveira Barbosa",
    "Salete da costa Oliveira",
    "Alexandre Reis Fernandes",
    "Erica dos Santos Lima"
]
const sub = [
    "Nasci no dia 30/12/2004, e também sou estudante do curso de Informática na EETEPA - Cacau, luto Karatê e amo ler fantasia!",
    "Nasci em 04/12/2004, sou estudande do curso de Informática na EETEPA - Cacau, gosto de escrever e programar!",
    "Nasci em 01/08/2003 Aspirante a escritora e gosto de romance",
    "Nosso Orientador e Professor da ETEEPA CACAU",
    "Nasci em 08/05/2003, sou estudante do curso de Informática na EETEPA - Cacau, amo animes!"
]
let contadorImagem = 0;
let contadorText = 0;
let contadorsub = 0;


function trocar() {
    const imagemAtual = document.getElementById('imagem');
    const textAtual = document.getElementById('membros-title');
    const subAtual = document.getElementById('membros-sub-title');



    // Avança para a próxima imagem ou volta para a primeira
    contadorImagem = (contadorImagem + 1) % imagens.length;
    contadorText = (contadorText+1) % text.length;
    contadorsub = (contadorsub+1) % sub.length;


    // Atualiza o src da imagem com o URL correspondente
    imagemAtual.src = imagens[contadorImagem];
    textAtual.textContent = text[contadorText]
    subAtual.textContent = sub[contadorsub]
}
