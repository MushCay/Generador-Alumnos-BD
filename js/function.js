var salida = "";
function imprimir(texto) {
    document.getElementById("salida").innerHTML = `<pre>${texto}</pre>`;
}
const apellido1 = [
    "Kim", "Lee", "Park", "Choi", "Jung",
    "Kang", "Cho", "Yoon", "Jang", "Lim",
    "Han", "Oh", "Seo", "Shin", "Kwon",
    "Hwang", "Ahn", "Song", "Ryu", "Hong",
    "Jeon", "Go", "Moon", "Yang", "Bae",
    "Baek", "Heo", "Nam", "Sim", "No",
    "Ha", "Jeong", "Son", "Woo", "Yoo",
    "Jin", "Min", "Koo", "Byun", "Do",
    "So", "Seok", "Tak", "Ma", "Seon",
    "Joo", "Gwak", "An", "Sung", "Huh",
    "Jae", "Eom", "Won", "Bang", "Yeo",
    "Na", "Gong", "Pyo", "Yeom", "Bok",
    "Chu", "Cha", "Yun", "Seol", "Gil",
    "Myung", "Ki", "Byeon", "Hyeon", "Im",
    "Gwon", "Sohn", "Seung", "Kyeong", "Hwangbo",
    "Jegal", "Namgung", "Seonu", "Dong", "Gal",
    "Sagong", "Ok", "Dang", "Hwangmok", "Beom",
    "Hyeok", "Kuk", "Yong", "Eun", "Gye",
    "Pan", "Wi", "Beon", "Gang", "Geum",
    "Gook", "In", "Roh", "Ba", "Cheon"
];

const apellido2 = [
    "Smith", "Jones", "Taylor", "Brown", "Williams",
    "Wilson", "Johnson", "Davies", "Robinson", "Wright",
    "Thompson", "Evans", "Walker", "White", "Roberts",
    "Green", "Hall", "Thomas", "Clarke", "Jackson",
    "Wood", "Harris", "Edwards", "Turner", "Martin",
    "Cooper", "Hill", "Ward", "Morris", "Moore",
    "Clark", "Lee", "King", "Baker", "Harrison",
    "Morgan", "Allen", "James", "Scott", "Phillips",
    "Watson", "Davis", "Parker", "Price", "Bennett",
    "Young", "Griffiths", "Mitchell", "Carter", "Cook",
    "Bailey", "Richardson", "Collins", "Bell", "Shaw",
    "Murphy", "Miller", "Cox", "Richards", "Khan",
    "Marshall", "Anderson", "Simpson", "Ellis", "Adams",
    "Singh", "Begum", "Wilkinson", "Foster", "Chapman",
    "Powell", "Webb", "Rogers", "Gray", "Mason",
    "Hunt", "Hicks", "Palmer", "Matthews", "Jenkins",
    "Lawrence", "Harvey", "Patel", "Clifford", "Newton",
    "Barker", "Barnes", "Reynolds", "Hunter", "Stevens",
    "Murray", "Butler", "Dixon", "Ford", "Warren",
    "West", "Jordan", "Pearson", "Grant", "Dunn"
];

const nombre1Mexico = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombre2Japon = [
    "Haruto", "Yuto", "Sota", "Yuki", "Hayato",
    "Ryota", "Koki", "Ren", "Takumi", "Daiki",
    "Kaito", "Sora", "Riku", "Tsubasa", "Shota",
    "Hiroto", "Yuma", "Itsuki", "Kenta", "Shun",
    "Akira", "Kazuki", "Naoki", "Keita", "Taichi",
    "Ryo", "Koji", "Masato", "Takeru", "Hinata",
    "Aoi", "Yui", "Hina", "Sakura", "Mei",
    "Rin", "Yuna", "Nanami", "Ayaka", "Mio",
    "Reina", "Haruka", "Saki", "Riko", "Kana",
    "Misaki", "Akari", "Kaori", "Mika", "Nozomi",
    "Emi", "Chika", "Yuri", "Asuka", "Natsuki",
    "Mai", "Sayaka", "Tomoya", "Kazuya", "Sho",
    "Jun", "Tatsuya", "Yuji", "Hikaru", "Makoto",
    "Kazuhiro", "Masaki", "Toru", "Yoshiki", "Kenji",
    "Naoto", "Shinji", "Kohei", "Toma", "Issei",
    "Minato", "Haruki", "Rui", "Yoshiro", "Takashi",
    "Ayumu", "Kenshin", "Shiro", "Yamato", "Taiga",
    "Koharu", "Himari", "Ichika", "Momoka", "Airi",
    "Honoka", "Miyu", "Rena", "Yuzuki", "Suzuka",
    "Akane", "Hikari", "Rina", "Kanon", "Nao"
];

function generar() {
    var opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}
function generarAlumno(matriculaBase, indice) {

    let app1 = apellido1[Math.floor(Math.random() * apellido1.length)];
    let apm2 = apellido2[Math.floor(Math.random() * apellido2.length)];

    let tieneSegundoNombre = Math.random() < 0.5;

    let nombre = nombre1Mexico[Math.floor(Math.random() * nombre1Mexico.length)];

    if (tieneSegundoNombre) {
        let nombre2 = nombre2Japon[Math.floor(Math.random() * nombre2Japon.length)];
        nombre += ` ${nombre2}`;
    }

    return {
        matricula: matriculaBase + indice,
        apellido1: app1,
        apellido2: apm2,
        nombre: nombre,
        correo: `a${matriculaBase + indice}@unison.mx`
    };
}


function generarSQL() {
    salida = "INSERT INTO alumnos VALUES ";
    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {

        let alumno = generarAlumno(matricula, i);

        salida += `(${alumno.matricula},UPPER('${alumno.apellido1}'),UPPER('${alumno.apellido2}'),UPPER('${alumno.nombre}'),'${alumno.correo}'),\n`;
    }

    salida = salida.slice(0, -2) + ";";
    imprimir(salida);
}


function generarSQLCSV() {
    salida = "matricula,apellido1,apellido2,nombre,correo\n";
    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {

        let alumno = generarAlumno(matricula, i);


        salida += `${alumno.matricula},${alumno.apellido1},${alumno.apellido2},${alumno.nombre},${alumno.correo}\n`;
    }

    imprimir(salida);
}
function generarJSON() {

    let alumnos = [];
    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {
        alumnos.push(generarAlumno(matricula, i));
    }

    salida = JSON.stringify(alumnos, null, 2);

    imprimir(salida);
}



function guardar() {
    var var1 = document.createElement("a");
    //salida = salida.replaceAll("", "\r\n");
    var1.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(salida));
    var opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "1": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo SQL"); break;
        case "2": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo Postgres"); break;
        case "3": var1.setAttribute("download", "sistema_escolar.csv"); alert("Generando archivo CSV"); break;
        case "4": var1.setAttribute("download", "sistema_escolar.json"); alert("Generando archivo JSON"); break;

    }
    var1.style.display = "none";
    document.body.appendChild(var1);
    var1.click();
    document.body.removeChild(var1);
}


