const products = [
    ["Book", 300],
    ["Pen", 20],
    ["Bag", 500]
];
 
let cart = [];
 
const productsDiv = document.getElementById("products");
 
products.forEach((product, index) => {
    productsDiv.innerHTML += `
        <div>
            <h3>${product[0]}</h3>
            <p>₹${product[1]}</p>
            <button onclick="add(${index})">Add to Cart</button>
        </div>
    `;
});
 
function add(index) {
    cart.push(products[index]);
    show();
}
 
function show() {
    document.getElementById("cart").innerHTML =
        cart.map(product => `${product[0]} ₹${product[1]}`).join("<br>");
 
    document.getElementById("total").textContent =
        cart.reduce((sum, product) => sum + product[1], 0);
}
 
function checkout() {
    if (cart.length === 0) {
        return alert("Cart is empty");
    }
 
    alert("Order placed!");
    cart = [];
    show();
}
 
