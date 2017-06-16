var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
	
	console.log("Buscando...");

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		
		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200) {

			var cadastro = xhr.responseText;

			var pacientes = JSON.parse(cadastro);

			erroAjax.classList.add("invisivel");

			pacientes.forEach( function(paciente) {
			
				adicionaPacienteNaTabela(paciente);

			});
		} else {

			erroAjax.classList.remove("invisivel");
			var erroUrl = document.querySelector("#erro-url");
			erroUrl.textContent = xhr.status;
		}

	});

	xhr.send();

});