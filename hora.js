/*  Expresiones para validar horas */

// Validar formato de 12 horas hh:mm
/* Por ejemplo
    3:14    03:14   12:27
    1:05am  1:05pm 
*/
const expresion = /^(?:0?[1-9]|1[0-2]):[0-5][0-9]\s?(?:[aApP](\.?)[mM]\1)?$/



// Validar formato de 24 horas hh:mm
/* Por ejemplo
        1:34    01:34
        12:27   15:09   0:05 
*/
const expresion2 = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/


// Validar formato de 24 horas con segundos hh:mm:ss
/* Por ejemplo
    0:05:21     15:09:34    23:45:53 
*/
const expresion3 = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/
