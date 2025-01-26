function mostrarDatos1(method, urlJSON, response, searchData)
{
  var contenedor0 = document.getElementById("contenedor0");
  var festivalEncontrado=false;

  // Limpiar el div resultado1
  response.innerHTML = "";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      // Extraer los datos de JSON
      const datos1 = this.response;
      const datos2 = JSON.parse(datos1);
      const festival1 = datos2["festivales"];

      // Recorrer los datos de JSON
      for (let festival of festival1)
      {

        if (festival.nombre.toLowerCase().trim().includes(searchData.value.toLowerCase().trim())
          || festival.genero.toLowerCase().trim().includes(searchData.value.toLowerCase().trim())
          || festival.ubicacion.toLowerCase().trim().includes(searchData.value.toLowerCase().trim()) 
          || festival.fecha.toLowerCase().trim().includes(searchData.value.toLowerCase().trim())
          || festival.precio.toString().toLowerCase().trim().includes(searchData.value.toLowerCase().trim())
          || festival.artistas.some(artista => artista.toLowerCase().trim().includes(searchData.value.toLowerCase().trim())))
        {
          
          festivalEncontrado=true;

          div0 = document.createElement('div');
          div0.setAttribute('class', 'contenedor2-1');
          response.appendChild(div0);

          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedor2-1-1');
          div0.appendChild(div1);

          div2 = document.createElement('div');
          div2.setAttribute('class', 'contenedor2-1-1-1');
          div1.appendChild(div2);

          h2 = document.createElement('h2');
          h2.textContent = festival.nombre;
          h2.setAttribute('class', 'titulo1');
          div2.appendChild(h2);

          img = document.createElement('img');
          img.setAttribute("src", festival.img);
          img.setAttribute("alt", festival.nombre);
          img.setAttribute('class', 'imagen1');
          div1.appendChild(img);

          p = document.createElement('p');
          p.textContent = "Género: " + festival.genero;
          p.setAttribute('class', 'texto1');
          div2.appendChild(p);

          p = document.createElement('p');
          p.textContent = "Ubicación: " + festival.ubicacion;
          p.setAttribute('class', 'texto1');
          div2.appendChild(p);

          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedor2-1-1');
          div0.appendChild(div1);

          p = document.createElement('p');
          p.textContent = "Fecha: " + festival.fecha;
          p.setAttribute('class', 'texto1');
          div2.appendChild(p);

          p = document.createElement('p');
          p.textContent = "Artistas: " + festival.artistas;
          p.setAttribute('class', 'texto2');
          div2.appendChild(p);

          div2 = document.createElement('div');
          div2.setAttribute('class', 'contenedor2-1-1-2');
          div1.appendChild(div2);
          
          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedorPrecio');
          div0.appendChild(div1);

          p = document.createElement('button');
          p.textContent = "Precio: " + festival.precio + " €";
          p.setAttribute('class', 'texto3');
          div1.appendChild(p);

          div1 = document.createElement('div');
          div1.setAttribute('class', 'contenedor2-1-1');
          div0.appendChild(div1);

        }
      }
      if(festivalEncontrado==true)
      {
        /* Ocultar que no hay resultados */
        contenedor0.classList.remove("visible");
        contenedor0.classList.add("oculto");
      }  
      else if(festivalEncontrado==false)
      {
        /* Limpiar el div resultado1 */
        response.innerHTML = "";
        /* Mostrar que no hay resultados */
        contenedor0.classList.remove("oculto");
        contenedor0.classList.add("visible");
      }  
      /* Limpiar el campo de texto */
      searchData.value=""; 
    }
 
  };
  xhr.open(method, urlJSON, true);
  xhr.send();
}

// -------------------------------------- INICIO - Añadir Eventos
window.addEventListener("load", function () {
  // Paso 1 - Referencia de los elementos 
  const b1 = document.getElementById("b1");
  const response1 = document.getElementById("resultado1");
  const urlJSON1 = 'json/bd1.json';
  const method1 = 'GET';
  const searchData1 = document.getElementById("c1");

  // Llamar a mostrarDatos1 al cargar la página
  mostrarDatos1(method1, urlJSON1, response1, searchData1);

  // Paso 2 - Asociar el elemento al evento y llamada a la función
  if (b1) {
      b1.addEventListener("click", function (event) {
          // Prevenir el comportamiento por defecto de un evento
          event.preventDefault();
          // Realizar la petición
          mostrarDatos1(method1, urlJSON1, response1, searchData1);
      });
  }
});
    // ---------------------------------- FIN - (click) Eliminar Usuarios 1            


// -------------------------------------- FIN - Añadir Eventos