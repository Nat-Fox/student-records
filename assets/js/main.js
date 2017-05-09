function Student (nombre, techSkills, lifeSkills, stats) {
    this.nombre = nombre;
    this.techSkills = techSkills;
    this.lifeSkills = lifeSkills;
    this.stats = stats;
};

//ejemplo instancia
//var pola = new Student(1, 'Paola', 'Urra', 28, ['Dormir', 'Ver Netflix', 'Jugar xbox']);

const su = new  Student( "Su", 80, 80,"Active")
const pola = new Student("Pola",85, 85, "Active")
const nat = new Student("Nath", 90, 90, "Active")
const vane = new Student("Vane", 80, 80, "Active")
