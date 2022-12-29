//Variables
const tableList = document.getElementById("tbody");
let allProducts = null;

const displayProduct = () => {
  allProducts.forEach((product, idx) => {
    const productItem = `
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.title}</td>
    <td>$${product.price}</td>
    <td class="text-capitalize">${product.category}</td>
    <td>${product.isSpecial}</td>
    <td>
    <button type="button" class="btn btn-primary">Засах</button>
    <button type="button" class="btn btn-danger">Устгах</button>
    </td>
  </tr>`;
    tableList.innerHTML += productItem;
  });
};

const getProducts = async () => {
  const response = await fetch("http://192.168.1.220:4040/product");
  const data = await response.json();
  console.log(data);
  allProducts = data.product;
  displayProduct();
};
getProducts();
