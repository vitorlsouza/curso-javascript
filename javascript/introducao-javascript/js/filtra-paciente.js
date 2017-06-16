var campoFiltro = document.querySelector("#filtra-paciente");

campoFiltro.addEventListener("input", function () {
	
	var pacientes = document.querySelectorAll(".paciente");

	for (var i = 0; i < pacientes.length; i++) {
		
		var paciente = pacientes[i]

		var nomeTd = paciente.querySelector(".info-nome");

		var nomePaciente = nomeTd.textContent;

		var expressao = new RegExp(this.value, "i");

		if (this.value.length > 0) {

			if (!expressao.test(nomePaciente)) {

			paciente.classList.add("invisivel");

			}else{

			paciente.classList.remove("invisivel");
			}

		}else{

			paciente.classList.remove("invisivel");
		}

		
	}
});