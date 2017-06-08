var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent

	var imc = peso / (altura * altura);

	var tdImc = paciente.querySelector(".info-imc");

	tdImc.textContent = imc.toFixed(2);

	if (peso <= 0 || peso >= 500) {

		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {

		tdImc.textContent = "Altura inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (tdImc.textContent < 25) {

			paciente.classList.add("paciente-abaixo-peso");

		} else if (tdImc.textContent >= 25 && tdImc.textContent <= 28) {

			paciente.classList.add("paciente-normal-peso");

		} else {

			paciente.classList.add("paciente-acima-peso");
		}
}



