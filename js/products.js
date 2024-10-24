

const products = [
  { id: 1, name: "Produto 1", description: "Descrição do Produto 1", price: 100.00, image: "../images/camisachadrez1-removebg-preview.png" },
  { id: 2, name: "Produto 2", description: "Descrição do Produto 2", price: 150.00, image: "../images/logo.png" },
  { id: 3, name: "Produto 3", description: "Descrição do Produto 3", price: 200.00, image: "../images/logo.png" },  
  { id: 1, name: "Produto 1", description: "Descrição do Produto 1", price: 100.00, image: "../images/camisachadrez1-removebg-preview.png" },
  { id: 2, name: "Produto 2", description: "Descrição do Produto 2", price: 150.00, image: "../images/logo.png" },
  { id: 3, name: "Produto 3", description: "Descrição do Produto 3", price: 200.00, image: "../images/logo.png" },
  
];

function loadProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
      const productCard = `
          <div class="col-md-4">
              <div class="card mb-4">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                    <img src="${product.image}" class="img-fluid"/>
                      <p class="card-text">${product.description}</p>
                      <a href="product-details.html?id=${product.id}" class="btn btn-primary">Ver detalhes</a>
                  </div>
              </div>
          </div>
      `;
      productList.innerHTML += productCard;
  });
}

document.addEventListener('DOMContentLoaded', loadProducts);
