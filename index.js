const productBox = document.querySelector(".product-box");

const productsInCart = [];


/* Создание корзины */

const boxContent = document.querySelector(".product-box__content");
const topHeadElement = document.createElement("h2");
topHeadElement.classList.add("top-head__heading");
topHeadElement.classList.add("center");
topHeadElement.textContent = "Cart Items";
boxContent.appendChild(topHeadElement);
function updateCartVisibility() {
  if (productsInCart.length === 0) {
    boxContent.style.display = "none";
  } else {
    boxContent.style.display = "block";
  }
}
updateCartVisibility()

const cartEl = document.createElement("div");
cartEl.classList.add("cart");
cartEl.classList.add("center");
boxContent.appendChild(cartEl);

const cartContentProductBoxEl = document.createElement("div");
cartContentProductBoxEl.classList.add("cart-content__product-box");
cartEl.appendChild(cartContentProductBoxEl);

const cartContentProductsEl = document.createElement("div");
cartContentProductsEl.classList.add("cart-content__products");
cartContentProductBoxEl.appendChild(cartContentProductsEl);

/* Конец создания корзины */

products.forEach(function (product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product");
  productBox.appendChild(productItem);

  const imgBox = document.createElement("div");
  imgBox.classList.add("product__image-box");
  productItem.appendChild(imgBox);

  const cartButton = document.createElement("button");
  cartButton.classList.add("product__cart-button");
  cartButton.textContent = "Add to Сart";
  imgBox.appendChild(cartButton);

  /* Добавление в корзину */

  cartButton.addEventListener("click", function (e) {
    if (productsInCart.includes(product)) {
      alert("Товар уже добавлен в корзину");
      return;
    }
    productsInCart.push(product);
    alert("Товар добавлен в корзину");
    console.log(productsInCart);
    updateCartVisibility();

    /* Создание карточки */

    const cartContentProductEl = document.createElement("div");
    cartContentProductEl.classList.add("cart-content__product");
    cartContentProductsEl.appendChild(cartContentProductEl);

    const cartContentProductContentEl = document.createElement("div");
    cartContentProductContentEl.classList.add("cart-content__product-content");
    cartContentProductEl.appendChild(cartContentProductContentEl);

    const cartContentCloseCardEl = document.createElement("div");
    cartContentCloseCardEl.classList.add("cart-content__close_card");
    cartContentProductContentEl.appendChild(cartContentCloseCardEl);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("viewBox", "0 0 18 18");
    svg.setAttribute("fill", "none");
    svg.classList.add("close-icon-svg");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
    );
    path.setAttribute("fill", "#575757");
    svg.appendChild(path);
    cartContentCloseCardEl.appendChild(svg);

    const imgEl = document.createElement("img");
    imgEl.classList.add("cart-content__product-img");
    imgEl.src = `img_index/Item_${product.id}.png`;
    imgEl.alt = "product_picture";
    cartContentProductContentEl.appendChild(imgEl);

    const cartContentProductInfoEl = document.createElement("div");
    cartContentProductInfoEl.classList.add("cart-content__product-info");
    cartContentProductContentEl.appendChild(cartContentProductInfoEl);

    const cartContentProductTitleEl = document.createElement("a");
    cartContentProductTitleEl.classList.add("cart-content__product-title");
    cartContentProductTitleEl.href = "#";
    cartContentProductTitleEl.textContent = product.itemName;
    cartContentProductInfoEl.appendChild(cartContentProductTitleEl);

    const cartContentProductDescriptionEl = document.createElement("p");
    cartContentProductDescriptionEl.classList.add(
      "cart-content__product-description"
    );
    cartContentProductDescriptionEl.textContent = "Price:  ";
    cartContentProductInfoEl.appendChild(cartContentProductDescriptionEl);

    const cartContentProductPriceEl = document.createElement("span");
    cartContentProductPriceEl.classList.add("cart-content__product-price-red");
    cartContentProductPriceEl.textContent = product.itemPrice;
    cartContentProductDescriptionEl.appendChild(cartContentProductPriceEl);

    const cartContentProductDescriptionColorEl = document.createElement("p");
    cartContentProductDescriptionColorEl.classList.add(
      "cart-content__product-description"
    );
    cartContentProductDescriptionColorEl.textContent = "Color: Red";
    cartContentProductInfoEl.appendChild(cartContentProductDescriptionColorEl);

    const cartContentProductDescriptionSizeEl = document.createElement("p");
    cartContentProductDescriptionSizeEl.classList.add(
      "cart-content__product-description"
    );
    cartContentProductDescriptionSizeEl.textContent = "Size: XI";
    cartContentProductInfoEl.appendChild(cartContentProductDescriptionSizeEl);

    const cartContentProductDescriptionQuantityEl = document.createElement("p");
    cartContentProductDescriptionQuantityEl.classList.add(
      "cart-content__product-description"
    );
    cartContentProductDescriptionQuantityEl.classList.add(
      "cart-content__product-description_quantity"
    );
    cartContentProductDescriptionQuantityEl.textContent = "Quantity: ";
    cartContentProductInfoEl.appendChild(
      cartContentProductDescriptionQuantityEl
    );

    const cartContentQuantityInputEl = document.createElement("input");
    cartContentQuantityInputEl.classList.add("cart-content__quantity-input");
    cartContentQuantityInputEl.type = "number";
    cartContentQuantityInputEl.value = "2";
    cartContentQuantityInputEl.min = "1";
    cartContentProductDescriptionQuantityEl.appendChild(
      cartContentQuantityInputEl
    );

    /* Конец создания карточки */

    /* Удаление из корзины */
    cartContentCloseCardEl.addEventListener("click", () => {
      const productIndex = productsInCart.indexOf(product);
      if (productIndex > -1) {
        productsInCart.splice(productIndex, 1);
        updateCartVisibility();
        console.log(productsInCart);
      }
      cartContentProductEl.remove();
      alert("Товар удален из корзины.");
    });
  });

  /* Конец добавления в корзину */

  const cartIcon = document.createElement("img");
  cartIcon.classList.add("image__cart-icon");
  cartIcon.src = "img/Cart_on_button.svg";
  cartIcon.alt = "Cart_icon";
  cartButton.appendChild(cartIcon);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("product__image-container");
  imgBox.appendChild(imgContainer);

  const productImage = document.createElement("img");
  productImage.classList.add("product__image");
  productImage.src = `img_index/Item_${product.id}.png`;
  productImage.alt = "Product_image";
  imgContainer.appendChild(productImage);

  const imgOverlay = document.createElement("div");
  imgOverlay.classList.add("product__image-overlay");
  imgContainer.appendChild(imgOverlay);

  const productContent = document.createElement("div");
  productContent.classList.add("product__content");
  productItem.appendChild(productContent);

  const productName = document.createElement("a");
  productName.classList.add("product__name");
  productName.href = "#";
  productName.textContent = product.itemName;
  productContent.appendChild(productName);

  const productText = document.createElement("p");
  productText.classList.add("product__text");
  productText.textContent = product.itemDescription;
  productContent.appendChild(productText);

  const productPrice = document.createElement("p");
  productPrice.classList.add("product__price");
  productPrice.textContent = product.itemPrice;
  productContent.appendChild(productPrice);
});
