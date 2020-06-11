/*  Expresiones regulares para válidar fechas */

// Validar por dd-mm-aaaa

const expresion = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/


// Validar mm-dd-aaaa
const expresion2 = /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/


// Validar aaaa-mm-dd
const expresion3 = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/