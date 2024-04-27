import products from "./api/products.json" with { type: "json" }
import { fetchQunatityFromCartLs } from "./fetchQunatityFromCartLs.js"
import { getCartProductFromLS } from "./getCartProductLS.js"
import { incrementDecrementCart } from "./incrementDecrementCart.js"
import { removeProductFromCart } from "./removeProductFromCart.js"
import { updateCartProductTotal } from "./updateCartProductTotal.js"


let cartProducts = getCartProductFromLS()

let filterProducts = products.filter((curProd)=> {
    return cartProducts.some((curElem) => curElem.id === curProd.id)   
    //api mai sare products hay and cartproducts mai jo add kiya hay wo hay so agar hum api k products ko carts k products id
    //  de match karte hay to apne ko cart k products ki value miljayege filter hoke
})


console.log(filterProducts);


const productCartTemplate = document.querySelector("#product-cart-template");
const cartElement = document.querySelector(".productCartContainer")

const showCartProducts = () => {
    filterProducts.forEach((curProd) => {
        const {category, id, image, name, stock, price} = curProd;

        let productClone = document.importNode(productCartTemplate.content, true);

        const lsActualData = fetchQunatityFromCartLs(id, price)

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

        productClone.querySelector(".category").textContent = curProd.category;
        productClone.querySelector(".product-img-cart").src = curProd.image
        productClone.querySelector(".product-name").textContent = curProd.name
        productClone.querySelector(".productPrice").textContent = lsActualData.price
        productClone.querySelector(".product-quantity").textContent = lsActualData.quantity


        productClone.querySelector(".removeToCartBtn").addEventListener("click",function(){
            // console.log("remove btn");
            removeProductFromCart(id)
        })

        productClone
        .querySelector(".product-button-container")
        .addEventListener("click", (event) => {
          incrementDecrementCart(event, id, stock, price);
        });




        cartElement.appendChild(productClone);
        

    })
}

showCartProducts();

updateCartProductTotal()

