function gerarContagem(){
let limiteDigitado= document.getElementaryById("limite").value;
let mensagem = document.getElementaryById("mensagem");
let resultado = document.getElementaryById("resultado");

resultado.innerText="";

if (limiteDigitado === ""){
mensagem.innerText = "Digite o numero final da contagem";
mensagem.style.color = "#b3261e";
return;}
let limite= Number (limiteDigitado);
if (limite<1 || limite > 100) {
mensagem.innerText = "digite um numero entre 1 e 100."
mensagem.style.color= "#b3261e"; return;
}
let contagem ="";
for (let numero= 1; numero <= limite; numero++){
contagem+= " - ";}

}


