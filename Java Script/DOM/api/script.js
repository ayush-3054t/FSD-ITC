// const button = document.getElementById('btn');
// const disp = document.getElementById('disp');

// async function fetchData() {
//   disp.innerHTML = "<h2>Data is loading...</h2>";

//   const response = await fetch("https://dummyjson.com/recipes");
//   const jsonData = await response.json();

//   console.log(jsonData.recipes[0].name);

//   disp.innerHTML = `<h2>${jsonData.recipes[0].name}</h2>`;
// }

// button.addEventListener('click', fetchData);




    async function getRecipes() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        const container = document.getElementById("recipes");
        container.innerHTML = "";

        data.recipes.slice(0, 6).forEach(recipe => { 
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p><b>Cuisine:</b> ${recipe.cuisine}</p>
            <p><b>Prep Time:</b> ${recipe.prepTimeMinutes} min</p>
          `;
          container.appendChild(card);
        });
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
     }

   const(sum,multiplication)=require()