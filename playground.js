//Ecsiwercicio1 usa uma variavel boleana para retiornar um valor.

/*
function compareTrue(usuario,senha){  
    let resp = true;
    
    if (usuario == 'ramon' && senha == '12345') {
        resp = true; 
        console.log(resp);   
    }else{
         resp = false;
        console.log(resp);
    }  
}
compareTrue('ramon','12345');*/
    

//Exercicio2 calc area do triangulo

 /*
function calcArea(base,height){
    area = base * height / 2;
    console.log(area);
}

calcArea(51,1);
*/

//Exercicio 3 separar strings no vetor pelo metodo split

/*function splitSentence(frase){
    frasearray  = frase.split(/ /) //criaçao de arrray que recebe a palavras em cada campo e mudando oo separador
    console.log(frasearray);    
}
splitSentence('vamo que vamos');*/

//Exercicio 4   

/*function concatName(frase){
   myarraystr =frase.split(/,/); //criaçao de arrray que recebe a palavras em cada campo e mudando oo separador   
   console.log(myarraystr[myarraystr.length-1]); //exibir a ultima palavra da array
   console.log(myarraystr[0]);//exibir primeira palavra do array
   }
concatName('Ramon,Pereira,Balbino,Moraes');*/

//Exercicio 5

/*function footballPoints(wins,ties) {
    console.log((wins * 3) + ties );
}
footballPoints(0,0);*/

//Exercicio 6 
/*let numeros= [0, 4, 4, 4, 9, 2, 1];

function highestCount(numeros){
    let maior = 0;
    let qtd = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > maior ) {
           maior = numeros[index]; 
        }
        }
        for (let cont= 0; cont < numeros.length; cont++) {
            if (numeros[cont] == maior ) {
               qtd = qtd + 1; 
            }
            }
      console.log(maior);
      console.log(qtd);
    }
      highestCount(numeros);*/

      //exercicio 7

      /*function catAndMouse(mouse,cat1,cat2){
      let distCat1 = mouse - cat1;
      let distCat2 = mouse - cat2 ;
      if (distCat1 > distCat2 && distCat1 != distCat2) {
        console.log('cat1')
        }else{ 
            if (distCat1 == distCat2) {
                console.log('gatos se trombam')
            }else{
                console.log('cat2')
             }
            }
      }
    catAndMouse(1,2,5);*/
    
    //exercicio 8
  /*let array=[];
    function fizzBuzz(array=[]){
   for (let index = 0; index  < array.length; index++) {
    if ( array[index]%3 == 0 && array[index]%5!=0  ){
        let frizz = 'friz'.split(/ /);
        console.log(frizz);
    }else{
        if (array[index]%5==0) {
            let buzz = 'buzz'.split(/ /);
            console.log(buzz);
     }else{if (array[index]%3 == 0 && array[index]%5==0 ) {
        let frizzbuzz = 'frizbuzz'.split(/ /);
        console.log(frizzbuzz);
        }else{
        }console.log('bug');
        }
        }
    }
}
fizzBuzz(array=[9,3,15,2]);*/     
   
  

//exercicio 9
// let array = [];
/*function encode(frase) {
  let frasenew =frase.replace(/a/g,'1'); 
      frasenew = frasenew.replace(/e/g,'2');
      frasenew = frasenew.replace(/i/g,'3');
      frasenew = frasenew.replace(/o/g,'4');
      frasenew = frasenew.replace(/u/g,'5'); 
      console.log(frasenew);
    
}

encode('ola mundo , aeiou');

function decode(frase) {
    let frasenew =frase.replace(/1/g,'a'); 
        frasenew = frasenew.replace(/2/g,'e');
        frasenew = frasenew.replace(/3/g,'i');
        frasenew = frasenew.replace(/4/g,'o');
        frasenew = frasenew.replace(/5/g,'u'); 
        console.log(frasenew);
      
  }
  
  decode('ola mundo , 12345');*/

  //exercicio 10

  /*let tec = {
    tech : ["Java Script","HTML"] ,
    nome : "Ramon" ,
  }ggit 

function objetos(tec){
    for (let index = 0; index < tec.tech.length; index++) {
        console.log(tec.tech[index]);
        console.log(tec.nome);
        }

}
objetos(tec);*/


  


  

