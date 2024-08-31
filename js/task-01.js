//const productById = document.querySelector("#categories");
//const productNameByTag = productById.querySelectorAll(".item");

///console.log("Number of categories: " + productNameByTag.length);

//productNameByTag.forEach(item => {
    //const categoryName = item.querySelector("h2").innerHTML;
    //const elementsCount = item.querySelectorAll("li").length;
    //console.log("Category: " + categoryName);
    //console.log("Elements: " + elementsCount);
//});

const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + categories.length);

const categoryDetails = Array.from(categories).map(category => {
    const title = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;
    return { title, elementsCount };
});

categoryDetails.forEach(detail => {
    console.log("Category: " + detail.title);
    console.log("Elements: " + detail.elementsCount);
});
