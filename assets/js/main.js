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




//imprime los datos una vez que se presione el boton


 var estudiante =  listaStudent.forEach(function(elemento) {
        elemento.innerHTML += "<li>" + "nombre:" + this.nombre + "Tech Skills: " + this.techSkills + "Life Skills: " + this.lifeSkills + "stats: " + this.stats + "</li>" + "<br><br>"
    });


estudiante();

function printHTML(html) {
    elemento.innerHTML = '';
    elemento.innerHTML = html;
}