//Funções base:
// At1
function calcula_media(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return (n1+n2)/2;
}

function calcula_produto(n1,n2){
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    prod = n1 * n2;
    return prod;
}
// At2
// function calcula_media_ponderada(n1,p1,n2,p2){
//     n1 = parseInt(n1);
//     p1 = parseInt(p1);
//     n2 = parseInt(n2);
//     p2 = parseInt(p2);
//     let mdp = (n1*p1 + n2*p2)/(p1+p2);
//     return mdp.toFixed(1);
// }

// At3 - At4
function calcula_media_ponderada_2(n1,p1,n2,p2){
    n1 = parseFloat(n1);
    p1 = parseInt(p1);
    n2 = parseFloat(n2);
    p2 = parseInt(p2);
    let mdp = (calcula_produto(n1,p1) + calcula_produto(n2,p2))/(p1+p2);
    alert(mdp)
    return mdp.toFixed(2);
}
// At5
function valor_a_pagar(valorBruto){
    valorBruto = parseFloat(valorBruto)
    valorFinal = valorBruto + (valorBruto*.1);
    return valorFinal;
}
// At6
function salario_liquido(sb){
    sb = parseInt(sb)
    function inss(x){return x*.1};
    let Inss = inss(sb);
    let fgts = (x) => {return x*.08};
    let Fgts = fgts(sb);
    let planSaude = 100;
    let desconto = Inss + Fgts + planSaude;
    return desconto
}



// Funções botões:

        //Atividade1
function q1(){
    let at1 = document.querySelector(".at1_answer");
    let at1_n1 = document.querySelector("#at1_nota1");
    at1_n1 = at1_n1.value;
    let at1_n2 = document.querySelector("#at1_nota2");
    at1_n2 = at1_n2.value

    let media = calcula_media(at1_n1,at1_n2);
    let produto = calcula_produto(at1_n1,at1_n2);

    at1.innerHTML = `<hr><strong>Média: ${media} <br>Produto: ${produto}`;
}



        // Atividade 2    
let peso1;
let peso2;
const get_p1 = () =>{ peso1 = prompt("Digite o peso da 1ª prova:");}
const get_p2 = () =>{ peso2 = prompt("Digite o peso da 2ª prova:");}

function q2(){
    let at2 = document.querySelector(".at2_answer");
    let matricula = document.querySelector("#at2_matricula");
    matricula = matricula.value;
    let n1 = document.querySelector("#at2_nota1");
    n1 = n1.value;
    let n2 = document.querySelector("#at2_nota2");
    n2 = n2.value;

    media_p = calcula_media_ponderada_2(n1,peso1,n2,peso2);

    at2.innerHTML = `<hr>Média ponderada do aluno: ${matricula} <br> <strong>${media_p}</strong>`


    
}


function q5(){
    let at5 = document.querySelector(".at5_answer")
    let valor = document.querySelector("#valor_gasto");
    valor = valor.value;
    vp = valor_a_pagar(valor);

    at5.innerHTML = `<hr><strong>O valor total a ser pago será: R$ ${vp.toFixed(2)}`;
}

function q6(){
    let at6 = document.querySelector(".at6_enswer");
    let salario = document.querySelector("#salario");
    salario = salario.value;
    desc = salario_liquido(salario)

    at6.innerHTML = `<hr>Valor a ser descontado:R$:${desc}.<br>Saldo final: R$${salario-desc}`
}