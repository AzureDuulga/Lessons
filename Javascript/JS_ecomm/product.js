const categoryChoose = document.getElementById("categoryChoose");
let allCategory = null;
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const isSpecial = document.getElementById("isSpecial");

//Category
const displayCategory = () => {
  allCategory.forEach((category) => {
    const topSingleCatg = `
      <option class="text-capitalize" >${category}</option>`;
    categoryChoose.innerHTML += topSingleCatg;
  });
};

const getCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  allCategory = data;
  displayCategory();
};
getCategories();

const postProduct = () => {
  console.log(productName.value);
  fetch("http://192.168.1.220:4040/product"),
    {
      method: "POST",
      header: { "Content-Type": "applicatio/json" },
      body: JSON.stringify({
        title: "Duulga",
        // title: productName.value,
        category: categoryChoose.value,
        price: productPrice.value,
        imageURL:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        isSprecial: "false",
        days: "Monday",
        // days: daysStr.substring(0, daysStr.length - 1),
      }),
    };
};
postProduct();
