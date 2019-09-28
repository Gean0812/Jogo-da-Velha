 //BOTAO 1 , LINHA 1
 var turno = false;
 var botao1=document.getElementById("botao1");
 botao1.addEventListener("mousedown", function(event){
 if (event.which==1 && turno ==false){
    botao1.innerHTML="X";
    turno = true;
    document.getElementById("botao1").disabled=true;
 }
 else if(event.which==2 && turno == true)  {
    botao1.innerHTML="O";
    turno=false;
    document.getElementById("botao1").disabled=true;
 }
 
 CombinacoesDeVitoria();
 

});


//BOTAO 2, LINHA 1  
var botao2=document.getElementById("botao2");
 botao2.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao2.innerHTML="X";
        turno = true;
        document.getElementById("botao2").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao2.innerHTML="O";
        turno=false;
        document.getElementById("botao2").disabled=true;
     }
 
 CombinacoesDeVitoria();
 
});

//BOTAO 3 , LINHA 1
var botao3=document.getElementById("botao3");
 botao3.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao3.innerHTML="X";
        turno = true;
        document.getElementById("botao3").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao3.innerHTML="O";
        turno=false;
        document.getElementById("botao3").disabled=true;
     }
 
 CombinacoesDeVitoria();
 
});

//BOTAO 4, LINHA 2
var botao4=document.getElementById("botao4");
 botao4.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao4.innerHTML="X";
        turno = true;
        document.getElementById("botao4").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao4.innerHTML="O";
        turno=false;
        document.getElementById("botao4").disabled=true;
     }
 
 CombinacoesDeVitoria();

});

//BOTAO 5, LINHA 2
var botao5=document.getElementById("botao5");
 botao5.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao5.innerHTML="X";
        turno = true;
        document.getElementById("botao5").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao5.innerHTML="O";
        turno=false;
        document.getElementById("botao5").disabled=true;
     }
 
 CombinacoesDeVitoria();

});

//BOTAO 6, LINHA 2
var botao6=document.getElementById("botao6");
 botao6.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao6.innerHTML="X";
        turno = true;
        document.getElementById("botao6").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao6.innerHTML="O";
        turno=false;
        document.getElementById("botao6").disabled=true;
     }
 
 CombinacoesDeVitoria();

});

//BOTAO 7 , LINHA 3
var botao7=document.getElementById("botao7");
 botao7.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao7.innerHTML="X";
        turno = true;
        document.getElementById("botao7").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao7.innerHTML="O";
        turno=false;
        document.getElementById("botao7").disabled=true;
     }
 
 CombinacoesDeVitoria();
 
});

//BOTAO 8 , LINHA 3
var botao8=document.getElementById("botao8");
 botao8.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao8.innerHTML="X";
        turno = true;
        document.getElementById("botao8").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao8.innerHTML="O";
        turno=false;
        document.getElementById("botao8").disabled=true;
     }
 
 CombinacoesDeVitoria();
 
});

//BOTAO 9 , LINHA 3
var botao9=document.getElementById("botao9");
 botao9.addEventListener("mousedown", function(event){
    if (event.which==1 && turno ==false){
        botao9.innerHTML="X";
        turno = true;
        document.getElementById("botao9").disabled=true;
     }
     else if(event.which==2 && turno == true)  {
        botao9.innerHTML="O";
        turno=false;
        document.getElementById("botao9").disabled=true;
     }
 
 CombinacoesDeVitoria();
});

var resetar = document.getElementById("ata");
resetar.addEventListener("mousedown",function(event){
    botao1.innerHTML = "?";
    botao1.disabled = false;
    botao2.innerHTML = "?";
    botao2.disabled = false;
    botao3.innerHTML = "?";
    botao3.disabled = false;
    botao4.innerHTML = "?";
    botao4.disabled = false;
    botao5.innerHTML = "?";
    botao5.disabled = false;
    botao6.innerHTML = "?";
    botao6.disabled = false;
    botao7.innerHTML = "?";
    botao7.disabled = false;
    botao8.innerHTML = "?";
    botao8.disabled = false;
    botao9.innerHTML = "?";
    botao9.disabled = false;

    turno = false;

    

})



function CombinacoesDeVitoria(){
    if (botao1.innerHTML == "X" && botao2.innerHTML == "X" && botao3.innerHTML == "X"  ){
        jogoFinalizado=true;
        alert("JOGADOR 1 VENCEU!");
    } else if (botao1.innerHTML == "O" && botao2.innerHTML == "O" && botao3.innerHTML == "X"){
        alert("JOGADOR 2 VENCEU!");
    } else if (botao4.innerHTML == "X" && botao5.innerHTML== "X" && botao6.innerHTML == "X"){
        alert("JOGADOR 1 VENCEU!");
    } else if (botao4.innerHTML == "O" && botao5.innerHTML== "O" && botao6.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU");
    } else if(botao7.innerHTML == "X" && botao8.innerHTML== "X" && botao9.innerHTML == "X") {
        alert("JOGADOR 1 VENCEU");
    } else if (botao7.innerHTML == "O" && botao8.innerHTML== "O" && botao9.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU!");
    } else if (botao1.innerHTML == "X" && botao4.innerHTML== "X" && botao7.innerHTML == "X"){
        alert("Jogador 1 VENCEU!");
    } else if(botao1.innerHTML == "O" && botao4.innerHTML== "O" && botao7.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU");
    } else if (botao2.innerHTML == "X" && botao5.innerHTML== "X" && botao8.innerHTML == "X"){
        alert("JOGADOR 1 VENCEU!");
    } else if (botao2.innerHTML == "O" && botao5.innerHTML== "O" && botao8.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU!");
    } else if (botao3.innerHTML == "X" && botao6.innerHTML== "X" && botao9.innerHTML == "X"){
        alert("JOGADOR 1 VENCEU");
    } else if(botao3.innerHTML == "O" && botao6.innerHTML== "O" && botao9.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU!");
    } else if (botao1.innerHTML == "X" && botao5.innerHTML== "X" && botao9.innerHTML == "X"){
        alert("JOGADOR 1 VENCEU!");
    } else if(botao1.innerHTML == "O" && botao5.innerHTML== "O" && botao9.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU!");
    } else if (botao3.innerHTML == "X" && botao5.innerHTML== "X" && botao7.innerHTML == "X"){
        alert("JOGADOR 1 VENCEU!");
    } else if(botao3.innerHTML == "O" && botao5.innerHTML== "O" && botao7.innerHTML == "O"){
        alert("JOGADOR 2 VENCEU!");
    }
}