var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
/*	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; 
	paiDoAlvo.remove(); */
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {
		event.target.parentNode.remove();
	}, 500);

	/* event.target.parentNode.remove(); */
	
});

/*
pacientes.forEach(function(paciente) {
	paciente.addEventListener("dblclick", function() {
		console.log("Fui clicado com double click");
		this.remove();
	});
}); */

/*
var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'td') {
        event.target.parentNode.remove()
    }
});  */