calculaTasa = function (nota1) {
    let prome;
    if (nota1 < 300000) {
        prome = nota1 * 16 / 100;
    } else {
        if (nota1 > 299999 && nota1 < 500000) {
            prome = nota1 * 15 / 100;
        } else {
            if (nota1 > 499999 && nota1 < 1000000) {
                prome = nota1 * 14 / 100;
            }
            else {
                if (nota1 > 999999 && nota1 < 2000000) {
                    prome = nota1 * 13 / 100;
                } else {
                    if (nota1 > 1999999) {
                        prome = nota1 * 12 / 100;
                    }

                }

            }
        }
    }
    prome = prome.toFixed(2);
    return prome;
}
calculaCapacidad = function (nota1, nota2, nota3) {
    let valor1;
    valor1 = nota2 - nota3
    if (nota1 > 50) {
        prome = valor1 * 30 / 100;
    } else {
        if (nota1 < 51) {
            prome = valor1 * 40 / 100;
        }
    }
    prome = prome.toFixed(2);
    return prome;
}
calculaDescuento = function (nota1, nota2) {
    let valor1;
    valor1 = nota1 * nota2
    if (nota2 > 11) {
        prome = valor1 * 0.04;
    } else {
        if (nota2 > 5 && nota2 < 12) {
            prome = valor1 * 0.03;
        }
        else {
            if (nota2 > 2 && nota2 < 6) {
                prome = valor1 * 0.02;
            }
            else {
                if (nota2 < 3) {
                    prome = valor1 * 0.0;
                }
            }
        }
    }
    prome = prome.toFixed(2);
    return prome;
}
valeClave = function (nota2) {
    if (nota2 > 7 && nota2 < 17) {
        cmpResu = "Su clave es: VALIDA";
        prome = true;
    } else {
        cmpResu = "Su clave : NO ES VALIDA";
        prome = false;
    }
    return prome;
}
valeMinu = function (nota2) {
    if (nota2 > 96 && nota2 < 123) {
        prome = " minuscula";
    } else {
        if (nota2 > 159 && nota2 < 164) {
            prome = " minuscula";
        } else {
            if (nota2 == 130) {
                prome = " minuscula";
            } else {
                if (nota2 > 64 && nota2 < 91) {
                    prome = " MAYUSCUULA";
                } else {
                    if (nota2 > 47 && nota2 < 58) {
                        prome = "UN NUMERO";
                    }
                }
            }
        }
    }
    return prome;
}
daPermiso = function (nota1, nota2, nota3) {
    let cmpResu;
    if (nota1 > 90 || nota2 > 90 || nota3 > 90) {
        cmpResu = document.getElementById("lblResu");
        prome = " Aprobado  ";
        resu1 = true;
    }
    else {
        cmpResu = document.getElementById("lblResu");
        prome = " Negado vaya a dormir  ";
        resu1 = false;
    }
    return prome, resu1

}