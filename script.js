let nome;
let numero1;
let numero2;
let sub;
let soma;
let multi;

nome = prompt("Qual é o seu nome");
alert("Olá, " + nome + "! Seja bem-vindo a Calculadora ");
numero1 = Number (prompt ("Digite o primeiro número"));
numero2 =  Number(prompt("Digite o segundo número"));
soma = numero1 + numero2;
sub = numero1 - numero2;
multi = numero1 * numero2;
div = numero1 / numero2;

alert("O resultado é: \nSOMA: " + soma + "\nSUBTRAÇÂO: "  + sub + " \nMULTIPLICAÇÂO: " + multi + " \nDIVISÃO: " + div);