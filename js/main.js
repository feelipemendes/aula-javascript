/* STRINGS 
Var nome = "Luiz Felipe";
var n1 = 10;
var n2 = 17;

var frase = "Flamengo melhor time do Brasil";

console.log("Bem-vindo " + nome);
console.log(n1 + n2);
console.log(frase.replace("Brasil","Mundo").toUpperCase());
*/

/* LISTAS
var lista = ["segunda","terça","quarta"]

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

*/

/*Dicionario
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*LISTA DE DICIONARIOS
var frutas = [{nome: "banana", cor: "amarela"}, {nome: "maça", cor:"vermelha"}]
console.log(frutas);
*/

/* CONDICIONAIS 

var idade = prompt("Qual sua idade?");

if(idade > 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

/* LAÇOS DE REPETIÇÃO 
var count =2;

while(count <= 5){
    console.log(count);
    count++;
}

for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
var d = new Date();

console.log(d.getMonth());
*/

/* FUNCTIONS */
var idade = prompt("Qual a sua idade? ");

function validarIdade(idade){
    if(idade >=18)
        return true;
    else 
        return false;
}

alert(validarIdade(idade));


function clique(){
    window.open("https://www.google.com");
}