
/*
Java script es un lenguaje que posee un paradigma
orientado a objetos y a funciones, por tal motivo
presenta una particular la cual es 

NO TIPADO

no existe int, double, float, string, etc

Dentro de JS, todo es y una var ->  Variable

De acuerdo al estandar de ES6 se manejan 3 tipos de variables

VAR
LET es una variable de tipo protected
CONST
 */

function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe por lo menos 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }
    /*
    vamos a crear una opcion para que solo se pueda ingresar
    letras dentro del campo nombre
    */

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
       }

    if(!allValido){
        alert("Escribe unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }



    /*
    vamos a validar la entrada de numeros
    */ 

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }


  /*
    hay que validar la entrada de un correo electronico
    algo@algo.algo
    algo.algo@algo.algo.algo
    algo_algo@algo.algo.algo
    tenemos que hacer uso de una expresion regular
    */ 

    var txt = formulario.email.value;

    //patron
    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?" ":"no")+" valido");

    return b.test;
}