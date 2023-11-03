let data;
let cityIndex = 0;
let backgroundImage;

//inspiration : https://zomasleep.com/blog/most-awake-city

function preload() {
  data = loadJSON('best_coffee_cities.json');
  backgroundImage = loadImage('assets/bg img.jpg'); // Load the background image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  displayCitiesInfo();
}

function displayCitiesInfo() {
  background(backgroundImage);
  
  
  // Calculate the center point of the canvas
  let centerX = width / 2;
  let centerY = height / 2;

  for (let i = 0; i < 3; i++) {
    let city = data.cities[cityIndex];
    let angle = TWO_PI / 3 * i; // Divide the ellipse into three equal parts
    let radius = min(width, height) * 0.4;
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;

    push(); // Push the current drawing state
    translate(x, y);
    ellipse(0, 0, 200, 200); // Draw an ellipse for each city

    fill("black");
    stroke('white');
    strokeWeight(4);
    ellipse(0, 0, 200, 200); // Draw an ellipse for each city
    fill("white");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(32);
    text(city.name, 0, 0);
    textSize(24);
    text(`Rating: ${city.rating}`, 0, 60);
    textSize(20);
    text(`Total Cafes: ${city.cafes}`, 0, 100);

// Draw the rank badge
fill(255, 0, 0); // Red color for rank badge
ellipse(-80, -80, 30, 30); // Rank badge circle
fill(255); // White text color
textSize(24);
text(i + 1, -80, -80); // Display the rank number


    pop(); // Restore the previous drawing state

    cityIndex = (cityIndex + 1) % data.cities.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





//Version2
// let data;
// let cityIndex = 0;
// let backgroundImage;

// function preload() {
//   data = loadJSON('best_coffee_cities.json');
//   backgroundImage = loadImage('assets/bg img.jpg'); // Load the background image
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textFont('Arial');
//   displayCitiesInfo();
//   noLoop();
// }

// function displayCitiesInfo() {
//   background(backgroundImage); // Set the background to the loaded image
//   fill(255); // White text color
//   textSize(32);

//   // Calculate the center point of the canvas
//   let centerX = width / 2;
//   let centerY = height / 2;

//   for (let i = 0; i < 3; i++) {
//     let city = data.cities[cityIndex];
//     let angle = TWO_PI / 3 * i; // Divide the ellipse into three equal parts
//     let radius = min(width, height) * 0.4;
//     let x = centerX + cos(angle) * radius;
//     let y = centerY + sin(angle) * radius;

//     push(); // Push the current drawing state
//     translate(x, y);
//     fill("black");
//     stroke('white');
// strokeWeight(4);
//     ellipse(0, 0, 200, 200); // Draw an ellipse for each city
//     fill("white");
//     noStroke();
//     textAlign(CENTER, CENTER);
//     text(city.name, 0, 0);
//     textSize(16);
//     text(`Rating: ${city.rating}`, 0, 40);
//     textSize(14);
//     text(`Total Cafes: ${city.cafes}`, 0, 70);
//     pop(); // Restore the previous drawing state

//     cityIndex = (cityIndex + 1) % data.cities.length;
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }





// let data;
// let cityIndex = 0;
// let backgroundImage;

// function preload() {
//   data = loadJSON('best_coffee_cities.json');
//   backgroundImage = loadImage('assets/bg img.jpg'); // Load the background image
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textFont('Arial');
//   displayCitiesInfo();
//   noLoop();
// }

// function displayCitiesInfo() {
//   background(backgroundImage); // Set the background to the loaded image
//   fill(255); // White text color
//   textSize(32);

//   for (let i = 0; i < 3; i++) {
//     let city = data.cities[cityIndex];
//     let x = (i + 1) * width / 4;
//     text(city.name, x, 50);
//     textSize(24);
//     text(`Rating: ${city.rating}`, x, 100);
//     textSize(20);
//     text(`Total Cafes: ${city.cafes}`, x, 150);

//     cityIndex = (cityIndex + 1) % data.cities.length;
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
