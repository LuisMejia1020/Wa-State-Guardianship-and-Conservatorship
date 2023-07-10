document.addEventListener('DOMContentLoaded', function() {
  const enlacesMenu = document.querySelectorAll('nav ul li a');
  const secciones = document.querySelectorAll('section');

  function showHomeSection() {
    secciones.forEach(function(seccion) {
      seccion.style.display = 'none';
    });

    const homeSection = document.getElementById('home');
    homeSection.style.display = 'block';
  }

  enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();

      const idSeccion = enlace.getAttribute('href').substring(1);
      const seccionSeleccionada = document.getElementById(idSeccion);

      secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
      });

      seccionSeleccionada.style.display = 'block';
    });
  });

  showHomeSection(); // Call the function to show the "home" section on page load
});

  

function mision(){
  alert("Our mision is to educate our audience with rich content about Guardianship and Conservatorship")
}

function vision(){
  alert("I need info, Liz")
}

function openPDF() {
  window.open('forms/90 Day- Plan - Notice of Filing-2.pdf', '_blank');
}

function openPDF2() {
  window.open('forms/Notice of Hearing 16pt (7).pdf', '_blank');
}


function openPDF3() {
  window.open('forms/90 Day- Checklist For File (1).pdf', '_blank');
}