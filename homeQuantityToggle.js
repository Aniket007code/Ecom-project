const homeQuantityToggle = (event,id,stock) => {
      const currentCardElement = document.querySelector(`#card${id}`);
      // console.log(currentCardElement);

      const productQuantity = currentCardElement.querySelector(".product-quantity")
      // console.log(productQuantity);

      let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1

      if(event.target.className === "incrementBtn"){
            if(quantity < stock) {
                  quantity = quantity + 1;
            } else if( quantity === stock){
                  quantity = stock;
            }
      }

      if(event.target.className === "decrementBtn"){
            if(quantity > 1){
            quantity = quantity - 1 ;

            }
      }

      productQuantity.innerText = quantity;
      productQuantity.setAttribute("data-quantity", quantity);
      return quantity
      




}


export default homeQuantityToggle;