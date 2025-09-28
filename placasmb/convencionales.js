let prome;
let resu1;

obtienePromedio = function () {
     //variables para recuperar los valores de las cajas de texto
     let nota1;
     let cmpResu;
     nota1 = parseFloat(document.getElementById("txtNota1").value);
     prome = calculaTasa(nota1);
     mostrarTexto("lblProme", prome);
     if (nota1 < 300000) {
          cmpResu = document.getElementById("lblResu");
          cmpResu.innerText = (cmpResu, " La Tasa de Interes es 16% ");
     } else {
          if (nota1 > 299999 && nota1 < 500000) {
               cmpResu = document.getElementById("lblResu");
               cmpResu.innerText = " La Tasa de Interes es 15% ";
          } else {
               if (nota1 > 499999 && nota1 < 1000000) {
                    cmpResu = document.getElementById("lblResu");
                    cmpResu.innerText = " La Tasa de Interes es 14% ";
               } else {
                    if (nota1 > 999999 && nota1 < 2000000) {
                         cmpResu = document.getElementById("lblResu");
                         cmpResu.innerText = " La Tasa de Interes es 13% ";
                    } else {
                         if (nota1 > 1999999) {
                              cmpResu = document.getElementById("lblResu");
                              cmpResu.innerText = " La Tasa de Interes es 12% ";
                         }
                         else {
                              cmpResu = document.getElementById("lblResu");
                              cmpResu.innerText = " No Manolo .. MAL INGERESADO ";
                         }

                    }
               }
          }
     }

}

obtieneCapacidad = function () {
     //variables para recuperar los valores de las cajas de texto
     let cmpResu;
     let nota1 = parseFloat(document.getElementById("txtNota1").value);
     let nota2 = parseFloat(document.getElementById("txtNota2").value);
     let nota3 = parseFloat(document.getElementById("txtNota3").value);
     prome = calculaCapacidad(nota1, nota2, nota3);
     mostrarTexto("lblProme", prome);
     if (nota1 > 50) {
          cmpResu = document.getElementById("lblResu");
          cmpResu.innerText = " La Capacidad de pago es 30% ";
     } else {
          if (nota1 > 0 && nota1 < 51) {
               cmpResu = document.getElementById("lblResu");
               cmpResu.innerText = " La Capacidad de pago es 40% ";
          } else {
               cmpResu = document.getElementById("lblResu");
               cmpResu.innerText = " --- Manolo Datoa mal Ingresados --- ";

          }
     }
}
obtieneDescuento = function () {
     //variables para recuperar los valores de las cajas de texto
     let nota1;
     let nota2;
     let cmpResu;
     nota1 = parseFloat(document.getElementById("txtNota1").value);
     nota2 = parseInt(document.getElementById("txtNota2").value);

     prome = calculaDescuento(nota1, nota2);
     mostrarTexto("lblProme", prome);
     if (nota2 > 11) {
          cmpResu = document.getElementById("lblResu");
          cmpResu.innerText = (cmpResu, " Obtiene el 4% ");
     } else {
          if (nota2 > 5 && nota2 < 12) {
               cmpResu = document.getElementById("lblResu");
               cmpResu.innerText = " Obtiene el 3% ";
          } else {
               if (nota2 > 2 && nota2 < 6) {
                    cmpResu = document.getElementById("lblResu");
                    cmpResu.innerText = " Obtiene el 2% ";
               } else {
                    if (nota2 < 3) {
                         cmpResu = document.getElementById("lblResu");
                         cmpResu.innerText = " Obtiene el 0% ";
                    } else {
                         cmpResu = document.getElementById("lblResu");
                         cmpResu.innerText = " --- Manolo Datoa mal Ingresados --- ";
                    }
               }
          }
     }
}
obtieneClave = function () {
     let nota1;
     let nota2;
     let cmpResu;
     cmpResu = document.getElementById("txtNota1");
     nota1 = cmpResu.value;
     nota2 = nota1.length;
     prome = valeClave(nota2);
     mostrarTexto("lblResu", prome);
}
obtieneMinuscula = function () {
     let nota1;
     let nota2;
     let cmpResu;
     cmpResu = document.getElementById("txtNota1");
     nota1 = cmpResu.value;
     nota2 = parseInt(nota1.charCodeAt(0));
     prome = valeMinu(nota2);
     mostrarTexto("lblProme", prome);
}
obtienePermiso = function () {
     let nota1 = parseInt(document.getElementById("txtNota1").value);
     let nota2 = parseInt(document.getElementById("txtNota2").value);
     let nota3 = parseInt(document.getElementById("txtNota3").value);
     daPermiso(nota1, nota2, nota3);
     mostrarTexto("lblProme", prome);
     mostrarTexto("lblProme1", resu1);
}
