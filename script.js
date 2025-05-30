const products = [
    {
        id: 1,
        title: "Vestido Floral",
        price: 129.90,
        category: "vestidos",
        image: ""
    },
    {
        id: 2,
        title: "Vestido Longo Elegante",
        price: 199.90,
        category: "vestidos",
        image: ""
    },
    {
        id: 3,
        title: "Saia Midi Plissada",
        price: 89.90,
        category: "saias",
        image: ""
    },
    {
        id: 4,
        title: "Saia Jeans",
        price: 79.90,
        category: "saias",
        image: ""
    },
    {
        id: 5,
        title: "Blusa Básica Branca",
        price: 49.90,
        category: "blusas",
        image: ""
    },
    {
        id: 6,
        title: "Blusa Manga Longa",
        price: 69.90,
        category: "blusas",
        image: ""
    },
    {
        id: 7,
        title: "Calça Jeans Skinny",
        price: 119.90,
        category: "calcas",
        image: ""
    },
    {
        id: 8,
        title: "Calça Wide Leg",
        price: 139.90,
        category: "calcas",
        image: ""
    }
];


// Elementos do DOM
const productsContainer = document.getElementById('products-container');
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryLinks = document.querySelectorAll('.category-link');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

// Exibir todos os produtos inicialmente
displayProducts(products);

// Função para exibir produtos
function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Filtrar produtos por categoria
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        if (category === 'todos') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    });
});

// Filtrar produtos por categoria nos links de navegação
categoryLinks.forEach(link => {
    link.addEventListener('click', () => {
        const category = link.dataset.category;
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });
});

// Buscar produtos
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    } else {
        displayProducts(products);
    }
});

// Modal de Login
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});



// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulação de login (em um sistema real, seria uma chamada à API)
    if (email && password) {
        const username = email.split('@')[0];
        loginBtn.textContent = username;
        loginModal.style.display = 'none';
    }
});