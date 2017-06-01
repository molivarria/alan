// Registrar Servicio en la base de datos
// alan medina
// 20/05/2017
$(document).ready(function(){
    //Revisar que no hay registros en memoria
    //Lista con todos los servicios
    var arrayServicios = [];
    var arrayCategorias = [];

    //Guardar los datos del serviio
    $('#btn_AgregarServicio').click(function(event){
         //Crear servicio y agregarlo a la lista
           crearServicio();
           $("#pag_Inicio").bind("pagebeforeshow",ImprimirServicios());
    });

   

    console.log(localStorage.getItem("Ejemplo"));

   

    function revisarMemoria(){
        if(localStorage.app != undefined){
            console.log(localStorage.getItem("Ejemplo"));
        }
        else{
            console.log("storage vacío");
            localStorage.setItem("Ejemplo","Texto");
            localStorage.setItem("Ejemplo2","Texasdasasdao");
             console.log(localStorage.getItem("Ejemplo2"));
             
        }
    }

  
    function crearServicio(){
         var servicio = new Object();
             servicio.id = $('#txt_ID').val();
             servicio.nombre = $('#txt_Nombre').val();
             servicio.imagen = $('#inp_Image').val();
             servicio.descripcion = $('#txt_Descripcion').val();
             servicio.correo = $('#txt_Mail').val();
             servicio.domicilio = $('#txt_Domicilio').val();
             servicio.categoria = $('#txt_Categoria').val();
             servicio.nota = $('#txt_Nota').val();

            arrayServicios.push(servicio);
            arrayCategorias.push(servicio.categoria);
            // console.log(arrayServicios[0]);
            // console.log(arrayCategorias[0]);
            arrayCategorias = arrayCategorias.filter(function(value, index, array){
                return array.indexOf(value) == index;
            });
            console.log("Categorías "+ arrayCategorias);
           
            ImprimirServicios();
    }



    function ImprimirServicios(){
        // Imprimir Categorías
        $('#cont_Inicio').html("");
        var contenido; // =  '<div data-role="collapsible-set">';
        for(i = 0; i<arrayCategorias.length; i++){
            // $("#cont_Inicio").append(
            contenido=
                 '<div data-role="collapsible">'+
                   '<h3>'+ arrayCategorias[i]+ '</h3>'+
               '<ul data-role="listview" data-filter="true" data-filter-placeholder="Buscar Servicios..." data-inset="true" id="lst_Servicios">';
            //  );
                for(j = 0; j<arrayServicios.length; j++){
                    console.log(arrayServicios[j].categoria);
                    console.log(arrayCategorias[i]);
                    if(arrayServicios[j].categoria === arrayCategorias[i]){
                        //   $("#cont_Inicio").append(
                        contenido += '<li><a href="#"></a><a href="#">'+ arrayServicios[j].nombre+ '</a></li> ';
                        // );  
                     }
                 
                }

                contenido+="</ul></div>";

        }
        // contenido+="</div>";
        $('#cont_Inicio').append(contenido);
        console.log(contenido);
        $('#lst_Servicios').listview().listview('refresh');
         //Actualizar la lista en la página principal
      
        
    }

    


    // function ImprimirServicios(servicio){
    //     var contenido = '<div data-role="collapsible-set">';
    //     //Recorrer las categorías para saber cuantos bloques habrá                    
    //     for (i = 0; i<arrayCategorias.length; i++){
    //         contenido += '<div data-role="collapsible">'+ 
    //                         '<h3>'+ arrayCategorias[i]+ '</h3>';

    //         contenido += ImprimirServicio(contenido);
    //         contenido += '</div>';
    //     }
         
    //       contenido += '</div>';          
    //       console.log(contenido);
    //       $("#cont_Inicio").append(contenido);

    // }

    // function ImprimirServicio(contenido){
    //     contenido+=  '<ul data-role="listview" data-filter="true" data-filter-placeholder="Buscar Servicios..." data-inset="true">';
    //     for (i = 0; i<arrayServicios.length; i++){
    //         contenido+= '<li><a href="'+i+'"></a><a href="#">'+ arrayServicios[i]+ '</a></li>';
    //     } 
    //     contenido+='<ul>';
    //     return contenido;
    // }

    // function ImprimirServicio(servicio, contenido){
    //     contenido+=  '<ul data-role="listview" data-filter="true" data-filter-placeholder="Buscar Servicios..." data-inset="true">';
    //        $.each(servicio, function() {
    //         contenido+= '<li><a href="#">'+this.nombre+'</a><a href="#">Default</a></li>';
    //     }); 
    //     contenido+='<ul>';
    //     return contenido;
    // }





    /*<!--   <li data-role="collapsible" data-iconpos="right" data-inset="false">
              <h2>Birds</h2>
              <ul data-role="listview" data-theme="b"  data-filter="true">
                <li><a href="#">Condor</a></li>
                <li><a href="#">Eagle</a></li>
                <li><a href="#">Sparrow</a></li>
              </ul>
            </li>          

            <li data-role="collapsible" data-iconpos="right" data-inset="false">
              <h2>Birds</h2>
              <ul data-role="listview" data-theme="b"  data-filter="true">
                <li><a href="#">Condor</a></li>
                <li><a href="#">Eagle</a></li>
                <li><a href="#">Sparrow</a></li>
              </ul>
            </li>-->              */

   
});