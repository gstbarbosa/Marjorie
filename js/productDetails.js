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



function loadProductDetails() {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('product-details').innerHTML = `
      
    
        <div class="image-container mt-3">
            <img src="${product.image}" class="img-fluid main-image" alt="${product.name}"/>
            <div class="secondary-images">
                ${product.secondaryImages.map(img => `<img src="${img}" class="img-thumbnail" alt="Imagem secundária"/>`).join('')}
            </div>
        </div>
        <div class="container mt-3">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Preço:</strong> R$${product.price.toFixed(2)}</p>
        </div>
    `;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Produto não encontrado!</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetails);

// Função para selecionar o tamanho
function selectSize(size) {
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
    });

    const selectedSize = document.getElementById(`size-${size}`);
    selectedSize.classList.add('selected');
}