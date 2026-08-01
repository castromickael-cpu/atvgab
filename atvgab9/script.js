function validarCampo() {
let nome = document.getElementById("nome").value.trim();
let mensagem = "";

if (nome === "") {
    mensagem = " ce não tem nome doido?";}
    
    else if (nome.length <=3) {
    mensagem = "pobre ta economizando até letra";}
    
    else{mensagem = " nome feio";}
 

    

   document.getElementById("mensagem").innerText = mensagem;}


