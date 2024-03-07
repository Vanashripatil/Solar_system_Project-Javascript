const sunX = window.innerWidth / 2 - 25;
const sunY = window.innerHeight / 2 - 25;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`
sun.style.top = `${sunY}px`

const mercury = {
  speed: 0.05,
  theta: 0,
  radius: 100,
  el: document.querySelector('.mercury')  
}

const venus = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 120,
  el: document.querySelector('.venus')  
}

const earth = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 150,
  el: document.querySelector('.earth')  
}

const mars = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 200,
  el: document.querySelector('.mars')  
}

const jupitor = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 250,
  el: document.querySelector('.jupitor')  
}

const saturn = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 300,
  el: document.querySelector('.saturn')  
}

const utranus = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 350,
  el: document.querySelector('.utranus')  
}

const neptune = {
  speed: Math.random() * 0.01,
  theta: Math.random() * 2 * Math.PI,
  radius: 400,
  el: document.querySelector('.neptune')  
}


const planet = [
  mercury, venus, earth, mars, jupitor, saturn, utranus, neptune
]

function update(planet) {
  planet.theta += planet.speed;
  planet.el.style.left = `${Math.cos(planet.theta) 
    * planet.radius + sunX + 25}px`
  planet.el.style.top = `${Math.sin(planet.theta) 
    * planet.radius + sunY + 25}px`
}

setInterval(() => {
   planet.forEach(update)
}, 100)