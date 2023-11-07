let menuItems;
let selectedItem = null; // To store the selected menu item

function preload() {
  menuItems = loadJSON("menu.json");
}

function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(255);
  displayMenu();
  
  if (selectedItem !== null) {
    displayDetails(selectedItem);
  }
}

function displayMenu() {
  for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems[i];
    let y = i * 60 + 20;

    fill(0);
    text(item.name, 50, y);
    text(item.price, 200, y);

    let itemImage = loadImage("images/" + item.image);
    image(itemImage, 10, y - 20, 30, 30);

    if (
      mouseX > 10 &&
      mouseX < 40 &&
      mouseY > y - 20 &&
      mouseY < y + 10
    ) {
      fill(0, 0, 255);
      rect(10, y - 20, 30, 30);
    }
  }
}

function displayDetails(item) {
  // Clear the menu screen
  clear();
  
  // Display details of the selected item
  textSize(24);
  text(item.name, 50, 50);
  textSize(16);
  text("Price: " + item.price, 50, 80);
  text("Ingredients: " + item.ingredients, 50, 110);
  text("Calories: " + item.calories, 50, 140);
  
  // Add a back button to return to the menu
  fill(0, 255, 0);
  rect(350, 500, 100, 40);
  fill(0);
  textSize(20);
  text("Back to Menu", 360, 525);
}

function mouseClicked() {
  if (selectedItem === null) {
    for (let i = 0; i < menuItems.length; i++) {
      let y = i * 60 + 20;
      if (
        mouseX > 10 &&
        mouseX < 40 &&
        mouseY > y - 20 &&
        mouseY < y + 10
      ) {
        selectedItem = menuItems[i];
      }
    }
  } else {
    if (mouseX > 350 && mouseX < 450 && mouseY > 500 && mouseY < 540) {
      // Clicked the back button to return to the menu
      selectedItem = null;
    }
  }
}
