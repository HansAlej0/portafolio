let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("django");
    habilidades[3].classList.add("vuejs");
    habilidades[4].classList.add("comunicacion");
    habilidades[5].classList.add("trabajo");
    habilidades[6].classList.add("creatividad");
    habilidades[7].classList.add("dedicacion");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Modal del boton Enviar Mensaje
function mostrarMensaje() {
  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
}

function cerrarMensaje() {
  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "none";
}

function validarFormulario() {
  // Obtener valores de los campos
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var tema = document.getElementById("tema").value;
  var mensaje = document.getElementById("mensaje").value;

  // Realizar validaciones
  if (
    nombre === "" ||
    telefono === "" ||
    correo === "" ||
    tema === "" ||
    mensaje === ""
  ) {
    alert(
      "Todos los campos son obligatorios. Por favor, completa el formulario."
    );
    return false; // Evita que el formulario se envíe
  }

  // Si todas las validaciones pasan, puedes permitir que el formulario se envíe
  return true;
}

var temaActual = "claro"; // Puedes establecer el tema predeterminado

function toggleTema() {
  var body = document.body;

  // Cambia el tema actual
  if (temaActual === "claro") {
    temaActual = "oscuro";
  } else {
    temaActual = "claro";
  }

  // Agrega o quita la clase del body según el tema actual
  body.classList.toggle("tema-claro", temaActual === "claro");
  body.classList.toggle("tema-oscuro", temaActual === "oscuro");

  var iconoTema = document.getElementById("iconoTema");

  // Cambia el icono según el tema actual
  iconoTema.classList.toggle("fa-sun", temaActual === "claro");
  iconoTema.classList.toggle("fa-moon", temaActual === "oscuro");
}