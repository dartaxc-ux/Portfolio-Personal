// -- MODO NOCHE/DÍA --
const botonTema = document.createElement('button');
botonTema.textContent = '🌙 Modo noche';
botonTema.id = 'btn-tema';
botonTema.style.cssText = `
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  z-index: 999;
`;
document.body.appendChild(botonTema);

botonTema.addEventListener('click', function() {
  document.body.classList.toggle('modo-noche');
  if (document.body.classList.contains('modo-noche')) {
    botonTema.textContent = '☀️ Modo día';
  } else {
    botonTema.textContent = '🌙 Modo noche';
  }
});

// -- BOTÓN VOLVER ARRIBA --
const botonArriba = document.createElement('button');
botonArriba.textContent = '⬆ Arriba';
botonArriba.id = 'btn-arriba';
botonArriba.style.cssText = `
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  display: none;
  z-index: 999;
`;
document.body.appendChild(botonArriba);

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    botonArriba.style.display = 'block';
  } else {
    botonArriba.style.display = 'none';
  }
});

botonArriba.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});