import { getCartProductFromLS } from "./getCartProductLS.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrementCart = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".product-quantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCartProductFromLS();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "incrementBtn") {
    if (quantity < stock) {
      quantity = quantity + 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "decrementBtn") {
    if (quantity > 1) {
      quantity = quantity - 1;
    }
  }

  localStoragePrice = price * quantity;

  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let modifyCart = { id, quantity, price: localStoragePrice };
  // Use map to create a new array with the updated product
  const updatedProducts = localCartProducts.map((curProd) => {
    if (curProd.id === id) {
      return modifyCart; // Return the modified product
    } else {
      return curProd; // Return the original product
    }
  });

  //   console.log(updatedProducts);

  localStorage.setItem("cartProductLS", JSON.stringify(updatedProducts));

  productQuantity.textContent = quantity;
  productPrice.innerText = localStoragePrice;

  updateCartProductTotal();
};
