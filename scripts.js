const products = [
    {
        id: 1,
        name: "Product 1",
        image: "images/product1.jpg",
        price: "$10.00",
        description: "Description for product 1"
    },
    {
        id: 2,
        name: "Product 2",
        image: "images/product2.jpg",
        price: "$20.00",
        description: "Description for product 2"
    },
    // Add more products as needed
];

function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    featuredProductsContainer.innerHTML = products.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="product-detail.html?id=${product.id}">View Details</a>
        </div>
    `).join('');
}

function loadAllProducts() {
    const allProductsContainer = document.getElementById('all-products');
    allProductsContainer.innerHTML = products.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="product-detail.html?id=${product.id}">View Details</a>
        </div>
    `).join('');
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        const productDetailContainer = document.getElementById('product-detail');
        productDetailContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        `;
    }
}

// Determine which page is being loaded and call appropriate function
if (document.getElementById('featured-products')) {
    loadFeaturedProducts();
}

if (document.getElementById('all-products')) {
    loadAllProducts();
}

if (document.getElementById('product-detail')) {
    loadProductDetail();
}
