interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageURL: string;
    department: string;
}

function getAllProducts(): void {
    fetch('/products', {
        method: 'GET',
    })
    .then(response => response.json())
    .then((data: Product[]) => {
        const productList = document.getElementById('product-list') as HTMLElement;
        productList.innerHTML = ''; 
        
     
        data.forEach(product => {
            productList.innerHTML += `
                <div class="product-card">
                    <img src="${product.imageURL}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                    <button onclick="addToCart('userId', '${product._id}')">Add to Cart</button>
                </div>`;
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
}

function GetProductByName(name: string) {
    
    const url = `/products/search?name=${name}`;

    fetch('http://localhost:3000/ProductRoutes/get-product-by-name')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Products found:', data);
        })
        .catch(error => {
            console.error('Error searching for products:', error);
        });
}

function FindProductByCheapest(): void {
    fetch('/products/cheapest', {
        method: 'GET',
    })
    .then(response => response.json())
    .then((product: Product) => {
        const productList = document.getElementById('product-list') as HTMLElement;
        productList.innerHTML = ''; 

        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.imageURL}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
                <button onclick="addToCart('userId', '${product._id}')">Add to Cart</button>
            </div>
        `;
    })
    .catch(error => {
        console.error('Error finding cheapest product:', error);
    });
}


function AddProductToCart(userId, productId) {
    fetch(`/cart/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }), 
    })
    .then(response => response.json())
    .then(data => {
        
        console.log('Product added to cart:', data);
    })
    .catch(error => {
        console.error('Error adding product:', error);
    });
}

function ViewUserCart(userId) {
    fetch(`/cart/${userId}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const cartItems = data.cart;
    
        console.log('Cart items:', cartItems);
    })
    .catch(error => {
        console.error('Error fetching cart:', error);
    });
}

function RemoveProductFromCart(userId, productId) {
    fetch(`/cart/remove`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, productId }), 
    })
    .then(response => response.json())
    .then(data => {
    
        console.log('Product removed from cart:', data);
    })
    .catch(error => {
        console.error('Error removing product:', error);
    });
}