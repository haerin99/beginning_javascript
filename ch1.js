// Beginning JavaScript by David Flanagan
// Ch 1

var x;              // Declare variable named x
x = 0;              // Assign value to variable
x = 1;              // Numbers
x = 0.01;
x = "hello world";  // Strings
x = 'JavaScript';
x = true;           // Booleans
x = false;
x = null;           // Null is a special value that means "no value"
x = undefined;      // Undefined is like null.

// Object: Collection of name/value pairs, or a string to value map.
var book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // property: value
    fat: true
}
book.topic              // Access properties of object with . or []:
book["fat"]
book.author = "Flanagan" // Create new properties by assignment
book.contents = {};     // {} is empty object with no properties

// Arrays: Numerically indexed lists of values
var primes = [2, 3, 5, 7];  // Array of 4 values
primes[0]                   // First element of array
primes.length               // Number of elements in array
primes[primes.length-1]     // Last element in array
primes[4] = 9;              // Add new element by assignment
primes[4] = 11;             // Alter existing element by assignment
var empty = [];     // [] is empty array with no elements
empty.length

// Arrays and objects can hold other arrays and objects:
var points = [ // Array with 2 elements
    {x:0, y:0},                 // Each element is an object
    {x:1, y:1}
];
var data = {   // Object with 2 properties
    trial1: [[1,2], [3,4]],     // Value of each property is an array
    trial2: [[2,3], [4,5]]      // Elements of the arrays are arrays
}

// Operators act on values (operands) to produce a new value.
// Arithmetic operators
3 + 2
3 - 2
3 * 2
3 / 2                           // => 1.5
points[1].x - points[0].x       // => 1: more complicated operands
"3" + "2"                       // => "32": concatenates strings

// Shorthand arithmetic operators
var count = 0;      // Define variable
count++;                    // Increment variable
count--;                    // Decrement variable
count += 2;                 // Add 2: count = count + 2
count *= 3;                 // Multiply by 3: count = count * 3
count                       // Variable names are expressions, too

// Equality and relational operators
var x = 2, y = 3;         // Assignment
x == y
x != y
x < y
x <= y
x > y
x >= y
"two" == "three"        // => false: two strings are different
"two" > "three"         // => true: "tw" is alphabetically greater than "th"
false == (x > y)        // => true

// Logical operators combine or invert boolean values
//(x == 2) && (y == 3)    // && is AND
//(x > 3) || (y < 3)      // || is OR
//!(x == y)               // ! is NOT (inverts boolean value)

// Expressions: Computes value but doesn't do anything (phrases)
// Statements: Don't have value but alter state
    // Lines that end with semicolons (full sentences)
// Control structures (e.g., conditionals, loops)

// Function: Parameterized blocks of code that we can invoke
function plus1(x) {     // Define function named "plus1" with parameter "x"
    return x+1;     // Return value one larger than value passed in
}   // Enclose function in curly braces

plus1(y)    // y is 3, so this invocation returns 3 + 1

var square = function(x) { // Functions are values and can be assigned to vars
    return x * x;          // Compute function's value
};                         // Semicolon marks end of assignment

square(plus1(y))           // Invoke two functions in one expression

// Combine functions with objects to get methods
// When functions are assigned to properties of an object, we call
// them "methods". All JavaScript objects have methods:
var a = [];         // Create an empty array
a.push(1, 2, 3);           // push() method adds elements to an array
a.reverse();               // Another method: reverse order of elements

// Can define our own methods. "this" keyword refers to the object
// on which the method is defined: in this case, the points array
// from above.
points.dist = function() { // Define a method to compute distance between points
    var p1 = this[0];       // First element of array we're invoked on
    var p2 = this[1];       // Second element of "this" object
    var a = p2.x - p1.x;  // Difference in X coordinates
    var b = p2.y - p1.y;  // Difference in Y coordinates
    return Math.sqrt(a*a + // Pythagorean theorem
                        b*b); // Math.sqrt() computes square root
};
points.dist()               // => 1.414; distance between our 2 points

// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) {   // Function to compute absolute value
    if (x >= 0) {       // if statement...
        return x;       // executes this code if comparison is true
    }
    else {              // Optional else clause executes code if
        return -x;      // comparison is false.
    }                   // Curly braces optional when 1 statement per clause.
}                       // Note return statements nested inside if/else.


function factorial2(n) {  // Another version using a different loop
    var i, product = 1;   // Start with 1
    for (i=2; i <= n, i++) {  // Automatically increment i from 2 up to n
        product *= i;         // Do this each time. {} not needed for 1-line loops
    }
    return product;       // Return the factorial
    
}

2+3;

