const productById = document.querySelector("#categories");
const productNameByTag = productById.querySelectorAll(".item");

console.log("Number of categories: " + productNameByTag.length);

productNameByTag.forEach(item => {
    const categoryName = item.querySelector("h2").innerHTML;
    const elementsCount = item.querySelectorAll("li").length;
    
    console.log("Category: " + categoryName);
    console.log("Elements: " + elementsCount);
});





