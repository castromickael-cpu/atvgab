function calcularMedia() {

let nota1 = Number(document.getElementById("nota1").value);
let nota2 = Number(document.getElementById("nota2").value);

let media = (nota1 + nota2) / 2;
let situação = "";

if (media >= 7) {
    situação = "sobrou algo pra esse";}
    else if (media >= 5) {
        situação = "Sobrou o farelo ";
    }
    else {
        situação = "Sobrou nd";
    }

    document.getElementById("resultado").innerText = "conclusão: (" + media + "pts) Situação: " + situação;



}
