# angular-intro



## Objetivos

Practicar la creación de componentes y configurar el enrutamiento básico en Angular.

Construirás una aplicación con una página de inicio que tendrá un menú con tres enlaces a fotografías de una misma ciudad en años diferentes (descárgalas de google): Ej: París en 1900, París en 1950 y París en 2020

Cada uno de los enlaces cargará una página con el año como título y la imagen de la ciudad correspondiente.

## Desarrollo

Crea 2 componentes: Home, City

El componente Home contendrá los tres enlaces cargarán el componente City, pasando por parámetro el año de la imagen.

El componente City contendrá un array de objetos [{year:1900, url:'http:imagen'}].
Se recogerá el parámetro del año de la url y se mapeará con el objeto para mostrar:
- el año como título `<h1>{{year}}</h1>` y,
- la imagen correspondiente: `<img src={{url}}>`

Se debe incorporar un enlace con el texto "back" para volver al listado.
