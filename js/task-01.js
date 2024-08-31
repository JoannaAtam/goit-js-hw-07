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