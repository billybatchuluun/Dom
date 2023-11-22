// DOM easy tasks
// Change Text Content:
// Use document.getElementById() to get an element by its ID.
// Change the text content of that element using the textContent property.

var changeText = document.getElementById("text1");
changeText.innerHTML = "This is new text";

// Change Styling:
// Use document.querySelector() to select an element using a CSS selector.

var newText = document.querySelector("#text2");
newText.style.background = "blue";
newText.style.color = "white";

// Change the style of the selected element using the style property.
var changeStyle = document.getElementById("text3");
changeStyle.style.fontWeight = "bold";
console.log(changeStyle);

// Handle Click Events:
// Use document.getElementById() to get a button element.
// Attach a click event listener to the button that changes the text content of a paragraph.
const updateText = () => {
  var textUpdate = document.getElementById("text4");
  textUpdate.innerHTML = "This is new updated text";
};
const changeButton = document.getElementById("btn");
changeButton.addEventListener("click", updateText);

// Create and Append Elements:
// Use document.createElement() to create a new HTML element.
// Use appendChild() to append the new element to an existing one.
// Toggle Visibility:
// Use document.getElementById() to get an element.
// Toggle its visibility by changing the style.display property.
//  like 2
