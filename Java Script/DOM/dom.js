// 1. SELECTING ELEMENTS FROM THE DOM
// Get the element with the class name "container". We use [0] because getElementsByClassName returns a collection.
const container = document.getElementsByClassName("container")[0];

// Get the element with the ID "btn".
const button = document.getElementById('btn');


// 2. CREATING AND ADDING INITIAL ELEMENTS WHEN THE PAGE LOADS

// --- Create the main heading ---
const h2 = document.createElement('h2'); // Create a new <h2> element
h2.innerText = "ABES ENGINEERING COLLEGE";    // Set its text content
h2.style.color = "maroon";                  // Apply CSS styles
h2.style.backgroundColor = "yellow";
h2.style.padding = "10px";
h2.style.borderRadius = "5px";
container.appendChild(h2); // Add the new <h2> inside the .container div


// --- Create the image ---
const img = document.createElement('img'); // Create a new <img> element
img.src = 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'; // Set the image source
img.setAttribute("height", "200px");     // Set height attribute
img.setAttribute("width", "300px");      // Set width attribute
img.style.marginTop = "15px";              // Add some space above the image
container.appendChild(img); // Add the new <img> inside the .container div
 setTimeout(() => {
    // This is the code that will be executed after the delay.
    // We are adding the image we created earlier into the container.
    container.appendChild(img);
  }, 2000);

// 3. ADDING EVENT LISTENER TO THE BUTTON

// This function will be executed every time the button is clicked.
function addMessage() {
  // Create a new <h3> element each time the function is called
  const h3 = document.createElement('h3');
  h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
  h3.style.color = "yellow";
  h3.style.backgroundColor = "maroon";
  h3.style.padding = "8px";
  h3.style.borderRadius = "5px";
  h3.style.marginTop = "15px";
  
  // Append the newly created <h3> to the container
  container.appendChild(h3);
}

// Attach the 'addMessage' function to the 'click' event of the button.
button.addEventListener('click', addMessage);