let planets = [];
let distanceTimeout;
let spacing = 140; // 300px spacing between planets

function preload() {
  loadJSON('planet_data.json', Planets);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  displayPlanets();
  textSize(24);
}

function Planets(data) {  
  for (let Data of data.planets) {
    let planet = {
      name: Data.name,
      distanceFromEarth: Data.distanceFromEarth,
      image: loadImage('images/' + Data.imageFilename)
    };
    planets.push(planet);
    
  }
}

function displayPlanets() {
  let x = 100;
  for (let i = 0; i < planets.length; i++) {
    image(planets[i].image, x, height / 2 - 50, 100, 100);
    textAlign(CENTER, TOP);
    fill(255);
    text(planets[i].name, x + 50, height / 2 + 60);
    x += spacing;
  }
}

function mousePressed() {
  let x = 100;
  for (let i = 0; i < planets.length; i++) {
    if (mouseX > x && mouseX < x + 100 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
      displayPlanetInfo(planets[i].name, planets[i].distanceFromEarth);
      break;
    }
    x += spacing;
  }
}

function displayPlanetInfo(planetName, distance) {
  
  textAlign(CENTER, TOP);
  fill(255);
  
  text('Distance from Earth to ' + planetName + ': ' + distance + ' million miles', width / 2, height - 130);
  setTimeout(() => {
    clearInfo();
  }, 1500); // Hide the information after 3 seconds
}

function clearInfo() {
  redraw(); // Redraw the planets and title to make them reappear
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
