console.log("Ecommerce");
// All variables
const productList = document.getElementsByClassName("productList")[0];
let allProducts = null;

const displayProduct = () => {
  allProducts.forEach((product) => {
    const item = `<div class="col-3 Cards p-2 rounded ">
                        <img
                        src="${product.thumbnail}"
                        alt=""
                    />
                    <h3 class="text-center my-3">${product.title}</h3>
                    <h6 class="fw-bold text-start">$${product.price}</h6>
                    <p class="text-start text-secondary descriptionHeight">
                    ${product.description}
                    </p>
                    <div class="row center">
                        <div class="col text-secondary text-start">
                        <i class="bi bi-star-fill text-black"></i>
                        <i class="bi bi-star-fill text-black"></i>
                        <i class="bi bi-star-fill text-black"></i>
                        <i class="bi bi-star-fill text-black"></i>
                        <i class="bi bi-star"></i>&nbsp
                        ${product.rating}
                    </div>
                        <div class="col text-end">
                        <button
                            class="text-primary border border-primary bg-white"
                            id="watchBtn"
                        >
                            <i class="bi bi-heart"></i>
                            Watch
                        </button>
                        </div>
                    </div>
                    </div>`;
    productList.innerHTML += item;
  });
};

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  console.log(allProducts);
};

getProducts();
