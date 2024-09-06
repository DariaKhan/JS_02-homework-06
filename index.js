const productBox = document.querySelector(".product-box");

products.forEach(function (product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product");
  productBox.appendChild(productItem);

  const productImage = document.createElement("img");
  productImage.classList.add("product__image");
  productImage.src = `img_index/Item_${product.id}.png`;
  productImage.alt = "Product_image";
  productItem.appendChild(productImage);

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
