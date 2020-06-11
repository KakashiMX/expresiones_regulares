/*  Expresiones regulares para válidar fechas */

// Validar por dd-mm-aaaa
/*  Por ejemplo
        31.12.3013     01/01/2013
        5-3-2013       15.03.2013 
*/
const expresion = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/


// Validar mm-dd-aaaa
/*  Por ejemplo
        12/14/2013     03-05-2013
        3-15-2013      3.5.2013 
*/
const expresion2 = /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/


// Validar aaaa-mm-dd
/*  Por ejemplo
        2013-12-14      2013-07-08
        2013-7-14       2013/11/8       2013.11.8
*/
const expresion3 = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/