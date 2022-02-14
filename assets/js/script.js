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
function calcula_media_ponderada(n1,p1,n2,p2){
    n1 = parseInt(n1);
    p1 = parseInt(p1);
    n2 = parseInt(n2);
    p2 = parseInt(p2);
    let mdp = (n1*p1 + n2*p2)/(p1+p2);
    return mdp.toFixed(1);
}

// At3 - At4
function calcula_media_ponderada_2(n1,p1,n2,p2){
    n1 = parseFloat(n1);
    p1 = parseInt(p1);
    n2 = parseFloat(n2);
    p2 = parseInt(p2);
    let mdp = (calcula_produto(n1,p1) + calcula_produto(n2,p2))/(p1+p2);
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



        // Atividade 2, 3 e 4.   
let peso1;
let peso2;
const get_p1 = () =>{ peso1 = prompt("Digite o peso da 1ª prova:");}
const get_p2 = () =>{ peso2 = prompt("Digite o peso da 2ª prova:");}

function q2_1(){
    let at2_1 = document.querySelector(".at2_answer_1");
    let matricula_1 = document.querySelector("#at2_matricula_1");
    matricula_1 = matricula_1.value;
    let n1_1 = document.querySelector("#at2_nota1_1");
    n1_1 = n1_1.value;
    let n2_1 = document.querySelector("#at2_nota2_1");
    n2_1 = n2_1.value;

    media_p1 = calcula_media_ponderada_2(n1_1,peso1,n2_1,peso2);
    at2_1.innerHTML = `<hr>1º Aluno<br>Matricula do aluno: ${matricula_1} <br> Média Ponderada: <strong>${media_p1}</strong>`
 
}
function q2_2(){
    let at2_2 = document.querySelector(".at2_answer_2");
    let matricula_2 = document.querySelector("#at2_matricula_2");
    matricula_2 = matricula_2.value;
    let n1_2 = document.querySelector("#at2_nota1_2");
    n1_2 = n1_2.value;
    let n2_2 = document.querySelector("#at2_nota2_2");
    n2_2 = n2_2.value;

    media_p2 = calcula_media_ponderada_2(n1_2,peso1,n2_2,peso2);
    at2_2.innerHTML = `<hr>2º Aluno<br>Matricula do aluno: ${matricula_2} <br> Média Ponderada: <strong>${media_p2}</strong>`
 
}

function esconder_botao_1(){
    let matricula_1 = document.querySelector(".matricula_1");
    let calc_1 = document.querySelector("#calc_1");
    let busc_1 = document.querySelector("#busc_1");
    let aluno_1 = document.querySelector(".aluno_data_1");
    aluno_1.removeAttribute("hidden");
    calc_1.removeAttribute("hidden");
    busc_1.setAttribute("hidden","True");
    matricula_1.setAttribute("hidden", "True");
}

function mostrar_botao_1(){
    let matricula_2 = document.querySelector(".matricula_2");
    let aluno_1 = document.querySelector(".aluno_data_1");
    let calc_1 = document.querySelector("#calc_1");
    let busc_2 = document.querySelector("#busc_2");

    aluno_1.setAttribute("hidden", "True");
    calc_1.setAttribute("hidden", "True")
    matricula_2.removeAttribute("hidden")
    busc_2.removeAttribute("hidden")

}
function esconder_botao_2(){
    let matricula_2 = document.querySelector(".matricula_2");
    let calc_2 = document.querySelector("#calc_2");
    let busc_2 = document.querySelector("#busc_2");
    let aluno_2 = document.querySelector(".aluno_data_2");

    aluno_2.removeAttribute("hidden");
    calc_2.removeAttribute("hidden");
    busc_2.setAttribute("hidden","True");
    matricula_2.setAttribute("hidden", "True");
}

function mostrar_botao_2(){
    let matricula_1 = document.querySelector(".matricula_1");
    let aluno_2 = document.querySelector(".aluno_data_2");
    let busc_1 = document.querySelector("#busc_1");
    let calc_2 = document.querySelector("#calc_2");

    aluno_2.setAttribute("hidden", "True");
    matricula_1.removeAttribute("hidden")
    busc_1.removeAttribute("hidden")
    calc_2.setAttribute("hidden","True")
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

    at6.innerHTML = `<hr>Valor a ser descontado: R$${desc.toFixed(2)}<br>Saldo final: R$${salario-desc}`
}