function ocultar() {
  var div = document.getElementById('imgN');
  div.style.display = 'none';
}

function mostrar() {
  var div = document.getElementById('imgN');
  div.style.display = '';
}

var inicio;

function iniciarSesion() {

  var correo = document.getElementById('txtusu').value;
  var passw = document.getElementById('txtpass').value;
  if ((correo == "") && (passw == "")) {
    if (correo == "") {
      alert("Debe ingresar un correo valido");
    } else if (passw == "") {
      alert("Debe ingresar una contraseña");
    }
  } else {
    fetch('../js/arch.json')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (datos) {
        console.log(datos);
        datos.forEach(function (validar) {
          if (validar.correo == correo) {
            if (validar.contrasena == passw) {
              intento = true
              inicio = `${validar.nombre} ${validar.apellido}`
              bandera = true
              localStorage.setItem("Inicio", inicio)
              window.location = ("../index.html")
            } else {
              alert("incorrecto contraseña")

              bandera = true
            }

          } else {
            bandera = false
          }
        });
        if (bandera == null) {
          alert("usuario no existe")
        }

      })
  }
}
var usua
miStorage = window.localStorage;

function cargarD() {
  usua = miStorage.getItem('Inicio')
  document.getElementById('nombreU').innerHTML = usua;
  var login = document.getElementById('iniciar');
  var cerrarS = document.getElementById('cerrarSesion');
  if (usua != null) {
    login.style.display = 'none';
    cerrarS.style.display = '';

  } else {
    login.style.display = '';
    cerrarS.style.display = 'none';
  }

}

function cerrar() {
  miStorage.clear();
  window.location = "../index.html";

}
var arregloInfo = localStorage.getItem("arregloInfo");
arregloInfo = JSON.parse(arregloInfo);
if (arregloInfo == null) {
  arregloInfo = [];
}
miespacio = window.localStorage

function guardarCont() {
  var nombreDigitado = document.getElementById("txtnombre").value;
  var pApellidoADigitado = document.getElementById("txtpApellido").value;
  var SApellidoDigitado = document.getElementById("txtsApellido").value;
  var correoDigitado = document.getElementById("txtCorreo").value;
  var fechaNacDigitado = document.getElementById("dateFecha").value;
  var edadDigitado = document.getElementById("txtEdad").value;
  var telefonoDigitado = document.getElementById("txtTelefono").value;
  var tipoLibroDigitado = document.getElementById("opcion").value;
  if (document.getElementById('precios').checked) {
    var cheq = "Precios";
  } else if (document.getElementById('consultarLi').checked) {
    var cheq = "Consultar libro";
  } else if (document.getElementById('consultarCom').checked) {
    var cheq = "Consultar compra de libros";
  } else if (document.getElementById('consultarAlq').checked) {
    var cheq = "Consultar alquiler de libros";
  }

  if (document.getElementById('F').checked) {
    var generoDig = "Femenino";
  } else if (document.getElementById('M').checked) {
    var generoDig = "Masculino";
  }
  if ((nombreDigitado == "") || (pApellidoADigitado == "") || (SApellidoDigitado == "") || (correoDigitado == "") || (fechaNacDigitado == "") || (edadDigitado == "") || (telefonoDigitado == "") || (cheq.checked = false) || (generoDig.checked = false)) {
    alert("Debe llenar todos los campos")
  } else {
    var newC = {
      nombre: nombreDigitado,
      pApellido: pApellidoADigitado,
      sApellido: SApellidoDigitado,
      correo: correoDigitado,
      fechaNac: fechaNacDigitado,
      edad: edadDigitado,
      telefono: telefonoDigitado,
      tipoLibro: tipoLibroDigitado,
      motivo: cheq,
      genero: generoDig
    };

    arregloInfo.push(newC);
    miespacio.setItem('arregloInfo', JSON.stringify(arregloInfo));
    alert("Datos guardados");

    limpiarFormu();
  }

}
function limpiarFormu() {
  document.getElementById("txtnombre").value = "";
  document.getElementById("txtpApellido").value = "";
  document.getElementById("txtsApellido").value = "";
  document.getElementById("txtCorreo").value = "";
  document.getElementById("dateFecha").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtTelefono").value = "";
  document.getElementById("opcion").value = "Terror";
  document.getElementById('precios').checked = false;
  document.getElementById('consultarLi').checked = false;
  document.getElementById('consultarCom').checked = false;
  document.getElementById('consultarAlq').checked = false;
  document.getElementById("F").checked = false;
  document.getElementById("M").checked = false;
}
function mostrarTabla() {

  tablallena = "";
  for (var i = 0; i < arregloInfo.length; i++) {
    var cuerpo = document.getElementById("elementos")
    var cli = arregloInfo[i];
    tablallena += "<tr><td>" + cli.nombre + "</td><td>" + cli.pApellido + "</td><td>" + cli.sApellido + "</td><td>" + cli.correo + "</td><td>" + cli.fechaNac + "</td><td>" + cli.telefono + "</td><td>" + cli.tipoLibro + "</td><td>" + cli.motivo + "</td><td>" + cli.genero + "</td><td><a href='#'onclick='editarContacto()'>editar</a></td></tr>"


    cuerpo.innerHTML = tablallena;
  }
}

