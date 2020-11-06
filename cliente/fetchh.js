//Listeners
document.getElementById("term").addEventListener("keyup", exe);


function exe(event) {

   if (event.keyCode == 13) {
      const data = new FormData();
      data.append('content', document.getElementById("term").value);

      

      fetch(
         '../servidor/clases/mensaje.php',

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
            document.getElementById('term').value = respuestaDelServidor;
            console.log(respuestaDelServidor);
         })
         .catch(function (err) {
            console.log(err);
         });
   }
}

//<script type="text/javascript" src="guiOp.js"></script>
