Acceso Seguro 0.9
================================

Aplicación web usada para controlar el acceso seguro a una plataforma o contenido externo, desarrollada 
en JavaScript y HTML. Permite gestionar el acceso a un área restringida a través de un formulario de login, 
permitiendo o no al usuario pasar de una sección a otra de manera fácil haciendo uso de una interfaz intuitiva.

Para gestionar los accesos bastará con crear una copia de la imagen alojada en la carpeta 'img' con el formato
'nombre-contraseña.jpg', donde 'nombre' será el usuario en cuestión y 'contraseña' el password del mismo,
a su vez, debemos crear en la carpeta 'server', la referencia a la página concreta a habilitar, debiendo tener 
esta el formato 'nombre-contraseña.html' siguiendo la lógica anterior.

Para evitar problemas de seguridad deberemos de configurar nuestro página y/o servidor para imposibilitar el visualizado
del contenido de los directorios más delicados, como la carpeta 'server' e 'img'. El programa viene con una demo de prueba
que corresponde al usuario 'odei-pagina'.

## Licencia
Esta aplicación se ofrece bajo licencia [AGPL versión 3].

[AGPL versión 3]: http://www.gnu.org/licenses/agpl.html