const button = document.getElementById("btn");
const tableBody = document.getElementById("tbody");

async function getData() {
  const response = await fetch('https://dummyjson.com/products');
  return await response.json();
}


button.addEventListener("click", async () => {
  const data = await getData();
  const products = data.products;

  // Clear existing table rows
  tableBody.innerHTML = '';

  products.forEach(product => {
    const row = `
      <tr>
        <td>${product.title}</td>
        <td>${product.brand}</td>
        <td>${product.price}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
});
