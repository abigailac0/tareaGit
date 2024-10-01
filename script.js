function consultar() {
    let datosjson;
    fetch('resumen.json')
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;

        document.getElementById("donador");
        donador.textContent = 'Donador: ' + salida.donador;

        document.getElementById("id");
        id.textContent = 'Id: ' + salida.id;

        document.getElementById("nit");
        nit.textContent = 'NIT: ' + salida.nit;
        
        document.getElementById("ciudad");
        ciudad.textContent ='Ciudad: ' + salida.ciudad;

        document.getElementById("direccion");
        direccion.textContent ='Direccion: ' + salida.direccion;

        document.getElementById("telefono");
        telefono.textContent = 'Telefono: ' + salida.telefono;

        document.getElementById("correo");
        correo.textContent = 'Correo: ' + salida.correo;

        document.getElementById("fechaAfiliacion");
        fechaAfiliacion.textContent = 'Fecha de afiliacion: ' + salida.fechaAfiliacion;

    })

}