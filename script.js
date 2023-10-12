// Replace 'YOUR_API_KEY' with your actual Sellix API key
const apiKey = 'YOUR_API_KEY';

// API endpoint to fetch products
const apiUrl = 'https://api.sellix.io/v1/products';

const productList = document.getElementById('productList');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

function displayProducts(products) {
  loading.style.display = 'none';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product', 'shadow-sm', 'rounded');
    productElement.innerHTML = `
      <h3 class="mb-3">${product.title}</h3>
      <p class="mb-1">Price: ${product.price} ${product.currency}</p>
      <p class="mb-1">Stock: ${product.stock}</p>
      <p class="mb-0">${product.description}</p>
    `;
    productList.appendChild(productElement);
  });
}

async function fetchAndDisplayProducts() {
  try {
    const products = await fetchProducts();
    displayProducts(products);
  } catch (error) {
    loading.style.display = 'none';
    error.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayProducts();
});
