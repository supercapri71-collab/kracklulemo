valeMinu1 = function (primeraLetraAscii) {

    switch (primeraLetraAscii) {
        case 65:
            return "AZUAY"
        case 66:
            return "BOLIVAR"
        case 67:
            return "CARCHI"
        case 88:
            return "COTOPAXI"
        case 74:
            return "CHIMBORAZO"
        case 69:
            return "EL ORO"
        case 70:
            return "ESMERALDAS"
        case 71:
            return "GUAYAS"
        case 73:
            return "IMBABURA"
        case 76:
            return "LOJA"
        case 77:
            return "LOS RIOS"
        case 77:
            return "MANABI"
        case 78:
            return "MORONA SANTIAGO"
        case 79:
            return "NAPO"
        case 79:
            return "PASTAZA"
        case 80:
            return "PICHINCHA"
        case 82:
            return "SUCUMBIOS"
        case 83:
            return "ORELLANA"
        case 84:
            return "TUNGURAHUA"
        case 85:
            return "CANAR"
        case 86:
            return "ZAMORA CHINCHIPE"
        case 87:
            return "GALAPAGOS"

        default:
            return "PROVINCIA NO ENCONTRADA"

    }
}

valeMinu2 = function (segunadaLetra) {
    switch (segunadaLetra) {
        case 65 || 90:
            return "DE ALQUILER / TAXIS"
        case 69:
            return "ESTATALES"
        case 88:
            return "MUUSO OFICIAL"
        case 77:
            return "MUNICIPALES"
        case 83:
            return "DE GOBIERNO PROVINCIAL"
        default:
            return "SERVICIO PARTICULAR"

    }
}

valeMinu3 = function (ultimaLetra) {

    switch (ultimaLetra) {
        case 49:
            return "LUNES"
        case 50:
            return "LUNES"
        case 51:
            return "MARTES"
        case 52:
            return "MARTES"
        case 53:
            return "MIERCOLES"
        case 54:
            return "MIERCOLES"
        case 55:
            return "JUEVES"
        case 56:
            return "JUEVES"
        case 57:
            return "VIERNES"
        case 48:
            return "VIERNES"
        default:
            return "NO VALIDO"
    }
}
validaNombre = function (nombreProducto) {
    if (nombreProducto.lenght == 0 || nombreProducto.length > 8) {
        mostrarTexto("error1", "ERROR PLACA  NUMERO DE CARACTERES PERMITIDOS");
        errores = true;
    }
    return errores;
}
obtieneLetraAscii = function (placa, posicion) {
    let valAscci = parseInt(placa.charCodeAt(posicion));
    return valAscci

}
validaPlaca = function (posLetra);
if (posLetra > 64 && posLetra < 91) {
    errores2 = " ";
}
else {
    errores2 = "ERROR EN LA PRIMERA LETRA ";
}
validaPlaca1 = function (chara1);
if (chara1 > 64 && chara1 < 91) {
    errores2 = " ";
}
else {
    errores2 = "ERROR EN LA SEGUNDA LETRA ";
}
validaPlaca2 = function (chara2);
if (chara2 > 64 && chara2 < 91) {
    errores2 = " ";
}
else {
    errores2 = "ERROR EN LA TERCERA LETRA ";
}
validaPlaca3 = function (chara3);
if (chara3 > 64 && chara3 < 91) {
    errores3 = " ";
}
else {
    errores3 = "ERROR NO ES UN GUION ";
}
validaPlaca4 = function (chara4);
if (chara4 > 64 && chara4 < 91) {
    errores4 = " ";
}
else {
    errores4 = "ERROR EN LA POSICION 5 ";
}
validaPlaca5 = function (chara5);
if (chara5 > 47 && chara5 < 59) {
    errores5 = " ";
}
else {
    errores5 = "ERROR POSICION 6 NO ES UN NUMERO ";
}
validaPlaca6 = function (chara6);
if (chara6 > 64 && chara6 < 91) {
    errores6 = " ";
}
else {
    errores6 = "ERROR SE ESPERABA UN NUMERO POS_7 ";
}
validaPlaca7 = function (chara7);
if (chara7 > 64 && chara7 < 91) {
    errores7 = " ";
}
else {
    errores7 = "SE ESPERABA UN NUMERO POS_8  ";
}