var arregloPed = localStorage.getItem("arregloPed");
arregloPed = JSON.parse(arregloPed);
if (arregloPed == null) {
  arregloPed = [];
}
miespacio = window.localStorage

var arregloAl = localStorage.getItem("arregloAl");
arregloAl = JSON.parse(arregloAl);
if (arregloAl == null) {
  arregloAl = [];
}
miespacio = window.localStorage
function alquilarAlq() {
  var libro1 = document.getElementById('txt1').value;
  var libro2 = document.getElementById('txt2').value;
  var libro3 = document.getElementById('txt3').value;
  var libro4 = document.getElementById('txt4').value;
  var libro5 = document.getElementById('txt5').value;
  var libro6 = document.getElementById('txt6').value;
  var libro7 = document.getElementById('txt7').value;
  var libr8 = document.getElementById('txt8').value;
  var libro9 = document.getElementById('txt9').value;
  var libro10 = document.getElementById('txt10').value;
  var libro11 = document.getElementById('txt11').value;
  var libro12 = document.getElementById('txt12').value;

  sblb1 = parseInt(libro1) * 30000
  sblb2 = parseInt(libro2) * 30000
  sblb3 = parseInt(libro3) * 30000
  sblb4 = parseInt(libro4) * 30000
  sblb5 = parseInt(libro5) * 30000
  sblb6 = parseInt(libro6) * 30000
  sblb7 = parseInt(libro7) * 30000
  sblb8 = parseInt(libr8) * 30000
  sblb9 = parseInt(libro9) * 30000
  sblb10 = parseInt(libro10) * 30000
  sblb11 = parseInt(libro11) * 30000
  sblb12 = parseInt(libro12) * 30000

  total = parseInt((libr8) * 30000) + parseInt((libro7) * 30000) + parseInt((libro6) * 30000) + parseInt((libro5) * 30000) + parseInt((libro4) * 30000) + parseInt((libro3) * 30000) + parseInt((libro2) * 30000) + parseInt((libro1) * 30000)+ parseInt((libro9) * 30000)+ parseInt((libro10) * 30000)+ parseInt((libro11) * 30000)+ parseInt((libro12) * 30000)

  var newAl = {
    lib1: libro1,
    lib2: libro2,
    lib3: libro3,
    lib4: libro4,
    lib5: libro5,
    lib6: libro6,
    lib7: libro7,
    lib8: libr8,
    lib9: libro9,
    lib10: libro10,
    lib11: libro11,
    lib12: libro12,

    subt1: sblb1,
    subt2: sblb2,
    subt3: sblb3,
    subt4: sblb4,
    subt5: sblb5,
    subt6: sblb6,
    subt7: sblb7,
    subt8: sblb8,
    subt9: sblb9,
    subt10: sblb10,
    subt11: sblb11,
    subt12: sblb12,

    libTotal: total
  };
  arregloAl.push(newAl);
  miespacio.setItem('arregloAl', JSON.stringify(arregloAl));
  alert("Datos guardados");
  limpiar()
}

function limpiar() {
  document.getElementById('txt1').value = "";
  document.getElementById('txt2').value = "";
  document.getElementById('txt3').value = "";
  document.getElementById('txt4').value = "";
  document.getElementById('txt5').value = "";
  document.getElementById('txt6').value = "";
  document.getElementById('txt7').value = "";
  document.getElementById('txt8').value = "";
  document.getElementById('txt9').value = "";
  document.getElementById('txt10').value = "";
  document.getElementById('txt11').value = "";
  document.getElementById('txt12').value = "";

}
function mostrarAlq() {
  tablallena = "";
  tablallena2 = "";
 
 
   for (var i = 0; i < arregloAl.length; i++) {
 
     var cuerpo = document.getElementById("elementosA");
     var cuerpob = document.getElementById("elementosB");
 
     var cli = arregloAl[i];
 
     tablallena += "<tr><td>" + cli.lib1 + "</td><td>" + cli.lib2 + "</td><td>" + cli.lib3 + "</td><td>" + cli.lib4 + "</td><td>" + cli.lib5 + "</td><td>" + cli.lib6 + "</td><td>" + cli.lib7 + "</td><td>" + cli.lib8 + "</td><td>" + cli.lib9 + "</td><td>" + cli.lib10 + "</td><td>" + cli.lib11 + "</td><td>" + cli.lib12 + "</td></tr>"
     cuerpo.innerHTML = tablallena;
     
     tablallena2 += "<tr><td>" + cli.subt1 + "</td><td>" + cli.subt2 + "</td><td>" + cli.subt3 + "</td><td>" + cli.subt4 + "</td><td>" + cli.subt5 + "</td><td>" + cli.subt6 + "</td><td>" + cli.subt7 + "</td><td>" + cli.subt8 + "</td><td>" + cli.subt9 + "</td><td>" + cli.subt10 + "</td><td>" + cli.subt11 + "</td><td>" + cli.subt12 + "</td><td>" + cli.libTotal + "</td></tr>"
     cuerpob.innerHTML = tablallena2;
    
  }

}
