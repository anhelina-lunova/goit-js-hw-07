const categoriesList = document.querySelector("#categories"); //знаходимо елемент списку категорій з ідентифікатором #categories і зберігаємо його у змінну
const items = categoriesList.querySelectorAll(".item"); //знаходимо всі елементи списку категорій з класом .item і зберігаємо їх у змінну

console.log(`Number of categories: ${items.length}`); //виводимо кількість елементів списку категорій у консоль

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent; //для кожного елементу списку категорій знаходимо заголовок категорії, використовуючи метод textContent
  const elementsCount = item.querySelectorAll("li").length; //знаходимо кількість елементів категорії
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
