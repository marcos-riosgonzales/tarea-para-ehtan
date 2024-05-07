const esPangrama = cadena => {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy"
	cadena = cadena.toLowerCase();

	let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);


	for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
		let letraActual = alfabetoComoArreglo[indice];
		
		if (!cadena.includes(letraActual)) return false;
	}
	
	return true;
};


const CADENAS_PARA_PROBAR = [
	"El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo",  
	"Hola",  
	"aeiou",  
	"parzibyte",  
	"abcdefghijklmnñopqrstuvwxyz",  
	"El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja",  
	"abcdefghijklmnopqrstuvwxyz",  
	"Mi hijo degustó en el festival de bayas una extraña pizza de kiwi con queso",
];

CADENAS_PARA_PROBAR.forEach(cadena => {
	console.log(`¿'${cadena}' es pangrama? ${esPangrama(cadena)}`);
});