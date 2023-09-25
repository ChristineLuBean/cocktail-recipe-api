# Cocktail Recipes Web Application
A website offering numerous cocktail recipes from the CocktailDB API, simplifying the discovery and preparation of various beverages.

**Link to project:**

![screenshot of cocktail recipes web application](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

- **Refreshing the Recipe**: The `refreshRecipe()` function is responsible for clearing the selected cocktail name, image, ingredients, and instructions when you want to start fresh.

- **Handling Drink Not Found**: In the event that a drink is not found, the `notFound()` function is called. This function first refreshes the recipe and then displays the message "Drink not found."

- **Toggling Visibility**: The `hiddenToggle()` function toggles the visibility of the cocktail carousel and cocktail recipe sections, allowing a smooth transition between these views.

- **Displaying a Recipe**: The `displayRecipe(data)` function takes data retrieved from the CocktailDB API and populates the webpage with the selected cocktail's name, image, ingredients, and instructions. It also handles dynamic creation of ingredient list items.

- **Fetching Data**: The `getFetch()` function is triggered by a button click event. It fetches data from the CocktailDB API based on the user's input, toggles visibility, and either displays the recipe or shows a "Drink not found" message.

- **Initializing on Page Load**: When the page loads, it fetches initial data from the CocktailDB API to populate the HTML elements with cocktail names and images in the carousel.

## Lessons Learned:

1. **Dynamic Ingredient Lists**: I learned about the implementation of dynamically generated lists. This feature allows the application to adapt to varying cocktail recipes and their ingredients, making it versatile and user-friendly.

2. **DOM Manipulation**: I gained expertise in manipulating the Document Object Model (DOM) to achieve dynamic behavior. Specifically, I learned how to add and remove child elements from a parent element, enabling smooth updates to the user interface.

3. **Flexibility and Adaptability**: Working on this project reinforced the importance of designing code that can adapt to changing content and requirements. The ability to handle a variable number of ingredients demonstrates the flexibility of the application.

These lessons not only enhanced my technical skills but also deepened my understanding of creating user-friendly and interactive web applications.
