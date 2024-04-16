// import showProductContainer from "./main";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#product-template");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curprod) => {
    const { id, name, category, brand, price, stock, description, image } =
      curprod;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".category").textContent = curprod.category;
    
    productClone.querySelector(".product-name").textContent = curprod.name;
    productClone.querySelector(".product-desc").textContent = curprod.description;
    productClone.querySelector(".current-price").textContent = `₹ ${curprod.price}`;
    productClone.querySelector(".Actual-price").textContent = `₹ ${curprod.price * 4}`;
    productClone.querySelector(".product-stocks").textContent = curprod.stock
    productClone.querySelector(".product-img").src = curprod.image;


    //  productClone.querySelector(".product-desc").textContent = description

    productContainer.append(productClone);
  });
};
