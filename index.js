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

function openPDF4() {
  window.open('forms/Form - Acceptance of Appointment of Guardian - Conservator.pdf', '_blank');
}

function openPDF5() {
  window.open('forms/Form - G-C Report.pdf', '_blank');
}

function openPDF6() {
  window.open('forms/Form - Guardian - Conservator plan and motion to approve.pdf', '_blank');
}

function openPDF7() {
  window.open('forms/Form - Motion to appoint lawyer.pdf', '_blank');
}

function openPDF8() {
  window.open('forms/Form - Motion to Appoint Successor Guardian - Conservator.pdf', '_blank');
}

function openPDF9() {
  window.open('forms/Form - Motion Motion to Approve G-C report.pdf', '_blank');
}

function openPDF9() {
  window.open('forms/Form - Motion to Approve G-C report.pdf', '_blank');
}

function openPDF10() {
  window.open('forms/Form - Notice of hearing and declaration of mailing.pdf', '_blank');
}

function openPDF11() {
  window.open('forms/Form - Notice of Petition for G-C or PA for adult.pdf', '_blank');
}

function openPDF12() {
  window.open('forms/Form - Notice of rights.pdf', '_blank');
}

function openPDF13() {
  window.open('forms/Form - substantial change in circumstances.pdf', '_blank');
}