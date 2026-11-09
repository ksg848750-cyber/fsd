// 1. Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(10, 20));

// 2. Callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Rahul", () => console.log("Welcome!"));

// 3. Promise
let promise = new Promise((resolve) => {
    resolve("Promise successful!");
});

promise.then(result => console.log(result));

// 4. Async/Await
async function display() {
    let result = await Promise.resolve("Async/Await successful!");
    console.log(result);
}

display();