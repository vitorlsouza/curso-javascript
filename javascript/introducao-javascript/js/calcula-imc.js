var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso   = tdPeso.textContent

	var tdAltura = paciente.querySelector(".info-altura");
	var altura   = tdAltura.textContent


	var tdImc = paciente.querySelector(".info-imc");

	var PesoValido = validaPeso(peso);
	var AlturaValida = validaAltura(altura);


	if (!PesoValido) {

		tdImc.textContent = "Peso inválido";
		ehValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!AlturaValida) {

		tdImc.textContent = "Altura inválido";
		ehValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (PesoValido && AlturaValida) {

		tdImc.textContent = calculaImc(peso, altura);
	}	


}

function calculaImc(peso, altura){

	var imc = peso / (altura * altura);

	return imc.toFixed(2);
}


function validaPeso(peso){

	if (peso < 0 || peso >= 300) {
		return false;
	} else{
	 	return true;
	}
}

function validaAltura(altura){

	if (altura < 0 || altura >= 3.00) {
		return false;
	} else{
		return true;
	}
}

