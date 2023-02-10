const btncursos = document.querySelector('#btn-cursos');
const btnsobremi = document.querySelector('#btn-sobremi');
const btneducacion = document.querySelector('#btn-educacion');
const btnhabilidades = document.querySelector('#btn-habilidades');
const titulo = document.querySelector('#titulo');
const parrafo = document.querySelector('#parrafo');
const imagen = document.querySelector('#imagen')

const textosobremi = parrafo.innerHTML
const imgsobremi = imagen.src

/**Cambios del texto del main */
btncursos.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Se apreto el boton cursos");
    titulo.textContent = "Cursos realizados";
    parrafo.innerHTML = "<b>Revolución Digital, Municipalidad de San Nicolás </b><br><br>Curso básico sobre HTML, CSS y JavaScript (32 horas)<br><br><b>Ticmas Academy, Municipalidad de Buenos Aires</b><br><br>Argentina programa 4.0, primeros pasos Front-end";
    imagen.src = "/img/programacion.jpg";
});

btnsobremi.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("Se apreto el boton sobremi");
    titulo.textContent = "Giuliano Garfagnoli";
    parrafo.innerHTML = textosobremi;
    imagen.src = imgsobremi;
});

btneducacion.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("Se apreto el boton ducacion");
    titulo.textContent = "Mi Educación";
    parrafo.innerHTML = "<b>(2022 - actual.) Universidad Tecnológica Nacional (UTN)</b> <br><br> Ingeniería en Sistemas (cursando segundo año) <br><br> <b>(2016 - 2021) Colegio Maria Auxiliadora</b> <br><br> Título en Ciencias Económicas";
    imagen.src = "/img/Escuela (no maria auxiliadora).jpg";
});

btnhabilidades.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("Se apreto el boton habilidades");
    titulo.textContent = "Mis habilidades";
    parrafo.innerHTML = "<b>Web: </b> <br><br> <ul><li>HTML</li> <li>CSS</li> <li>JavaScript</li></ul> <b> GitHub </b>";
    imagen.src = "/img/GitHub Logo.png";
});