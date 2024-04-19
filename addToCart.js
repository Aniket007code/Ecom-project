import { getCartProductFromLS } from "./getCartProductLS.js";

export const addToCart = (event , id, stock) => {
    
   let arrLocalStorageProduct = getCartProductFromLS();

   const currentProdElem = document.querySelector(`#card${id}`)
//    console.log(currentProdElem);

 let quantity = currentProdElem.querySelector(".product-quantity").innerText ;
//  console.log(quantity);
 let price = currentProdElem.querySelector(".current-price").innerText ;
//  console.log(price , quantity);

 price = price.replace("₹", "")

 price = Number(quantity * price);

 quantity = Number(quantity);

 arrLocalStorageProduct.push({id,quantity,price})
 localStorage.setItem("cartProductLS",arrLocalStorageProduct)

//  let price = document.querySelector(".")
}