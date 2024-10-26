const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

function loadProductDetails() {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('product-details').innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" class="img-fluid"/>
            <p>${product.description}</p>
            <p><strong>Preço:</strong> R$${product.price.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Produto não encontrado!</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);
