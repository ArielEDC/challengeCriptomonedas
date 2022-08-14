# CryptoApp

Aplicación desarrollada con Angular, challenge de 42i.

## Descripcion de la App

La misma permite guardar una lista de criptomonedas favoritas.
Cada elemento de la lista contendrá la cotizacion de una criptomoneda, una cantidad definida por el usuario, y el valor total para dicha cantidad.
La cotización de cada criptomoneda se obtiene mediante el consumo de una [API](https://docs.cryptapi.io/).
La lista se almacena automaticamente en el navegador (LocalStorage) y se puede eliminar cada elemento cuando se desee.
La app permite agregar un nuevo elemento, mediante una busqueda dinamica en una lista (hardcode), y definirle una cantidad.

## Instrucciones de uso

1. Hacer click en el botón + (signo más) para acceder a la lista de criptomonedas disponibles.
2. Hacer click en la criptomoneda deseada. 
De forma opcional, escribir la criptomoneda en la barra de búsqueda, para filtrarla. 
3. Ingresar la cantidad correspondiente y dar click en el botón Guardar. 
4. Repetir tantas veces como el usario considere. 
5. Para eliminar una criptomonda favorita, hacer click en el botón - (signo menos).
6. Para retroceder en el proceso (tanto en el paso 2 como 3), hacer click en la flecha.

## Acceder a la App

[https://cripto-favoritas.web.app/](https://cripto-favoritas.web.app/)