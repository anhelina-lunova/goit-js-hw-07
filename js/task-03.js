const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery"); //отримує посилання на елемент списку галереї зображень з класом gallery

const galleryItems = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`) //проходимо по кожному об'єкту масиву images і створюємо розмітку для кожного зображення у вигляді рядка, де властивості url та alt об'єкта використовуються як атрибути для тегу <img>
  .join(""); //об'єднуємо рядки зображень у один рядок розмітки

galleryList.insertAdjacentHTML("beforeend", galleryItems); //на елементі galleryList додаємо згенерований рядок розмітки в кінець списку галереї зображень
