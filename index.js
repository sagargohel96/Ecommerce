const buttons = document.querySelectorAll(".pro a i");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    product();
  });
});
function product() {
  const price = document.querySelector("#price").innerText.slice(1, 3);
  const img = document.querySelector("#img").src;
  const productName = document.querySelector("#itemName").innerText;
  const productDetails = {
    productVal: `${price}`,
    imgUrl: `${img}`,
    productNam: `${productName}`,
  };

  console.log(productDetails);
}
