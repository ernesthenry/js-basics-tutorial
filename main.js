// ===================================================================
// COMPLETE JAVASCRIPT SYNTAX REFERENCE - ALL BASICS
// ===================================================================

// ===================================================================
// 1. VARIABLES AND DECLARATIONS
// ===================================================================

// Variable declarations
var oldWay = "avoid using var";           // Function-scoped, hoisted
let modernWay = "use let for variables";  // Block-scoped
const CONSTANT = "use const for constants"; // Block-scoped, immutable

// Multiple declarations
let a, b, c;
let x = 1, y = 2, z = 3;

// Variable naming rules
let validName = "valid";
let _underscore = "valid";
let $dollar = "valid";
let camelCase = "preferred style";
// let 123invalid; // ERROR: cannot start with number
// let my-name;    // ERROR: hyphens not allowed

// ===================================================================
// 2. DATA TYPES
// ===================================================================

// Primitive data types
let stringType = "Hello World";           // String
let numberType = 42;                      // Number
let bigIntType = 123456789012345678901234567890n; // BigInt
let booleanType = true;                   // Boolean
let undefinedType;                        // Undefined
let nullType = null;                      // Null
let symbolType = Symbol('id');            // Symbol

// String variations
let singleQuotes = 'Single quotes';
let doubleQuotes = "Double quotes";
let backticks = `Template literals`;
let multiLine = `This is a
multi-line string`;

// Template literals with expressions
let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// Escape characters
let escaped = "She said, \"Hello!\"";
let newLine = "Line 1\nLine 2";
let tab = "Column 1\tColumn 2";

// Number variations
let integer = 42;
let float = 3.14159;
let scientific = 2.5e3;                   // 2500
let binary = 0b1010;                      // 10 in decimal
let octal = 0o755;                        // 493 in decimal
let hexadecimal = 0xFF;                   // 255 in decimal

// Special number values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

// Type checking
typeof stringType;                        // "string"
typeof numberType;                        // "number"
typeof booleanType;                       // "boolean"
typeof undefinedType;                     // "undefined"
typeof nullType;                          // "object" (known quirk)
typeof symbolType;                        // "symbol"

// ===================================================================
// 3. OPERATORS
// ===================================================================

// Arithmetic operators
let addition = 5 + 3;                     // 8
let subtraction = 5 - 3;                  // 2
let multiplication = 5 * 3;               // 15
let division = 5 / 3;                     // 1.666...
let modulus = 5 % 3;                      // 2
let exponentiation = 5 ** 3;              // 125

// Assignment operators
let num = 10;
num += 5;                                 // num = num + 5 (15)
num -= 3;                                 // num = num - 3 (12)
num *= 2;                                 // num = num * 2 (24)
num /= 4;                                 // num = num / 4 (6)
num %= 5;                                 // num = num % 5 (1)

// Increment/Decrement
let counter = 5;
counter++;                                // Post-increment: 6
++counter;                                // Pre-increment: 7
counter--;                                // Post-decrement: 6
--counter;                                // Pre-decrement: 5

// Comparison operators
5 == '5';                                 // true (loose equality)
5 === '5';                                // false (strict equality)
5 != '6';                                 // true
5 !== '5';                                // true (strict inequality)
5 > 3;                                    // true
5 < 3;                                    // false
5 >= 5;                                   // true
5 <= 5;                                   // true

// Logical operators
true && false;                            // false (AND)
true || false;                            // true (OR)
!true;                                    // false (NOT)

// Bitwise operators
5 & 3;                                    // 1 (AND)
5 | 3;                                    // 7 (OR)
5 ^ 3;                                    // 6 (XOR)
~5;                                       // -6 (NOT)
5 << 1;                                   // 10 (Left shift)
5 >> 1;                                   // 2 (Right shift)

// Ternary operator
let result = age >= 18 ? "Adult" : "Minor";

// Nullish coalescing
let value = null ?? "default";            // "default"
let value2 = undefined ?? "default";      // "default"
let value3 = 0 ?? "default";             // 0 (falsy but not nullish)

// Optional chaining
let obj = { user: { name: "John" } };
let userName = obj.user?.name;            // "John"
let address = obj.user?.address?.street;  // undefined (no error)

// ===================================================================
// 4. FUNCTIONS
// ===================================================================

// Function declaration
function functionName(param1, param2) {
    return param1 + param2;
}

// Function expression
const funcExpression = function(param1, param2) {
    return param1 * param2;
};

// Arrow functions
const arrowFunction = (param1, param2) => param1 - param2;
const singleParam = param => param * 2;
const noParams = () => "Hello World";
const multiLine = (a, b) => {
    let sum = a + b;
    return sum;
};

