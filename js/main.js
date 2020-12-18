/*
var nome = "Lucas Henrique"
alert(nome.replace('Henrique', 'Vieira'));  Trocar o item 1 pelo 2
alert(nome.toLowerCase());  caixa baixa
alert(nome.toUpperCase());  CAIXA ALTA */


/*      LISTA
var lista = ["um", "dois" , "tres", "quatro", "cinco"] 
console.log(lista[0]);    Selecionar um item                                   
lista.push("seis");    Adicionar ao final
lista.pop();    Remover do final
lista.reverse();    Reverter a ordem
console.log(lista.length);    Contar
console.log(lista.toString());    Transforma em string
console.log(lista.join(" - "));    Transforma em string, mas podendo selecionar oque ha entre os elementos */


/*   DICIONARIO
var dicionario = {one:"um", two:"dois", three:"tres", four:"quatro", five:"cinco"}
console.log(dicionario.one);    Pesquisar */


/*   LISTA DE DICIONARIOS 
var lisdicio = [{one:"um", two:"dois", three:"tres"}, {four:"quatro", five:"cinco"}]
console.log(lisdicio[1].five);    Pesquisar */


/*   IF   ELSE
var pontos = prompt("Quantos pontos possui?");
if(pontos >= 100){
    alert("voce possui pontos suficientes");
}else{
    alert("nao possui pontos suficientes");
} */


/*      WHILE
var count = 0
while(count <= 100){
    console.log(count);
    count ++;
} */


/*      FOR
var count;
for(count = 0; count <= 100; count ++){
    console.log(count);
} */


/*         DATA
data = new Date();
console.log(data);
console.log(data.getMonth() + 1);   MES(+ 1 PQ COMECA DO 0)
console.log(data.getMinutes());     MINUTOS
console.log(data.getDay())          DIAS
console.log(data.getHours())        HORAS  */


/*
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(15, 16)) */


function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://www.youtube.com/")
}

function newpage(){
    //window.open("https://www.youtube.com/")   cria uma nova aba
    //window.location.href = "https://www.youtube.com/"   abre na msm aba
}

function trocar(elemento){
    //document.getElementById("passarmouse").innerHTML = "passou o mouse!"
    elemento.innerHTML = "passou o mouse"
}

function voltar(elemento){
    //document.getElementById("passarmouse").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse"
}

function reload(){
    console.log("Pagina Carregada!")
}

function onechange(elemento){
    console.log(elemento.value)
}