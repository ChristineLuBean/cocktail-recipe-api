// Refreshes the recipe by clearing the selected cocktail name, image, ingredients, and instructions.
function refreshRecipe() {
  document.getElementById('selected-cocktail-name').innerText = '';
  document.getElementById('selected-cocktail-image').src = '';
  document.getElementById('ingredients').innerHTML = '';
  document.getElementById('instructions').innerText = '';
}

// Refreshes the recipe and updates the selected cocktail name if the drink is not found.
function notFound() {
  refreshRecipe()
  document.getElementById('selected-cocktail-name').innerText = 'Drink not found.';
}

// Toggles the visibility of the cocktail carousel and cocktail recipe.
function hiddenToggle() {
  document.getElementById('cocktail-carousel').classList.add('hidden')
  document.getElementById('cocktail-recipe').classList.remove('hidden')
}

// Displays a recipe on the webpage based on the provided data.
function displayRecipe(data) {
  const name = document.getElementById('selected-cocktail-name');
  const image = document.getElementById('selected-cocktail-image');
  const instructions = document.getElementById('instructions');
  const ingredients = document.getElementById("ingredients")

  refreshRecipe()
  name.innerText = data.drinks[0].strDrink;
  image.src = data.drinks[0].strDrinkThumb;
  for (let i = 1; data.drinks[0][`strIngredient${i}`] !== null; i++) {

    const listItemElement = document.createElement('li');
    listItemElement.textContent = data.drinks[0][`strMeasure${i}`] ? data.drinks[0][`strMeasure${i}`] + ' ' + data.drinks[0][`strIngredient${i}`] : '' + data.drinks[0][`strIngredient${i}`]
    console.log(listItemElement)
    ingredients.appendChild(listItemElement);
  }

  instructions.innerText = data.drinks[0].strInstructions;
}
// Fetches data from the specified URL and performs actions based on the response.
function getFetch() {
  const drinkValue = document.querySelector('input').value.toLowerCase();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkValue}`
  hiddenToggle()
  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data)
      if (drinkValue === null || drinkValue !== data.drinks[0].strDrink.toLowerCase()) {
        notFound()
      } else {
        displayRecipe(data)
      }
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}

// Event listener for button click
document.querySelector('button').addEventListener('click', getFetch);

//Fetches data from thecocktaildb API and populates the HTML elements with cocktail names and images.
window.onload = function() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < 6; i++) {
        document.querySelector(`#cocktail-name-${i}`).innerText = data.drinks[i].strDrink
        document.querySelector(`#cocktail-${i}`).src = data.drinks[i].strDrinkThumb
      }
    })
    .catch(err => {
      console.error(`Error: ${err}`);
    });
}
