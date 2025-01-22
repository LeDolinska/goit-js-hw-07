const allCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${allCategories.length}`);

for (let category of allCategories) {
    console.log(`Category: ${category.querySelector(".title").textContent}`);
    const list = category.querySelector(".list");
    console.log(`Elements: ${list.querySelectorAll(".list-item").length}`)
}
    

