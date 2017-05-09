//funcion para guardar los datos ingresados.

var listaStudent = [];

function agregarStudent(){
	
	var valorStudent = document.getElementById("student").value;
	student.push(new Tarea (1, 20, valorStudent, false));
	document.getElementById("student").value = "";
	return student;
}

//imprime los datos una vez que se presione el boton

function mostrarStudent(){
	printHTML(listaStudent)
	student.forEach(function(elemento){ 
	imprimir.innerHTML += "<li>" + "nombre:" + elemento.nombre + "\n Tech Skills: " + elemento.techSkills + "\n Life Skills: " + elemento.lifeSkills + "\n stats: " + elemento.stats + "</li><input type='button' onclick='mostrarStudent' value='student' id='student'"  + "<br><br>"
	});
}

function printHTML (html){
  imprimir.innerHTML = '';
  imprimir.innerHTML = html;
}