// Default parameters
function greet(name = "World", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function with destructured parameters
function processUser({name, age, city = "Unknown"}) {
    return `${name} is ${age} years old from ${city}`;
}

// Higher-order functions
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This runs immediately");
})();

// ===================================================================
// 5. ARRAYS
// ===================================================================

// Array creation
let emptyArray = [];
let numbersArray = [1, 2, 3, 4, 5];
let mixedArray = [1, "hello", true, null, {name: "John"}];
let arrayConstructor = new Array(1, 2, 3);

// Array access and modification
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits[0];               // "apple"
let lastFruit = fruits[fruits.length - 1]; // "cherry"
fruits[1] = "blueberry";                  // Modify element

// Array methods - Mutating
fruits.push("date");                      // Add to end
fruits.unshift("apricot");                // Add to beginning
let removedLast = fruits.pop();           // Remove from end
let removedFirst = fruits.shift();        // Remove from beginning
fruits.splice(1, 2, "grape", "kiwi");     // Remove/add elements

// Array methods - Non-mutating
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);
let found = numbers.find(num => num > 3);
let foundIndex = numbers.findIndex(num => num > 3);
let exists = numbers.includes(3);
let joined = numbers.join(", ");
let sliced = numbers.slice(1, 4);
let concatenated = numbers.concat([6, 7, 8]);

// Array iteration
let colors = ["red", "green", "blue"];

// forEach
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

// for...of
for (let color of colors) {
    console.log(color);
}

// for...in (indices)
for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
}

// Traditional for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
let [r, g, b = 0] = ["red", "green"]; // Default value

// ===================================================================
// 6. OBJECTS
// ===================================================================

// Object creation
let emptyObject = {};
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};

// Object with methods
let calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract(num) {                       // Method shorthand
        this.value -= num;
        return this;
    },
    getValue: () => this.value,           // Arrow function (different 'this')
    reset() {
        this.value = 0;
    }
};

// Property access
let nameValue = person.name;              // Dot notation
let ageValue = person["age"];             // Bracket notation
let key = "city";
let cityValue = person[key];              // Dynamic property access

// Property modification
person.name = "Jane Doe";
person["age"] = 31;
person.country = "USA";                   // Add new property
delete person.isEmployed;                 // Delete property

// Property existence check
"name" in person;                         // true
person.hasOwnProperty("name");            // true

// Object methods
let keys = Object.keys(person);           // Get all keys
let values = Object.values(person);       // Get all values
let entries = Object.entries(person);     // Get key-value pairs

// Object destructuring
let {name, age, country = "Unknown"} = person;
let {name: fullName, age: yearsOld} = person; // Rename

// Nested objects
let user = {
    info: {
        name: "John",
        contact: {
            email: "john@example.com",
            phone: "123-456-7890"
        }
    },
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

let john = new Person("John", 25);

// ===================================================================
// 7. CONTROL STRUCTURES
// ===================================================================

// If statements
if (condition) {
    // code block
}

if (condition) {
    // if true
} else {
    // if false
}

if (condition1) {
    // first condition
} else if (condition2) {
    // second condition
} else {
    // default
}

// Switch statement
switch (variable) {
    case "value1":
        // code
        break;
    case "value2":
    case "value3":                        // Fall through
        // code for value2 or value3
        break;
    default:
        // default code
        break;
}

// Loops
// For loop
for (let i = 0; i < 10; i++) {
    // code block
}

// While loop
let i = 0;
while (i < 10) {
    // code block
    i++;
}

// Do-while loop
let j = 0;
do {
    // code block (runs at least once)
    j++;
} while (j < 10);

// For...in loop (object properties)
for (let key in object) {
    // code block
}

// For...of loop (iterable values)
for (let value of array) {
    // code block
}

// Break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;                // Skip iteration
    if (i === 8) break;                   // Exit loop
}

// ===================================================================
// 8. ERROR HANDLING
// ===================================================================

// Try-catch-finally
try {
    // risky code
    let result = riskyFunction();
} catch (error) {
    // handle error
    console.error("An error occurred:", error.message);
} finally {
    // always runs
    console.log("Cleanup code");
}

// Throwing errors
throw new Error("Custom error message");
throw new TypeError("Type error");
throw new ReferenceError("Reference error");

// Custom error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// ===================================================================
// 9. SCOPE AND CLOSURES
// ===================================================================

// Global scope
var globalVar = "I'm global";

// Function scope
function outerFunction(x) {
    // Function scope
    var outerVar = "I'm in outer function";
    
    function innerFunction(y) {
        // Inner scope - has access to outer scope
        var innerVar = "I'm in inner function";
        return outerVar + " " + innerVar + " " + globalVar;
    }
    
    return innerFunction;
}

// Block scope
if (true) {
    let blockScoped = "Only available in this block";
    const alsoBlockScoped = "Me too";
}

