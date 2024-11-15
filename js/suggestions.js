const container = document.getElementById('suggestions-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card'); 
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="product-suggestions.html?id=${product.id}" class="btn btn-primary">Ver detalhes</a>

    `;
    container.appendChild(card);
});

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
                        <a href="product-suggestions.html?id=${product.id}" class="btn btn-primary">Ver detalhes</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadProducts);
