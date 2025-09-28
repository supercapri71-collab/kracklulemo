let errores = false;
calcularValorTotal = function () {
    let nombreProducto;
    nombreProducto = document.getElementById("txtProducto").value;
    // validaNombre(nombreProducto);
    let valeNombre = validaNombre(nombreProducto);
    //parte Provincia
    let primeraLetraAscii = obtieneLetraAscii(nombreProducto, 0);
    let provincia = valeMinu1(primeraLetraAscii)
    mostrarTexto("infoTotal", provincia);

    //parte Tipo vh
    let segundaLetra = obtieneLetraAscii(nombreProducto, 1);
    let Tipov = valeMinu2(segundaLetra);
    mostrarTexto("infoTotal1", Tipov);

    //obtener pico y placa
    let ultimaLetra = obtieneLetraAscii(nombreProducto, 7);
    let pico = valeMinu3(ultimaLetra);
    mostrarTexto("infoTotal2", pico);

    // se valida todos los caracteres de l a placa
    let posLetra = obtieneLetraAscii(nombreProducto, 1);
    let msjError = validaPlaca(chara);
    let chara1 = obtieneLetraAscii(nombreProducto, 2);
    let msjError1 = validaPlaca1(chara1);
    let chara2 = obtieneLetraAscii(nombreProducto, 3);
    let msjError2 = validaPlaca2(chara2);
    let chara3 = obtieneLetraAscii(nombreProducto, 4);
    let msjError3 = validaPlaca3(chara3);
    let chara4 = obtieneLetraAscii(nombreProducto, 5);
    let msjError4 = validaPlaca4(chara4);
    let chara5 = obtieneLetraAscii(nombreProducto, 6);
    let msjError5 = validaPlaca5(chara5);
    let chara6 = obtieneLetraAscii(nombreProducto, 7);
    let msjError6 = validaPlaca6(chara6);
    let chara7 = obtieneLetraAscii(nombreProducto, 8);
    let msjError7 = validaPlaca7(chara7);
    let observa=msjError+"/"+msjError1+"/"+msjError2+"/"+msjError3+"/"+msjError4+"/"+msjError5+"/"+msjError6+"/"+msjError7;
    mostrarTexto("infoTotal3", observa);
}
limpiar = function () {
    mostrarTexto("txtProducto", "");
}


