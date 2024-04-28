import { getCartProductFromLS } from "./getCartProductLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  //    console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".product-quantity").innerText;
  //  console.log(quantity);
  let price = currentProdElem.querySelector(".current-price").innerText;
  //  console.log(price , quantity);

  price = price.replace("₹", "");
  let existingProd = arrLocalStorageProduct.find((curProd) => {
    return curProd.id === id;
  });

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(quantity * price);

    let modifyCart = { id, quantity, price };
    // Use map to create a new array with the updated product
    const updatedProducts = arrLocalStorageProduct.map((curProd) => {
      if (curProd.id === id) {
        return modifyCart; // Return the modified product
      } else {
        return curProd; // Return the original product
      }

    });

    console.log(updatedProducts);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedProducts));
    showToast("add", id)

  }

  if (existingProd) {
    // alert("duplicate hay");
    return false;
  }

  price = Number(quantity * price);

  quantity = Number(quantity);

  let updateCart = { id, quantity, price };

  arrLocalStorageProduct.push(updateCart);
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  showToast("add", id)


  //  let price = document.querySelector(".")
};
