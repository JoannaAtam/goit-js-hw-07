const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

const ingredientsList = document.getElementById('ingredients');

//const FirstElementOfList = document.createElement("li")
//FirstElementOfList.textContent = ingredients[0];
//console.log(FirstElementOfList);


const items = [];

// Iterujemy przez każdy składnik z tablicy ingredients
ingredients.forEach(ingredient => {

  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  items.push(li);
})
console.log(items);

ingredientsList.append(...items);