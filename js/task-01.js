//czesc 1 - Policzy i wyświetli w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.

const ProductById = document.querySelector("#categories");
//console.log(ProductById);

const ProductNameByTag = ProductById.querySelectorAll(".item");

console.log("Number of categories:" + ProductNameByTag.length);

//czesc 2 - Dla każdego elementu li.item na liście ul#categories, 
//znajdzie i wyświetli w konsoli tekst tytułu elementu (tagu <h2>) 
//oraz liczbę elementów w kategorii (wszystkie <li>, w nim zagnieżdżone).

const AllCategoryName = ProductById.querySelectorAll("h2");

//console.log(AllCategoryName);
//console.log(ProductNameByTag);

const CategoryLength = ProductById.querySelectorAll("ul");
//console.log(CategoryLength);

console.log("Category:"+ AllCategoryName[0].innerHTML);
console.log("Elements:" + CategoryLength[0].querySelectorAll("li").length);

console.log("Category:"+ AllCategoryName[1].innerHTML);
console.log("Elements:" + CategoryLength[1].querySelectorAll("li").length);

console.log("Category:"+ AllCategoryName[2].innerHTML);
console.log("Elements:" + CategoryLength[2].querySelectorAll("li").length);





