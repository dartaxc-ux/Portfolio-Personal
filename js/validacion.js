const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valido = true;

  document.querySelectorAll('.error').forEach(el => el.remove());

  const nombre = document.querySelector('input[type="text"]');
  const telefono = document.querySelector('input[type="tel"]');
  const correo = document.querySelector('input[type="email"]');
  const mensaje = document.querySelector('textarea');

  [nombre, telefono, mensaje].forEach(campo => {
    if (campo.value.trim() === '') {
      mostrarError(campo, 'Este campo es obligatorio');
      valido = false;
    }
  });

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.value.trim() === '') {
    mostrarError(correo, 'Este campo es obligatorio');
    valido = false;
  } else if (!regexEmail.test(correo.value)) {
    mostrarError(correo, 'El correo no tiene un formato válido');
    valido = false;
  }

  if (valido) {
    alert('¡Formulario enviado correctamente!');
    form.reset();
  }
});

function mostrarError(campo, mensaje) {
  const error = document.createElement('span');
  error.classList.add('error');
  error.textContent = mensaje;
  error.style.color = 'red';
  error.style.fontSize = '0.8rem';
  campo.insertAdjacentElement('afterend', error);
}