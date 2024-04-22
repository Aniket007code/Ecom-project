const addtocartbtn = document.querySelector(".addtocartbtn");

export const updateCartValue = (cartProduct) => {
  return (addtocartbtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartProduct.length}`);
};
