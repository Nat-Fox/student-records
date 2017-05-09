//función creada por pau
function Student(nombre, techSkills, lifeSkills, stats) {
    this.nombre = nombre;
    this.techSkills = techSkills;
    this.lifeSkills = lifeSkills;
    this.stats = stats;

};

//instanciación por kati
//ejemplos iniciales previo a los prompt
const su = new Student("Su", 80, 80, "Active");
const pola = new Student("Pola", 85, 85, "Active");
const nat = new Student("Nath", 90, 90, "Active");
const vane = new Student("Vane", 80, 80, "Active");


var listaStudent = [];

//función para agregar un estudiante
function agregarEstudiante() {
    //pedimos los datos por prompt
    var nombre = prompt('Ingresa nombre de la estudiante');
    var techSkills = prompt('Ingresa tech skills de la estudiante');
    var lifeSkills = prompt('Ingresa life skills de la estudiante');
    var stats = prompt('Ingresa status de la estudiante');
    //creamos a cada estudiante en base al objeto
    var estudiante = new Student(nombre, techSkills, lifeSkills, stats);
    //estudiante ingresado al arreglo listaStudent
    listaStudent.push(estudiante);
    console.log(listaStudent);
}

//imprime los datos una vez que se presione el boton

function mostrarEstudiante() {
    alert('funciona mostrarEstudiante');
    printHTML(listaStudent)
    student.forEach(function(elemento) {
        imprimir.innerHTML += "<li>" + "nombre:" + elemento.nombre + "\n Tech Skills: " + elemento.techSkills + "\n Life Skills: " + elemento.lifeSkills + "\n stats: " + elemento.stats + "</li><input type='button' onclick='mostrarStudent' value='student' id='student'" + "<br><br>"
    });
}

function printHTML(html) {
    imprimir.innerHTML = '';
    imprimir.innerHTML = html;
}