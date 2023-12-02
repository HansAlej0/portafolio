// JavaScript para el carrusel de testimonios
document.addEventListener("DOMContentLoaded", function () {
  const testimonios = document.querySelectorAll(".testimonio");
  let indiceTestimonioActual = 0;

  function mostrarTestimonio(indice) {
    testimonios.forEach((testimonio, i) => {
      testimonio.style.display = i === indice ? "block" : "none";
    });
  }

  function mostrarTestimonioSiguiente() {
    indiceTestimonioActual = (indiceTestimonioActual + 1) % testimonios.length;
    mostrarTestimonio(indiceTestimonioActual);
  }

  function mostrarTestimonioAnterior() {
    indiceTestimonioActual =
      (indiceTestimonioActual - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(indiceTestimonioActual);
  }

  // Mostrar el primer testimonio al cargar la página
  mostrarTestimonio(indiceTestimonioActual);

  // Manejar eventos de clic para navegar entre testimonios
  document
    .getElementById("btnTestimonioSiguiente")
    .addEventListener("click", mostrarTestimonioSiguiente);
  document
    .getElementById("btnTestimonioAnterior")
    .addEventListener("click", mostrarTestimonioAnterior);
});
