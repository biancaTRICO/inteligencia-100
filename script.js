const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O empreendedorismo é a competência de criar um negócio do zero e gerenciar essa empresa de forma a gerar retorno positivo (valor).",
        alternativas: [
            {
                texto: "Muito arriscado",
                afirmacao: "No início ficou com medo de que não de certo. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Grande oportunidade"
            }
        ]
    },
    {
        enunciado: " Somente em 2020, mais de 2 milhões e 600 mil microempreendedores individuais (MEI) abriram suas empresas no país, o maior número absoluto da história.Ao todo, são mais de 11 milhões de brasileiros ativos na modalidade, segundo dados do Sebrae.O que leva alguém a ter o próprio negócio?",
        alternativas: [
            {
                texto: "Falta de trabalho e a vontade de aumentar a renda.",
                afirmacao: "È muito dificil achar um bom trabalho."
            },
            {
                texto: "Mais liberdade e autonomia.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como o empreendedorismo impacta o mercado de trabalho. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que o empreendedorismo pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que podem perder tudo tentanto ter seu próprio negócio.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma ideia de empreendimento. E agora?",
        alternativas: [
            {
                texto: "Pesquisar o que está em alta,e pensar em maneiras de suprir nescessidades da comunidade.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Procurar habilidades que possam se tornar fontes de renda.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Até que a empresa se estabeleça, o mais comum é que o dono e seus sócios trabalhem por mais tempo do que trabalhariam se estivessem em um emprego tradicional.Isso porque eles vão precisar estruturar toda a empresa, lidando com questões complexas e, por vezes, executando tarefas operacionais enquanto não dispõem de uma equipe maior.Acha que o sacrifício vale a pena? ",
        alternativas: [
            {
                texto: "Com certeza",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Não,é muito trabalhoso",
                afirmacao: "O povo brasileiro é conhecido por ser muito criativo, uma qualidade interessante para o empreendedor,para completar, no nosso país há muitos produtos ou serviços de baixa qualidade, ou então, nichos que ainda não foram explorados.Isso significa que oportunidade é o que não falta para inserir uma empresa no mercado.quando você colocar o sonho em prática, lembre-se da época em que foi funcionário e ofereça aos seus empregados um bom ambiente de trabalho e remuneração compatível com as competências e responsabilidades de cada um."
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



mostraPergunta();