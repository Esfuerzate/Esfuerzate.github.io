document.getElementById('btn-redirect').addEventListener('click', function() {
  window.location.href = 'productos.html';
});

window.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery img');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  // Función para abrir la imagen en el modal
  function openModal(imageSrc) {
    modalContent.innerHTML = `<img src="${imageSrc}" alt="Imagen">`;
    modal.style.display = 'block';
  }

  // Agregar el evento de clic a cada imagen
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      const imageSrc = this.getAttribute('src');
      openModal(imageSrc);
    });
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


function mostrarVentanaEmergente(src) {
  var modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal-content');

  modal.style.display = 'flex';
  modalContent.innerHTML = '<img src="' + src + '" alt="Imagen en ventana emergente">';
}

function cerrarVentanaEmergente() {
  var modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
  var modal = document.querySelector('.modal');
  if (event.target == modal) {
    cerrarVentanaEmergente();
  }
});


