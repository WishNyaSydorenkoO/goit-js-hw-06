const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");
const ingredientsMarkup = ingredients.map((ingredient) => {
  let itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  return itemRef;
});
ingredientsRef.append(...ingredientsMarkup);
console.log(ingredientsRef);
