let cities;
let zoomLevel = 1;
let zoomInBtn, zoomOutBtn, zoomPercentage, zoomInput;
let xoffset = 0;
let yoffset = 0; // Store the y-offset for panning
let colors = {}; // Object to store colors for countries

function preload() {
  cities = loadTable("worldcities.csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 150);
  noStroke();

  // Function to generate a random color
  function randomColor() {
    return color(random(255), random(255), random(255));
  }

  // Assign a random color to each unique country
  let uniqueCountries = Array.from(new Set(cities.getColumn("country")));
  for (let i = 0; i < uniqueCountries.length; i++) {
    colors[uniqueCountries[i]] = randomColor();
  }

  zoomInBtn = select('#zoomInBtn');
  zoomOutBtn = select('#zoomOutBtn');
  zoomPercentage = select('#zoomPercentage');
  zoomInput = select('#zoomInput');

  zoomInBtn.mousePressed(zoomIn);
  zoomOutBtn.mousePressed(zoomOut);
  zoomInput.input(changeZoomLevel);
  frameRate(60);
}

function draw() {
  background(0);
  translate(xoffset, yoffset);
  scale(10 * zoomLevel);
  for (let i = 0; i < cities.getRowCount(); i++) {
    let country = cities.getString(i, "country");
    let latitude = cities.getNum(i, "lat");
    let longitude = cities.getNum(i, "lng");
    setXY(latitude, longitude, colors[country]); // Assign the country's color
  }

  zoomPercentage.html("Zoom: " + (zoomLevel * 100).toFixed(0) + "%");
}

function setXY(lat, lng, col) {
  let x = map(lng, -180, 180, 0, width);
  let y = map(lat, 90, -90, 0, height);
  fill(col);
  ellipse(x, y, 0.25, 0.25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function zoomIn() {
  zoomLevel += 0.1;
  zoomLevel = constrain(zoomLevel, 0.1, 10);
  zoomInput.value(zoomLevel);
}

function zoomOut() {
  zoomLevel -= 0.1;
  zoomLevel = constrain(zoomLevel, 0.1, 10);
  zoomInput.value(zoomLevel);
}

function changeZoomLevel() {
  zoomLevel = float(zoomInput.value());
  zoomLevel = constrain(zoomLevel, 0.1, 10);
}

function mouseDragged() {
  if (mouseButton === LEFT) {
    xoffset += mouseX - pmouseX;
    yoffset += mouseY - pmouseY;
  }
}
