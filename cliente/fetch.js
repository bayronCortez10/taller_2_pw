//data.append('dato', document.getElementById('valor').value);

//Listeners------------------------------------------------------
document.getElementById("enviar").addEventListener("click", function () { exe("enviar"); });
//Fin Listeners--------------------------------------------------

//Esta constante corresponde a la abstracción de un formulario que va a enviar unos datos


function exe() {
   const data = new FormData();
   if
      (arguments[0] == "enviar") {
      if (document.getElementById('valor').value.length == 0) {
         alert('El campo mensaje no puede ser vacio');
         return false
      }
      if (document.getElementById('valor').value.toUpperCase()!="REGISTRARMENSAJE" && document.getElementById('valor').value.toUpperCase()!="LISTARMENSAJES") {
         alert('Comando invalido los comandos permitidos son registrarMensaje o listarMensajes.');
         return false
      }
      /*if (document.getElementById('valor').value.toUpperCase()=="REGISTRARMENSAJE") {
         alert('registrarMensaje');
         return false
      }
      if (document.getElementById('valor').value.toUpperCase()=="LISTARMENSAJES") {
         alert('listarMensajes');
         return false
      }*/
      data.append('enviar', document.getElementById('enviar').value);
   }
   
   fetch(
      'http://localhost/ejercicioSimplePhp/servidor/index.php',

      {
         method: 'POST',
         body: data
      }
   )
      .then(function (response) {
         if (response.ok) {
            return response.text()
            //console.log(response.json())
         } else {
            throw "Error en la llamada Fetch";
         }

      })
      .then(function (respuestaDelServidor) {
         document.getElementById('resp').innerHTML = respuestaDelServidor
         console.log(respuestaDelServidor);
      })
      .catch(function (err) {
         console.log(err);
      });

}