// Closure example
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

// ===================================================================
// 10. ARRAY METHODS (COMPREHENSIVE)
// ===================================================================

let arr = [1, 2, 3, 4, 5];

// Iteration methods
arr.forEach(item => console.log(item));
let mapped = arr.map(x => x * 2);
let filtered = arr.filter(x => x > 2);
let reduced = arr.reduce((acc, x) => acc + x, 0);
let found = arr.find(x => x > 3);
let foundIndex = arr.findIndex(x => x > 3);
let every = arr.every(x => x > 0);
let some = arr.some(x => x > 4);

// Transformation methods
let flattened = [[1, 2], [3, 4]].flat();
let flatMapped = arr.flatMap(x => [x, x * 2]);
arr.sort((a, b) => b - a);               // Sort descending
arr.reverse();

// Search and test methods
arr.includes(3);
arr.indexOf(3);
arr.lastIndexOf(3);

// ===================================================================
// 11. STRING METHODS
// ===================================================================

let str = "  Hello, World!  ";

// Length and access
str.length;                               // 15
str[0];                                   // " "
str.charAt(2);                            // "H"
str.charCodeAt(2);                        // 72

// Search methods
str.indexOf("World");                     // 9
str.lastIndexOf("l");                     // 12
str.search(/World/);                      // 9
str.includes("Hello");                    // true
str.startsWith("  Hello");                // true
str.endsWith("!  ");                      // true

// Extraction methods
str.slice(2, 7);                          // "Hello"
str.substring(2, 7);                      // "Hello"
str.substr(2, 5);                         // "Hello" (deprecated)

// Modification methods
str.toLowerCase();                        // "  hello, world!  "
str.toUpperCase();                        // "  HELLO, WORLD!  "
str.trim();                               // "Hello, World!"
str.trimStart();                          // "Hello, World!  "
str.trimEnd();                            // "  Hello, World!"
str.replace("World", "Universe");         // "  Hello, Universe!  "
str.replaceAll("l", "L");                 // "  HeLLo, WorLd!  "

// Split and join
str.split(", ");                          // ["  Hello", "World!  "]
str.split("");                            // Array of characters
["a", "b", "c"].join("-");                // "a-b-c"

// Padding
"5".padStart(3, "0");                     // "005"
"5".padEnd(3, "0");                       // "500"

// Repeat
"ha".repeat(3);                           // "hahaha"

// ===================================================================
// 12. MATH OBJECT
// ===================================================================

// Math constants
Math.PI;                                  // 3.141592653589793
Math.E;                                   // 2.718281828459045

// Rounding methods
Math.round(4.7);                          // 5
Math.floor(4.7);                          // 4
Math.ceil(4.2);                           // 5
Math.trunc(4.9);                          // 4

// Min/Max
Math.min(1, 3, 2);                        // 1
Math.max(1, 3, 2);                        // 3

// Power and roots
Math.pow(2, 3);                           // 8
Math.sqrt(16);                            // 4
Math.cbrt(8);                             // 2

// Random
Math.random();                            // Random number 0-1
Math.floor(Math.random() * 10);           // Random integer 0-9

// Trigonometry
Math.sin(Math.PI / 2);                    // 1
Math.cos(0);                              // 1
Math.tan(Math.PI / 4);                    // 1

// Absolute value
Math.abs(-5);                             // 5

// ===================================================================
// 13. DATE OBJECT
// ===================================================================

// Date creation
let now = new Date();
let specificDate = new Date("2023-12-25");
let dateFromValues = new Date(2023, 11, 25, 10, 30, 0); // Month is 0-indexed

// Get methods
now.getFullYear();                        // e.g., 2023
now.getMonth();                           // 0-11 (January = 0)
now.getDate();                            // 1-31
now.getDay();                             // 0-6 (Sunday = 0)
now.getHours();                           // 0-23
now.getMinutes();                         // 0-59
now.getSeconds();                         // 0-59
now.getTime();                            // Milliseconds since epoch

// Set methods
now.setFullYear(2024);
now.setMonth(5);                          // June (0-indexed)
now.setDate(15);

// Formatting
now.toString();
now.toDateString();
now.toTimeString();
now.toISOString();
now.toLocaleDateString();
now.toLocaleTimeString();

// ===================================================================
// 14. REGULAR EXPRESSIONS
// ===================================================================

// RegExp creation
let regex1 = /pattern/flags;
let regex2 = new RegExp("pattern", "flags");

// Common patterns
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
let numberPattern = /^\d+$/;

// Flags
let caseInsensitive = /hello/i;           // Case insensitive
let global = /o/g;                        // Global (find all)
let multiline = /^hello/m;                // Multiline

