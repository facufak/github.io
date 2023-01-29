// Declaro los arrays con el texto de cada apartado del Frame variable

const textoEstudios = [
    "Comencé mis estudios teatrales a fines de los años 80 con diversos maestros.",
    "dónde destaca la Escuela de Teatro de Cristina Banegas (1989 - 1994).",
    " ",
    "- Seminarios varios:",
    "1997 - Dramaturgia con Adriana Genta.",
    "1998 - Técnica vocal con Dina Roth.",
    "1998 - Técnica corporal con Ana Frenekel.",
    "1999 - Mimo y expersión corporal con Miguel Garzón y Mónica Gallardo en el CCSM.",
    "2007 - Teatro Físico: con Diego Mauriño (teatro del Perro).",
    " ",
    "- Música:",
    "2006 - Batería con Mariano 'chicho' Frúmboli.",
    "2010/11 - Percusión con Santiago Vazquez.",
    "2016/18 - Cajón Flamenco con Germán 'Papu' Gigena."
];

const textoTeatro = [
    "2002/03 - Otelo no es moro no es Venecia (Actor)",
    "2004/05 - Tercero incluído (Actor, Iluminador, Música)",
    "2006/07 - Walter (Intérprete)",
    "2007 - La sangre tiene voz (Actor invitado)",
    "2007/09 - Escrito en el barro (Músico)",
    "2008/10 - Cerca (Actor)",
    "2011 - Hamlet, el señor de los cielos (Actor)",
    "2012 - El bolero (Intérprete, Director musical)",
    "2014 - Amarillo (Actor)",
    "2017 - Post mortem (Actor)",
    "2022 - Enamorando (Músico)",
    "2022 - Lucrecia Merico presenta 'En amor ando - Tango y Boleros' (Músico)"
];

const textoCine = [
    "1993 - 'Picado Fino' de Esteban Sapir", 
    "1999 - 'El despertar de L' de Poli Nardi"
];

const textoTV = [
    "2005 - 'Sin Código' de Adrián Suar -Polka- (Canal 13)",
    "2005 - 'Hombres de Honor' de Adrián Suar -Polka- (Canal 13)",
    "2006 - 'Sos mi Vida' (personaje Iriarte) de Adrián Suar -Polka- (Canal 13)",
    "2006 - 'Alma Pirata' de Chris Morena (Telefe)",
    "2006 - 'Amas de casa Desesperadas' (Argentina) Polka- (Canal 13)",
    "2007 - 'Amas de casa Desesperadas' (Colombia/Ecuador/Brasil/Miami) - Polka",
    "2007 - 'Casi Angeles' de Chris Morena (Telefe)",
    "2008 - 'Epitafios' (Argentina) HBO Olé - Polka", 
    "2010 - 'Malparida' de Adrián Suar - Polka (Canal 13)", 
    "2012 - 'Violetta' de Disney-Polka (canal 13)",
    "2012/13 -'Sos mi Hombre' (personaje Bruno) - Polka- (Canal 13)",
    "2014 - 'Noche y Día' - Polka- (Canal 13)", 
    "2015 - 'Guapas' - Polka- (Canal 13)"
];

const textoPublicidad = [
    "2007 - Cigarrillos L&M (Gráfica) Alemania, EL Círculo Casting/Prod. Internacional",
    "2008 - Campaña 'Alto Palermo Remodelaciones' Argentina , Young & Rubicam.",
    "2012 - Campaña Gráfica 'FM100 25 años' - (Gráfica)"
];

// Ahora creo una funcion que genere un string con el parrafo a ser escrito

function EscribirInfo(arrayTexto) {
    let largoArray = arrayTexto.length;
    let resultado = "";
    
    for (let x = 0; x < largoArray; x++) {
        resultado += arrayTexto[x] +"</br>";
    }
    return resultado;
}

// Escribo el estado por default del Frame variable, el texto de Formacion y estudios

document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoEstudios);

// Ahora capturo los eventos del menu de seleccion y vario el contenido del Frame variable

document.getElementById("ApartadoEstudios").onclick = function () {    
    document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoEstudios);
}

document.getElementById("ApartadoTeatro").onclick = function () {
    document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoTeatro);
}

document.getElementById("ApartadoCine").onclick = function () {
    document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoCine);
}

document.getElementById("ApartadoTV").onclick = function () {
    document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoTV);
}

document.getElementById("ApartadoPublicidad").onclick = function () {
    document.getElementById("DatosPorRubro").innerHTML = EscribirInfo(textoPublicidad);
}

