// 1. Mapeamento dos elementos do HTML para o JavaScript
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// 2. Lista de objetos contendo as perguntas e respostas adaptadas ao tema
const perguntas = [
    {
        enunciado: "Em uma aula de Técnicas Computacionais, a professora apresenta como o algoritmo de um chat de Inteligência Artificial processa dados para responder perguntas. Qual é a sua primeira impressão?",
        alternativas: [
            {
                texto: "Acho fascinante ver como a lógica de programação e a matemática conseguem simular o aprendizado.",
                afirmacao: "Você percebeu o potencial das técnicas computacionais como ferramenta de inovação e aprendizado."
            },
            {
                texto: "Fico preocupado sobre como esses modelos são treinados e a origem dos dados usados.",
                afirmacao: "Sua reflexão inicial priorizou a ética e a transparência no uso dos dados pela IA."
            }
        ]
    },
    {
        enunciado: "O desafio prático do dia é usar a Inteligência Artificial para ajudar a resolver um problema de lógica no código da escola. Como você decide utilizar essa ferramenta?",
        alternativas: [
            {
                texto: "Uso a IA para entender os erros de lógica e pedir explicações passo a passo sobre o código.",
                afirmacao: "Aprendeu a utilizar a IA como um tutor interativo para aprofundar seu conhecimento técnico."
            },
            {
                texto: "Tento resolver o problema manualmente e uso a IA apenas para validar a solução final.",
                afirmacao: "Preferiu fortalecer seu raciocínio lógico independente antes de recorrer à automação."
            }
        ]
    },
    {
        enunciado: "Ao final do projeto, a turma debate os impactos das Técnicas Computacionais e da IA na rotina escolar do futuro. Qual posicionamento você defende?",
        alternativas: [
            {
                texto: "A IA deve ser integrada aos métodos de ensino para personalizar os estudos de cada estudante.",
                afirmacao: "Defendeu o uso transformador e personalizado da tecnologia na rotina pedagógica."
            },
            {
                texto: "O uso da IA nas escolas deve ser moderado para não prejudicar o pensamento crítico autônomo.",
                afirmacao: "Lutou pela preservação do pensamento autônomo e pelo uso consciente do conhecimento computacional."
            }
        ]
    }
]; // <--- CORREÇÃO: Colchete e ponto-e-vírgula que faltavam para fechar a array

// 3. Variáveis de controle do estado do jogo
let posicaoAtual = 0;
let perguntaAtual;
let historiaFinal = "";

// 4. Função para exibir a pergunta atual na tela
function mostraPergunta() {
    if (posicaoAtual >= perguntas.length) {
        exibeResultado();
        return;
    }
    perguntaAtual = perguntas[posicaoAtual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// 5. Função para criar e desenhar os botões das escolhas
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        // Adiciona evento de clique a cada botão
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// 6. Função para processar a escolha feita pelo usuário
function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    posicaoAtual++;
    mostraPergunta();
}

// 7. Função de conclusão (Condição de parada)
function exibeResultado() {
    caixaPerguntas.textContent = "Fim da sua jornada!";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = historiaFinal;
}

// Inicia a primeira pergunta quando a página carrega
mostraPergunta();
