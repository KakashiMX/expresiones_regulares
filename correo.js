/*  Validaciones para correos electronicos */

// Validar un correo simple
/*  Por ejemplo 
        alguien@algunlugar.es 
*/
const expresion = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


// Validar un correo intermedio
/*  Por ejemplo 
        foo-bar.baz@example.com 
*/
const expresion2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


// Validar el 99.99% de los correos
const expresion3 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/