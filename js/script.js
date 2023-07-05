//Ocultar Elementos
document.getElementById("enviar").addEventListener("click", function(){

    var inputCajaTexto = document.getElementById("caja_Texto").value;

    if (inputCajaTexto == "") {
        alert("La Caja de Texto esta vacia por favor ingrese una Cadena de Texto");
        //functionBtnDesencriptar();
        document.getElementById("ocultarImg").style.visibility = "visible";
        document.getElementById("ocultarh2").style.visibility = "visible";
        document.getElementById("ocultarP").style.visibility = "visible";
         //Mostrar boton copiar
        document.getElementById("btn_copiar").style.visibility = "hidden";
    } else {
       functionBtnEncriptar();
    }
});

var enviar = document.getElementById("desencriptar").addEventListener("click", function(){

    var inputCajaTexto = document.getElementById("caja_Texto").value;

    if (inputCajaTexto == "") {
        alert("La Caja de Texto esta vacia por favor ingrese una Cadena de Texto");
        functionBtnDesencriptar();
    } else {
        functionBtnDesencriptar();
        //Ocultar Texto cunado presion 
        document.getElementById("resultado").style.visibility = "visibility";
        
    }

});

function functionBtnEncriptar() {
    document.getElementById("ocultarImg").style.visibility = "hidden";
    document.getElementById("ocultarh2").style.visibility = "hidden";
    document.getElementById("ocultarP").style.visibility = "hidden";
    //Mostrar boton copiar
    document.getElementById("btn_copiar").style.visibility = "visible";

    
}

document.getElementById("btn_copiar").style.visibility = "hidden";


//Mostrar Elementos

function functionBtnDesencriptar() {
    //document.getElementById("ocultarImg").style.visibility = "visible";
    //document.getElementById("ocultarh2").style.visibility = "visible";
    document.getElementById("ocultarP").style.visibility = "hidden";
    //Mostrar boton copiar
    document.getElementById("btn_copiar").style.visibility = "visible";

    //ocultar Boton cuando se presiona Desencriptar
    document.getElementById("btn_copiar").style.visibility = "visibility";
}

//Enviar Datos del Formulario

document.getElementById("enviar").addEventListener("click", function() {

    // Obtener Valor Ingresado en el Formulario
    var encriptar = document.getElementById("caja_Texto").value;
  
    // Realizar la conversión de letras
    var convertirTexto = encriptar.replace(/e/g, "enter");
    convertirTexto = convertirTexto.replace(/i/g, "imes");
    convertirTexto = convertirTexto.replace(/a/g, "ai");
    convertirTexto = convertirTexto.replace(/o/g, "ober");
    convertirTexto = convertirTexto.replace(/u/g, "ufat");
  
    // Actualizar el contenido del elemento con los valores ingresados
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = convertirTexto;

    /*  resetear caja de texto despues de enviar formulario */
    document.getElementById("miFormulario").reset();
  
  });

  document.getElementById("desencriptar").addEventListener("click", function() {

    var encriptar = document.getElementById("caja_Texto").value;

    // Realizar la conversión de letras
    var convertirTexto = encriptar.replace(/enter/g, "e");
    convertirTexto = convertirTexto.replace(/imes/g, "i");
    convertirTexto = convertirTexto.replace(/ai/g, "a");
    convertirTexto = convertirTexto.replace(/ober/g, "o");
    convertirTexto = convertirTexto.replace(/ufat/g, "u");

    // Actualizar el contenido del elemento con los valores ingresados
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = convertirTexto;

    /*  resetear caja de texto despues de enviar formulario */
    document.getElementById("miFormulario").reset();
  
  });
  

//permmitir solo minuscula
function minuscula(e) {
    e.value = e.value.toLowerCase(e);
}

//No permitir caracteres especiales
const caja_Texto = document.getElementById("caja_Texto");
caja_Texto.addEventListener("keypress", (e)=>{
    const expres = /^[a-z0-9 ]+$/;
    if(!expres.test(e.key)) e.preventDefault();
})

//funcion copiar
function copiar() {
    let copiarEncriptacion = document.getElementById("resultado");
    let btn_copiar = document.getElementById("btn_copiar");

    navigator.clipboard.writeText(copiarEncriptacion.textContent);
    btn_copiar.textContent="Copiar";
    alert("texto Copiado");
}












/* document.getElementById("desencriptar").addEventListener("click", 

    function mostrar() {
        document.getElementById("ocultarImg").style.visibility = "visible";
        document.getElementById("ocultarh2").style.visibility = "visible";
        document.getElementById("ocultarP").style.visibility = "visible";
    
    }

);  */
