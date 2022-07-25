const categoriesRef = document.querySelector("#categories");
console.log("Number of categories:", categoriesRef.children.length);

const itemDescr = [...categoriesRef.children]
  .map(
    (item) => `Category: ${item.firstElementChild.textContent}
Elements:${item.lastElementChild.children.length}
`
  )
  .join("\n");

console.log(itemDescr);
