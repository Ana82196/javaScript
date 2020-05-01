
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
}

function trocar(elemento){
   //document.getElementById("mousemover").innerHTML = "Obrigado";
   elemento.innerHTML = "Obrigado";
   //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carreada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/


/*
var d = new Date();
    alert(d.getDay());
*/


/*
var count;
for(count= 1; count <= 5; count++){
    alert(count);
};
*/

/*
var count =0;
while (count <5){
    console.log(count)
    alert(count);
    count = count +1;
}
/*


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);*/


/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça","pera","laranja"]; 
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString);
//console.log(lista.join("-"));


//var nome = "Ana Clara";
//var n1 = 17;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo"; 
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase. toLowerCase())
//alert(frase.replace("japão", "Brasil"));