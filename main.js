import products from "./api/products.json" with { type: "json" }
import { showProductContainer } from "./homeProductCart.js";

// console.log(products);

// call the fn to display all the products as a card


showProductContainer(products);

export default showProductContainer;