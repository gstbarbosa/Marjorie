const container = document.getElementById('suggestions-container');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card'); 
    card.innerHTML = `
    <div>
    <a href="product-suggestions.html?id=${product.id}" style="text-decoration:none";>

        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
              <img src="${product.image}" class="img-fluid"/>
              <p class="price"><strong></strong>R$${product.price.toFixed(2)}</p>
            </div>

        </div>
        </a>
    </div>

    `;
    container.appendChild(card);
});

  document.addEventListener('DOMContentLoaded', loadProducts);
