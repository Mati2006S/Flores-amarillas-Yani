const contenedorLluvia = document.querySelector('.lluvia-gatosol')
const rutaGatoSol = './Components/gatosol.png'

function crearGatoSol() {
  const gato = document.createElement('img')
  gato.className = 'gato-lluvia'
  gato.src = rutaGatoSol
  gato.alt = ''
  gato.style.setProperty('--posicion-x', `${Math.random() * 100}%`)
  gato.style.setProperty('--tamano', `${45 + Math.random() * 55}px`)
  gato.style.setProperty('--duracion', `${6 + Math.random() * 5}s`)
  gato.style.setProperty('--desplazamiento', `${-80 + Math.random() * 160}px`)

  gato.addEventListener('animationend', () => gato.remove())
  contenedorLluvia.appendChild(gato)
}

document.addEventListener('DOMContentLoaded', () => {
  if (!contenedorLluvia) return

  for (let i = 0; i < 16; i += 1) {
    window.setTimeout(crearGatoSol, i * 180)
  }

  window.setInterval(crearGatoSol, 700)
})