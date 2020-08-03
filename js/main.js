



// TRABALHANDO COM FUNÇÃO \\
function botao() {
    document.getElementById("agradece").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar")
}

function redireciona() {
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui.";
}
/*
function soma(a , b) {
    return a + b;
}

var validar;
function validaIdade(idade) {
    
    if (idade >= 18) {
        validar = true
    }else{
        validar = false
    }
    return validar;
}
//function setReplace(frase , nome , novo_nome) {
//    return frase.replace(nome, novo_nome)
//}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

alert(soma(5 , 10 ));
//alert(setReplace("Vai Japão!" , "Japão" , "Corinthians"));
*/
/*
//TRABALHANDO COM DATAS 
var dia = new Date; //VARIÁVEL DIA RECEBE A FUNÇÃO DATA DO JS
//alert(dia); //MOSTRA A DATA COMPLETA 
alert(dia.getMonth() + 1); //MOSTRA O MÊS PORÉM TEM QUE ADD +1 POIS ELE INICIA DO 0
alert(dia.getDay());
alert(dia.getHours());
*/

/*
//ESTRUTURA DE REPETIÇÃO FOR
var count;
for (count = 0; count <= 5; count++) {
    alert(count);    
}
*/

/*
//ESTRUTURA DE REPETIÇÃO WHILE
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count); 
    count++; // ou count = count + 1; é a mesma coisa.
}
*/

 /*
 var idade = prompt(" Qual a sua idade? ")
 //var idade = 18;
 if (idade >= 18) {
    alert("Maior de idade.")     
 }else {
    alert("Menor de idade.") 
 }
 */
 /*
 //CRIAÇÃO DE UMA LISTA DE DICIONÁRIOS EM JS
 var frutas = [{nome:"maçã" , cor:"vermelha" }, {nome:"uva" , cor:"roxa" } ]
 //MOSTRAR NO CONSOLE OS ELEMENTOS DO DICIONÁRIO
 console.log(frutas);
 //MOSTRAR NO ALERT ELEMENTO ESPECÍFICO DO DICIONÁRIO (NESSE CASO O NOME DA FRUTA QUE ESTA NO INDEX 1)
 alert(frutas[1].nome);
 */

/*
 //CRIAÇÃO DE UM DICIONÁRIO EM JS
 var fruta = {nome:"maçã" , cor:"vermelha" }
 //MOSTRAR NO CONSOLE ELEMENTO ESPECÍFICO DO DICIONÁRIO(NESSE CASO NOME DA FRUTA)
 console.log(fruta.nome);
 //MOSTRAR NO ALERT ELEMENTO ESPECÍFICO DO DICIONÁRIO (NESSE CASO A COR)
 alert(fruta.cor);
 */

// CRIAÇÃO DE UMA LISTA(ARRAY)
//var lista = ["maçã","banana","pera"];
//INCLUIR ELEMENTO EM UMA LISTA
//lista.push("uva");
//EXCLUIR ULTIMO ELENTO DA LISTA CRIADA
//lista.pop();
//MOSTRAR A LISTA COMO STRING
//console.log(lista.toString());
//MOSTRA A LISTA CONFORME VOCÊ DESEJAR
//console.log(lista.join(" - "))
//MOSTRAR ELEMENTOS EM ORDEM CONTRÁRIA
//console.log(lista.reverse());
//VER QUANTIDADES DE ELEMENTOS DA LISTA
//console.log(lista.length);
//console.log(lista);




//var nome = "Junior Souza";
//var idade = 19;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);