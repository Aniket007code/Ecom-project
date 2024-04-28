import { getCartProductFromLS } from "./getCartProductLS.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProductFromCart = (id) => {
  // console.log("remove product" + id);

  let cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  //   update localstorage with remaning prod

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    showToast("delete", id);
   

  }

  updateCartValue(cartProducts);
  updateCartProductTotal();

};
