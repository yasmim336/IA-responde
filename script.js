const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Para começar, você vai preparar a massa do bolo. Qual ingrediente você adiciona primeiro?",
        alternativas: [
            {
                texto: "Açúcar e ovos.",
                afirmacao: "Você misturou o açúcar e os ovos até obter uma mistura clara e fofa, o que garante a leveza do bolo. "
            },
            {
                texto: "Leite e óleo.",
                afirmacao: "Você começou com os líquidos, o que pode deixar a massa pesada e difícil de misturar. Lembre-se de seguir a ordem da receita. "
            }
        ]
    },
    {
        enunciado: "Agora que a base líquida está pronta, o que você faz em seguida para preparar a massa?",
        alternativas: [
            {
                texto: "Adiciona os ingredientes secos (farinha e cacau) e o fermento peneirados.",
                afirmacao: "Você peneirou os ingredientes secos, evitando grumos e garantindo uma massa mais lisa. "
            },
            {
                texto: "Mistura tudo de uma vez sem peneirar.",
                afirmacao: "Você misturou todos os ingredientes de uma vez, mas a massa ficou com alguns grumos. É importante peneirar para um bolo mais macio. "
            }
        ]
    },
    {
        enunciado: "A massa está no forno. Enquanto assa, você vai preparar a cobertura de ganache. Qual é o primeiro passo?",
        alternativas: [
            {
                texto: "Derreter o chocolate no micro-ondas.",
                afirmacao: "Você derreteu o chocolate de forma rápida. Lembre-se de mexer a cada 30 segundos para não queimar! "
            },
            {
                texto: "Aquecer o creme de leite no fogo.",
                afirmacao: "Você aqueceu o creme de leite até ferver, o que pode separá-lo. O ideal é aquecê-lo apenas até o ponto de fervura. "
            }
        ]
    },
    {
        enunciado: "O bolo assou e a ganache está pronta. O que você faz antes de cobrir o bolo?",
        alternativas: [
            {
                texto: "Cobre o bolo ainda quente com a ganache.",
                afirmacao: "Você cobriu o bolo ainda quente. A ganache derreteu e escorreu, mas o sabor continua delicioso! "
            },
            {
                texto: "Espera o bolo esfriar completamente.",
                afirmacao: "Você teve paciência e esperou o bolo esfriar. A ganache ficou perfeita, com a textura ideal e um acabamento liso e brilhante! "
            }
        ]
    },
    {
        enunciado: "Seu bolo de chocolate está pronto! Como você o serve?",
        alternativas: [
            {
                texto: "Adiciona raspas de chocolate e morangos por cima.",
                afirmacao: "Seu bolo está lindo e ainda mais saboroso com as raspas de chocolate e os morangos. Um toque de chef! "
            },
            {
                texto: "Serve o bolo puro, com a cobertura de ganache.",
                afirmacao: "Você optou pela simplicidade e a elegância. Um bolo clássico de chocolate, perfeito para qualquer ocasião. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu bolo está pronto!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();