console.log("Ecommerce");
// All variables
const productList = document.getElementsByClassName("productList")[0];
let allProducts = null;
let cartList = document.getElementById("cartList");
let cartProducts = [];
let myCartDiv = document.getElementById("myCartDiv");
let aside = document.getElementById("aside");

const displayProduct = () => {
  allProducts.forEach((product, idx) => {
    const productItem = `<div class="col-3 Cards p-2 rounded ">
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
                            onclick="addCart(${idx})"
                            class="text-primary border border-primary bg-white"
                            id="watchBtn">
                            <i class="bi bi-bag"></i>
                            Add to cart
                        </button>
                        </div>
                    </div>
                    </div>`;
    productList.innerHTML += productItem;
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

const addCart = (idx) => {
  console.log("Added to cart:", idx);
  cartProducts.push(allProducts[idx]);
  addToCart();
};

const addToCart = () => {
  console.log(cartProducts);
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `        <div class="row">
  <div class="col">
    <div class="row">
      <img
        id="cartZurag"
        src="${product.thumbnail}"
        alt="Poduct"
        class="col"
      />
      <p class="col">${product.title}</p>
    </div>
  </div>
  <div class="col">
    <div class="row text-center">
      <div class="col">$${product.price}</div>
      <div class="col">
        <div class="row">
          <div class="col">1</div>
          <div class="col">
            <div class="border">+</div>
            <div class="border">-</div>
          </div>
        </div>
      </div>
      <div class="col">${product.price}</div>
    </div>
  </div>
  <hr />
</div>`;
    cartList.innerHTML += cartItem;
  }
};

const showCart = () => {
  aside.classList.toggle("showCart");
};

//Niit sagsand bga buteegdehuunii niilber olhiin tuld cartProduct.reduce((total,value)=> {returen total+value},0)
