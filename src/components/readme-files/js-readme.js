export const jsReadme = {
  title: "JavaScript - The Language of the Web",
  description:
    "JavaScript is a versatile programming language that enables interactive web pages and is essential for web development. It runs in browsers and servers alike.",
  sections: [
    {
      title: "What is JavaScript?",
      content:
        "JavaScript is a high-level, interpreted programming language that makes web pages interactive. It's one of the core technologies of web development alongside HTML and CSS.",
      code: `// JavaScript adds behavior to web pages
console.log("Hello, World!");

// Variables and basic operations
let message = "Welcome to JavaScript!";
const pi = 3.14159;
var count = 0;

// Functions
function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(greetUser("Developer"));`,
    },
    {
      title: "Variables and Data Types",
      content:
        "JavaScript has various data types including numbers, strings, booleans, objects, arrays, and more. Variables can be declared using var, let, or const.",
      code: `// Variable declarations
let name = "John";          // String
const age = 25;             // Number
var isActive = true;        // Boolean
let data = null;            // Null
let undefined_var;          // Undefined

// Numbers
let integer = 42;
let decimal = 3.14;
let negative = -10;
let scientific = 1e6;      // 1,000,000

// Strings
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = \`Hello, \${name}! You are \${age} years old.\`;
let multiLine = \`This is a
multi-line
string\`;

// Arrays
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
let empty = [];

// Objects
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isEmployed: true
};

// Checking data types
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isActive);  // "boolean"
console.log(typeof person);    // "object"`,
    },
    {
      title: "Functions",
      content:
        "Functions are reusable blocks of code that perform specific tasks. JavaScript supports various function syntaxes including regular functions, arrow functions, and more.",
      code: `// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow Functions
const subtract = (a, b) => {
    return a - b;
};

// Short arrow function
const divide = (a, b) => a / b;

// Function with default parameters
function greet(name = "Guest", time = "day") {
    return \`Good \${time}, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Higher-order functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Examples
console.log(add(5, 3));                    // 8
console.log(multiply(4, 7));               // 28
console.log(subtract(10, 4));              // 6
console.log(divide(15, 3));                // 5
console.log(greet("Alice", "morning"));    // "Good morning, Alice!"
console.log(sum(1, 2, 3, 4, 5));         // 15
console.log(applyOperation(8, 2, divide)); // 4`,
    },
    {
      title: "Control Structures",
      content:
        "JavaScript provides various control structures for decision making and loops including if/else statements, switch cases, for loops, while loops, and more.",
      code: `// If/Else Statements
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";

// Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}

// For...in Loop (for object properties)
let car = { brand: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// For...of Loop (for arrays and iterables)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// While Loop
let count = 0;
while (count < 3) {
    console.log("While count: " + count);
    count++;
}

// Do...While Loop
let num = 0;
do {
    console.log("Do-while: " + num);
    num++;
} while (num < 3);`,
    },
    {
      title: "Arrays and Array Methods",
      content:
        "JavaScript arrays are versatile data structures with many built-in methods for manipulation, iteration, and transformation.",
      code: `// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Array methods
fruits.push("grape");           // Add to end
fruits.unshift("strawberry");   // Add to beginning
let lastFruit = fruits.pop();   // Remove from end
let firstFruit = fruits.shift(); // Remove from beginning

// Finding elements
let index = fruits.indexOf("banana");
let found = fruits.includes("apple");
let item = fruits.find(fruit => fruit.length > 5);

// Transforming arrays
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
let total = numbers.reduce((sum, num) => sum + num, 0);

// Sorting
let sortedFruits = fruits.sort();
let sortedNumbers = numbers.sort((a, b) => a - b);

// Other useful methods
fruits.forEach(fruit => console.log(fruit));
let joined = fruits.join(", ");
let sliced = fruits.slice(1, 3);
let reversed = [...fruits].reverse();

// Array destructuring
let [first, second, ...rest] = fruits;

// Examples
console.log("Fruits:", fruits);
console.log("Upper fruits:", upperFruits);
console.log("Long fruits:", longFruits);
console.log("Total:", total);
console.log("First fruit:", first);`,
    },
    {
      title: "Objects and Object Methods",
      content:
        "JavaScript objects are collections of key-value pairs and are fundamental to JavaScript programming. They can contain properties and methods.",
      code: `// Creating objects
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    
    // Methods
    greet: function() {
        return "Hello, I'm " + this.name;
    },
    
    // ES6 method shorthand
    introduce() {
        return \`I'm \${this.name}, \${this.age} years old from \${this.city}\`;
    },
    
    // Arrow function (be careful with 'this')
    getInfo: () => {
        return "Getting info...";
    }
};

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adding new properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Object methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

// Object destructuring
let { name, age, city } = person;
let { name: fullName, age: years } = person; // Rename variables

// Constructor function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    };
}

let myCar = new Car("Toyota", "Camry", 2020);

// Class syntax (ES6)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return \`\${this.name} makes a sound\`;
    }
    
    static getKingdom() {
        return "Animalia";
    }
}

let dog = new Animal("Buddy", "Dog");

// Examples
console.log(person.greet());
console.log(person.introduce());
console.log("Keys:", keys);
console.log(myCar.getAge());
console.log(dog.speak());`,
    },
    {
      title: "DOM Manipulation",
      content:
        "The Document Object Model (DOM) allows JavaScript to interact with HTML elements, enabling dynamic web pages and user interactions.",
      code: `// Selecting elements
let elementById = document.getElementById("myId");
let elementsByClass = document.getElementsByClassName("myClass");
let elementsByTag = document.getElementsByTagName("div");
let querySelector = document.querySelector(".myClass");
let querySelectorAll = document.querySelectorAll("p");

// Creating and modifying elements
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
newDiv.innerHTML = "<strong>Bold text</strong>";
newDiv.className = "new-class";
newDiv.id = "new-id";

// Adding elements to the page
document.body.appendChild(newDiv);
document.body.insertBefore(newDiv, document.body.firstChild);

// Modifying existing elements
let existingElement = document.querySelector("#existing");
if (existingElement) {
    existingElement.style.color = "blue";
    existingElement.style.fontSize = "20px";
    existingElement.classList.add("highlight");
    existingElement.setAttribute("data-info", "modified");
}

// Event handling
function handleClick(event) {
    console.log("Button clicked!", event.target);
    event.preventDefault(); // Prevent default behavior
}

// Adding event listeners
let button = document.querySelector("#myButton");
if (button) {
    button.addEventListener("click", handleClick);
    
    // Multiple ways to handle events
    button.onclick = function() {
        console.log("Alternative click handler");
    };
}

// Form handling
let form = document.querySelector("#myForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let formData = new FormData(form);
        
        for (let [key, value] of formData.entries()) {
            console.log(key + ": " + value);
        }
    });
}

// Dynamic content updates
function updateContent() {
    let container = document.querySelector("#content");
    if (container) {
        container.innerHTML = \`
            <h2>Updated at: \${new Date().toLocaleTimeString()}</h2>
            <p>This content was updated dynamically!</p>
        \`;
    }
}

// Remove elements
function removeElement(selector) {
    let element = document.querySelector(selector);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}`,
    },
    {
      title: "Asynchronous JavaScript",
      content:
        "JavaScript handles asynchronous operations using callbacks, promises, and async/await syntax for managing operations that take time to complete.",
      code: `// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// Promises
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "User " + userId });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1500);
    });
}

// Using promises
fetchUserData(1)
    .then(user => {
        console.log("User fetched:", user);
        return fetchUserData(2); // Chain another promise
    })
    .then(user => {
        console.log("Second user:", user);
    })
    .catch(error => {
        console.error("Promise error:", error.message);
    })
    .finally(() => {
        console.log("Promise chain completed");
    });

// Async/Await
async function getUserInfo(userId) {
    try {
        console.log("Fetching user...");
        const user = await fetchUserData(userId);
        console.log("User info:", user);
        
        // Multiple async operations
        const user2 = await fetchUserData(userId + 1);
        console.log("Second user info:", user2);
        
        return [user, user2];
    } catch (error) {
        console.error("Async error:", error.message);
        throw error;
    }
}

// Using async function
getUserInfo(1).then(users => {
    console.log("All users:", users);
});

// Fetch API example
async function fetchFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log("API data:", data);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Promise utilities
Promise.all([
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
]).then(users => {
    console.log("All users loaded:", users);
});

Promise.race([
    fetchUserData(1),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 500))
]).then(result => {
    console.log("First resolved:", result);
}).catch(error => {
    console.log("Race error:", error.message);
});`,
    },
    {
      title: "Error Handling",
      content:
        "Proper error handling is crucial in JavaScript. Learn to use try/catch blocks, throw custom errors, and handle different types of errors gracefully.",
      code: `// Basic try/catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.error("Division error:", error.message);
        return null;
    } finally {
        console.log("Division operation completed");
    }
}

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

// Function that throws different errors
function validateUser(user) {
    if (!user) {
        throw new ValidationError("User object is required");
    }
    
    if (!user.name) {
        throw new ValidationError("User name is required");
    }
    
    if (!user.email || !user.email.includes("@")) {
        throw new ValidationError("Valid email is required");
    }
    
    return true;
}

// Handling different error types
function processUser(userData) {
    try {
        validateUser(userData);
        console.log("User is valid:", userData.name);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation failed:", error.message);
        } else if (error instanceof NetworkError) {
            console.error("Network issue:", error.message, error.statusCode);
        } else {
            console.error("Unexpected error:", error.message);
        }
    }
}

// Async error handling
async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new NetworkError("HTTP Error", response.status);
            }
            return await response.json();
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${i + 1} failed:, error.message\`);
            
            if (i < maxRetries - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
    
    throw new Error(\`Failed after \${maxRetries} attempts: \${lastError.message}\`);
}

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent the default browser behavior
});

// Examples
console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // null with error message

processUser({ name: "John", email: "john@example.com" }); // Valid
processUser({ name: "Jane" }); // Validation error`,
    },
    {
      title: "ES6+ Modern Features",
      content:
        "Modern JavaScript includes many powerful features like destructuring, spread operator, template literals, modules, and more that make code more concise and readable.",
      code: `// Template literals
const name = "Alice";
const age = 25;
const message = \`Hello, my name is \${name} and I'm \${age} years old.\`;

// Destructuring
const person = { name: "Bob", age: 30, city: "New York" };
const { name: personName, age: personAge } = person;

const colors = ["red", "green", "blue"];
const [primary, secondary, ...others] = colors;

// Spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2];

const originalObj = { a: 1, b: 2 };
const newObj = { ...originalObj, c: 3 };

// Rest parameters
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

// Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// Arrow functions
const multiply = (a, b) => a * b;
const square = x => x * x;
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

// Enhanced object literals
const x = 10, y = 20;
const point = {
    x,  // Same as x: x
    y,  // Same as y: y
    
    // Method shorthand
    toString() {
        return \`(\${this.x}, \${this.y})\`;
    },
    
    // Computed property names
    [\`coordinate_\${x}\`]: "x-value"
};

// Classes
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    set dimensions({width, height}) {
        this.width = width;
        this.height = height;
    }
    
    static compare(rect1, rect2) {
        return rect1.area - rect2.area;
    }
}

// Modules (ES6 import/export)
// export const PI = 3.14159;
// export function calculateArea(radius) { return PI * radius * radius; }
// export default class Circle { ... }

// import { PI, calculateArea } from './math.js';
// import Circle from './math.js';

// Promise improvements
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Symbol
const id = Symbol('id');
const user = {
    name: "John",
    [id]: 12345
};

// Map and Set
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

const set = new Set([1, 2, 3, 3, 4]); // {1, 2, 3, 4}

// Optional chaining (ES2020)
const userData = { profile: { name: "John" } };
const userName = userData?.profile?.name; // "John"
const userAge = userData?.profile?.age; // undefined

// Nullish coalescing (ES2020)
const config = {
    timeout: 0,
    retries: null
};
const timeout = config.timeout ?? 5000; // 0 (falsy but not null/undefined)
const retries = config.retries ?? 3;    // 3 (null, so use default)

console.log("Combined:", combined);
console.log("Doubled:", doubled);
console.log("Point:", point.toString());`,
    },
    {
      title: "Happy Coding! 🚀",
      content:
        "JavaScript is a powerful and versatile language that's constantly evolving. Practice regularly, build projects, and explore modern JavaScript features to become proficient.",
      code: `// Best practices for JavaScript development
const bestPractices = {
    // Use const for values that don't change
    API_URL: "https://api.example.com",
    
    // Use meaningful variable names
    calculateTotalPrice: (items) => {
        return items.reduce((total, item) => total + item.price, 0);
    },
    
    // Handle errors gracefully
    async fetchData(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch data:", error);
            return null;
        }
    },
    
    // Write pure functions when possible
    formatCurrency: (amount, currency = "USD") => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }
};

// Keep learning and building! 
console.log("Ready to build amazing things with JavaScript! 🎉");`,
    },
  ],
};
