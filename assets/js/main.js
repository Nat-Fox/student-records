//función creada por pau
function Student(nombre, techSkills, lifeSkills, stats) {
    this.nombre = nombre;
    this.techSkills = techSkills;
    this.lifeSkills = lifeSkills;
    this.stats = stats;

};

//instanciación por kati
const su = new Student("Su", 80, 80, "Active");
const pola = new Student("Pola", 85, 85, "Active");
const nat = new Student("Nath", 90, 90, "Active");
const vane = new Student("Vane", 80, 80, "Active");



//funcion para guardar los datos ingresados (vane).

var listaStudent = [];
listaStudent.push(su, pola, nat, vane);
console.log(listaStudent);

function agregarEstudiante() {
    alert('funciona agregarEstudiante');
    var valorStudent = document.getElementById("student").value;
    student.push(new Tarea(1, 20, valorStudent, false));
    document.getElementById("student").value = "";
    return student;
}

//imprime los datos una vez que se presione el boton

function mostrarEstudiante(){
    alert('funciona mostrarEstudiante');
    printHTML(listaStudent)
    student.forEach(function(elemento) {
        listaStudent.innerHTML += "<li>" + "nombre:" + elemento.nombre + "\n Tech Skills: " + elemento.techSkills + "\n Life Skills: " + elemento.lifeSkills + "\n stats: " + elemento.stats + "</li><input type='button' onclick='mostrarStudent' value='student' id='student'" + "<br><br>"
    });
}

function printHTML(html) {
    imprimir.innerHTML = '';
    imprimir.innerHTML = html;
}