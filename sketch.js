let cities;
let earth;
let r = 250;
let colors = {};
let rotationAngle = 0;

function preload() {
  earth = loadImage('Earth.jpg');
  cities = loadTable('worldcities.csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  let countryColor = Array.from(new Set(cities.getColumn('country')));
  for (let i = 0; i < countryColor.length; i++) {
    colors[countryColor[i]] = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(0);
  rotateY(rotationAngle);

  texture(earth);

  sphere(r);

  for (let row of cities.rows) {
    let lat = row.getNum('lat');
    let lon = row.getNum('lng');
    let country = row.getString('country');

    let angle = radians(lat);
    let phi = radians(lon) + PI - radians(90);
    let x = r * cos(angle) * cos(phi);
    let y = -r * sin(angle);
    let z = -r * cos(angle) * sin(phi);

    let h = 0.5; 

    push();
    translate(x, y, z);
    fill(colors[country]);
    sphere(h);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'ArrowLeft') {
    rotationAngle -= 0.2;
  } else if (key === 'ArrowRight') {
    rotationAngle += 0.2;
  }
}
