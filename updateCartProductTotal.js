import { getCartProductFromLS } from "./getCartProductLS.js";

export const updateCartProductTotal = () => {

  let subTotalPrice =  document.querySelector(".subTotalPrice");
  let finalTotalPrice = document.querySelector(".finalTotalPrice")
  let localcartProducts = getCartProductFromLS();

  let initialValue = 0;

  let totalProductPrice = localcartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);

  console.log(totalProductPrice);

  subTotalPrice.innerText = `${totalProductPrice} ₹`;
  finalTotalPrice.innerText = `${totalProductPrice + 50} ₹`;
};
