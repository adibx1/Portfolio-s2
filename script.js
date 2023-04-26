setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

// Exercise 1
function changeText() {
  document.getElementById("text").innerHTML = "This is the new text.";
}

// Exercise 2
function changeText2() {
  var inputText = document.getElementById("input").value;
  document.getElementById("text2").innerHTML = inputText;
}

// Exercise 3
function changeText3() {
  document.getElementById("text3").innerHTML = "You're hovering over the button.";
}

// Exercise 4
function addParagraph() {
  var newParagraph = document.createElement("p");
  var textNode = document.createTextNode("This is a new paragraph.");
  newParagraph.appendChild(textNode);
  document.body.appendChild(newParagraph);
}

// Exercise 5
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Exercise 6
function hideImage() {
  var image = document.getElementById("image");
  image.style.display = "none";
}

function getSaladIngs(veg1,veg2,veg3,veg4,veg5){
  const wholesalad = veg1 + " " + veg2 + veg3 + veg4 + veg5;
  return wholesalad
  }
  var x = getSaladIngs("tom","pot","spinach","walnuts","carrot");
  console.log(x)
  
  function turnBulbOn(){
      var image = document.getElementById('myImage');
      if (image.src.match('imgs/pic_bulboff.gif')){
      image.src='imgs/pic_bulbon.gif';
      image.alt='image 2'
  }
      else{
          image.src='imgs/pic_bulboff.gif'
          image.alt='image 1'
      }
  }