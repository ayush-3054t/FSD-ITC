
// const nameInput = document.getElementById('nameInput');
// const submitBtn = document.getElementById('submitBtn');
// const namesContainer = document.getElementById('namesContainer');

// submitBtn.addEventListener('click', () => {
//     const name = nameInput.value;

//     if (name.trim() !== '') {
//         const newNameElement = document.createElement('p');

//         newNameElement.textContent = `Hello, ${name}!`;
//         newNameElement.classList.add('name-entry');

//         namesContainer.appendChild(newNameElement);
//     }
// });

// const div=document.getElementsByTagName('div');
// div[0].innerText="Hello";"
// div[0].style.color="red";
// div[0].style.backgroundColor="yellow";
// console.log(div);

// const container=document.getElementsByClassName('container');
// //container[0].innerHTML = '<h2>Hello World</h2>';
// //console.log(container);
// const h2=document.createElement('h2');
// h2.innerHTML="Hello World";
// h2.style.color="red";
// h2.innerText='Hello World';
// container[0].appendChild(h2);
// console.log(h2);

// const img=document.createElement('img');
// img.src="https://th.bing.com/th/id/OIP.mdKJwxRwCN2eGwRGig4l6wHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
// img.setAttribute("height","200px");
// img.setAttribute("width","200px);
// console.log(img);
// document.body.appendChild(img);


// const button=document.getElementById('btn');
// console.log("button")
// function msg(){
//     console.log("Hey");
// }
// button.addEventListener('click',msg);


// const button=document.getElementById('btn');
// console.log("button")
// function msg(){
//     console.log("ABES Engineering College");
// }
// button.addEventListener('click',msg);
// button.style.backgroundColor="red";
// button.style.color="white";
// button.style.padding="10px 20px";




// const div=document.getElementsByTagName("div");

// div[0].innerText="Hello";
// div[0].style.color='red';
// div[0]. style.backgroundColor='green';
// console.log(div);

// const container=document.getElementsByClassName("container");

// // container[0].innerHTML="<h2 style.color:'red'> Hello </h2>"
// // console.dir(container);

// const h2=document.createElement('h2');
// h2.innerText="ABES ENGINEERING COLLEGE";
// h2.style.color="maroon";
// h2.style.backgroundColor="yellow";
// console.log(h2);
// container[0].appendChild(h2);

// const img=document.createElement('img');
// img.src='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg';
// img.setAttribute("height", "200px");
// img.setAttribute("width", "300px");
// console.log(img);
// container[0].appendChild(img);

// const button=document.getElementById('btn');
// console.log(button);
// function msg(){
//   return "Hi, i am working on MERN stack."
// }


// const h3 = document.createElement('h3');
// h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
// h3.style.color = "yellow";
// h3.style.backgroundColor = "maroon";
// container[0].appendChild(h3);

const container = document.getElementsByClassName("container")[0];

    // Add heading
    const h2 = document.createElement('h2');
    h2.innerText = "ABES ENGINEERING COLLEGE";
    h2.style.color = "maroon";
    h2.style.backgroundColor = "yellow";
    h2.style.padding = "10px";
    h2.style.borderRadius = "5px";
    container.appendChild(h2);

    // Add image
    const img = document.createElement('img');
    img.src = 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg';
    img.setAttribute("height", "200px");
    img.setAttribute("width", "300px");
    img.style.marginTop = "10px";
    container.appendChild(img);

    // Button functionality
    const button = document.getElementById('btn');
    button.addEventListener('click', msg);

    function msg() {
      const h3 = document.createElement('h3');
      h3.innerText = "ABES ENGINEERING COLLEGE"; // ✅ fixed text
      h3.style.color = "yellow";
      h3.style.backgroundColor = "maroon";
      h3.style.padding = "8px";
      h3.style.borderRadius = "5px";
      h3.style.marginTop = "15px";
      container.appendChild(h3);
    }