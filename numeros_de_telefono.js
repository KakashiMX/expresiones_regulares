/*  Expresion para validar números de telefono */

const expresion = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/


/*
                                                ACEPTA

    Número con paréntesis : (55)123456 
    Número sin paréntesis : 55123456
    Número con + dentro del paréntesis : (+55)123456
    Tres números dentro del paréntesis : (+555)123456
    Espacio entre el paréntesis y los siguientes números : (+555) 123456
    6 dígitos luego del paréntesis : (55)443322
    8 dígitos luego del paréntesis : (55)44332211
    Guiones intercalados : (55)44-33-22-11
    Espacios intercalados : (55)44 33 22 11
    Asteriscos intercalados : (55)44*33*22*11
    Puntos intercalados : (55)44.33.22.11
    8 números de corrido : 12345678
    10 números de corrido : 1234567890
    12 números de corrido :  23456789012
    10 números espaciados : 55 2030 4050
    10 números espaciados con un + adelante : +55 20 50 4444


                                                RECHAZA

    Cuatro números dentro del paréntesis : (+6555)123456
    Rechaza 7 dígitos luego del paréntesis : (55)4433221
    Rechaza comas intercaladas : (55)44,33,22,11
    Rechaza 11 números de corrido : 12345678901

*/