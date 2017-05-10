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
do{
    var nombre = prompt('Introduce tu nombre');   
    var techSkills = prompt('Ingresa tech skills de la estudiante');
    var lifeSkills = prompt('Ingresa life skills de la estudiante');
    var stats = prompt('Ingresa status de la estudiante');

    
} while(nombre== " " || techSkills== " " || lifeSkills== " " || stats == " "){
    alert('ingrese campo');
   
}
  
    //creamos a cada estudiante en base al objeto
    var estudiante = new Student(nombre, techSkills, lifeSkills, stats);
    

    //estudiante ingresado al arreglo listaStudent
    listaStudent.push(estudiante);
    console.log(listaStudent);
}
  

//funcion que imprime los datos una vez que se presione el boton

function mostrarEstudiante() {
    var contenedor = document.getElementById('mostrar');
    var contenido = '';

    //recorremos el arreglo listaStudent
    listaStudent.forEach(function(student) {
        contenido += '<div>'+ '<font color= #FFFFFF>' + '<strong>' + student.nombre.toUpperCase(0).charAt(0) + student.nombre.slice(1).toLowerCase() + '</strong>' + '<br>' +
            '<strong>' + 'Tech Skills: ' + '</strong>' + student.techSkills + '<br>' +
            '<strong>' + 'Life Skills: ' + '</strong>' + student.lifeSkills + '<br>' +
            '<strong>' + 'Status: ' + '</strong>' + student.stats + '</font>'+ '</div><br>';
        console.log(contenido);
    });

    contenedor.innerHTML = contenido;
}

