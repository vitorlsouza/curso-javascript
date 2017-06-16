var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeMensagemDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);	

	form.reset();

	var erroMensagem = document.querySelector("#mensagens-erro");

	erroMensagem.innerHTML = "";

});


function adicionaPacienteNaTabela(paciente){

	var pacienteTr = montaTr(paciente);
	var pacienteAdicionar = document.querySelector("#tabela-pacientes");
	pacienteAdicionar.appendChild(pacienteTr);

}

function exibeMensagemDeErro(erros){
	
	var ul = document.querySelector("#mensagens-erro");

	ul.innerHTML = "";

	erros.forEach(function(erro){

		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome:    form.nome.value,
		peso:    form.peso.value,
		altura:  form.altura.value,
		gordura: form.gordura.value,
		imc:     calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd("info-nome", paciente.nome));
	pacienteTr.appendChild(montaTd("info-peso", paciente.peso));
	pacienteTr.appendChild(montaTd("info-altura", paciente.altura));
	pacienteTr.appendChild(montaTd("info-gordura", paciente.gordura));
	pacienteTr.appendChild(montaTd("info-imc", paciente.imc));

	return pacienteTr;

}

function montaTd(classe, dados){

	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dados;

	return td;
}


function validaPaciente(paciente){

	var erros = [];

	if (!validaPeso(paciente.peso)) {		
		
		erros.push("Peso inválido!");
	}

	if (!validaAltura(paciente.altura)) {

		erros.push("Altura inválida!");
	}

	if (paciente.nome.length == 0) {

		erros.push("O nome não pode ser em branco!");
	}

	if (paciente.peso.length == 0) {

		erros.push("O peso não pode ser em branco!");
	}

	if (paciente.altura.length == 0) {

		erros.push("A altura não pode ser em branco!");
	}

	if (paciente.gordura.length == 0) {

		erros.push("A gordura não pode ser em branco!");
	}

	return erros;
}