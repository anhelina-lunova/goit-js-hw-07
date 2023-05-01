const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients"); //знаходимо елемент списку інгредієнтів з ідентифікатором #ingredients і зберігаємо його у змінну

//створюємо масив елементів
const ingredientsElements = ingredients.map((ingredient) => {
  const li = document.createElement("li"); //для кожного елемента масиву ingredients створюємо новий елемент <li>
  li.textContent = ingredient; //встановлюємо текстовий вміст
  li.classList.add("item"); //додаємо клас item
  return li; //повертаємо його як результат функції
});

ingredientsList.append(...ingredientsElements); //додаємо всі елементи до списку ul#ingredients через метод append(), передаємо масив елементів як список аргументів до цього методу