// String methods with regex
"hello world".match(/o/g);                // ["o", "o"]
"hello world".replace(/o/g, "0");         // "hell0 w0rld"
"hello world".split(/\s/);               // ["hello", "world"]
"hello world".search(/world/);           // 6

// RegExp methods
let pattern = /\d+/g;
pattern.test("123");                      // true
pattern.exec("abc123def");                // ["123"]

// ===================================================================
// 15. JSON
// ===================================================================

// JSON.stringify (object to JSON string)
let obj = {name: "John", age: 30, active: true};
let jsonString = JSON.stringify(obj);     // '{"name":"John","age":30,"active":true}'

// With formatting
let formatted = JSON.stringify(obj, null, 2);

// With replacer function
let filtered = JSON.stringify(obj, ["name", "age"]);

// JSON.parse (JSON string to object)
let parsed = JSON.parse(jsonString);

// With reviver function
let parsedWithReviver = JSON.parse(jsonString, (key, value) => {
    return typeof value === "string" ? value.toUpperCase() : value;
});

// ===================================================================
// 16. DESTRUCTURING
// ===================================================================

// Array destructuring
let [first, second, third] = [1, 2, 3];
let [a, , c] = [1, 2, 3];                // Skip element
let [x, y, ...rest] = [1, 2, 3, 4, 5];   // Rest elements
let [p, q = 10] = [5];                    // Default values

// Object destructuring
let {name, age} = {name: "John", age: 30};
let {name: fullName} = {name: "John"};    // Rename
let {name, age, city = "Unknown"} = person; // Default value
let {name, ...others} = person;           // Rest properties

// Nested destructuring
let {info: {name, contact: {email}}} = user;

// Function parameter destructuring
function greetUser({name, age = 25}) {
    return `Hello ${name}, you are ${age} years old`;
}

// ===================================================================
// 17. SPREAD AND REST OPERATORS
// ===================================================================

// Spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];        // [1, 2, 3, 4, 5, 6]
let copy = [...arr1];                     // Copy array

// Spread with objects
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let merged = {...obj1, ...obj2};          // {a: 1, b: 2, c: 3, d: 4}
let updated = {...obj1, b: 5};            // Override property

// Rest parameters in functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Rest in destructuring
let [head, ...tail] = [1, 2, 3, 4];      // head: 1, tail: [2, 3, 4]
let {a, ...remaining} = {a: 1, b: 2, c: 3}; // remaining: {b: 2, c: 3}

// ===================================================================
// 18. PROMISES AND ASYNC/AWAIT (BASIC SYNTAX)
// ===================================================================

// Promise creation
let promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});

// Promise consumption
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Promise.all
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.race
Promise.race([promise1, promise2])
    .then(result => console.log("First resolved:", result));

// Async/await syntax
async function fetchData() {
    try {
        let result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

// ===================================================================
// 19. MODULES (ES6)
// ===================================================================

// Named exports
export const PI = 3.14159;
export function calculateArea(radius) {
    return PI * radius * radius;
}
export class Calculator {
    add(a, b) { return a + b; }
}

// Default export
export default function defaultFunction() {
    return "I'm the default export";
}

// Import syntax
import defaultFunction, { PI, calculateArea } from './module.js';
import * as mathUtils from './module.js';
import { calculateArea as area } from './module.js'; // Rename import

// ===================================================================
// 20. CLASSES (ES6)
// ===================================================================

// Class declaration
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    // Instance method
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Setter
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
    }
    
    // Static method
    static getSpeciesCount() {
        return Animal.count || 0;
    }
}

// Class inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog");               // Call parent constructor
        this.breed = breed;
    }
    
    speak() {                             // Override method
        return `${this.name} barks`;
    }
    
    wagTail() {                           // New method
        return `${this.name} wags tail`;
    }
}

// Class instantiation
let myDog = new Dog("Buddy", "Golden Retriever");

// ===================================================================
// 21. COMMON PATTERNS AND IDIOMS
// ===================================================================

// Conditional assignment
let value = condition ? trueValue : falseValue;

// Default values
let name = providedName || "Anonymous";
let age = providedAge ?? 0;               // Nullish coalescing

// Object property shorthand
let x = 1, y = 2;
let point = {x, y};                       // Same as {x: x, y: y}

// Computed property names
let key = "dynamicKey";
let obj = {
    [key]: "value",
    [`${key}_2`]: "another value"
};

// Method chaining
class Calculator {
    constructor() {
        this.value = 0;
    }
    
    add(num) {
        this.value += num;
        return this;                      // Return this for chaining
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    get result() {
        return this.value;
    }
}

// Usage: new Calculator().add(5).multiply(2).result; // 10

// Function currying
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const result = double(5);                 // 10

// Debouncing function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttling function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================================================
// END OF JAVASCRIPT SYNTAX REFERENCE
// ===================================================================