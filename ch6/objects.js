// Beginning JavaScript by David Flanagan
// Ch 6

/* Object
    * Composite value; aggregates multiple values (primitive values or other
    objs), allows you to store and retrieve those values by name
    * Object: Unordered collection of properties, each of which has a name and 
    value 
        * Property names are strings
        * No obj may have 2 properties with same name
    * Each property has associated values ("property attributes")
        * writable attribute: specifies whether value of property can be set
        * enumerable: specifies whether property name is returned by for/in loop
        * configurable: specifies whether property can be deleted, whether attributes 
        can be altered
    * Every obj has 3 associated obj attributes 
        * prototype: reference to another obj from which properties are inherited 
        * class: string that categorizes type of obj 
        * extensible flag: specifies whether new properties may be added to obj
    * Objs map strings to values ("string-to-value mapping", "hash", "hashtable", 
    "dictionary", "associative array")
    * Inherits properties of another object, known as its "prototype"
        * Obj methods are typically inherited properties; "prototypal inheritance"
    * Dynamic; properties can be added and deleted 
    * Can be used to simulate static objs and "structs" of statically typed
    languages; can be used to represent sets of strings by ignoring value part 
    of string-to-value mapping 
    * Any value in JavaScript that is not str, num, true, false, null, undefined 
    is obj; str, num, booleans behave like immutable objs 
    * Mutable; manipulated by reference rather than by value 
    * Most common things to do with objs
        * Create them
        * set, query, delete, test, enumerate their properties
    * 3 broad categories of objs and 2 types of properties:
        * Native obj: Obj or class of objs defined by ECMAScript specification
        (e.g., arrays, functions, dates, regular expressions)
        * Host obj: Obj defined by host environment (such as a web browser) within
        which the JavaScript interpreter is embedded. HTMLElement objs that represent 
        structure of web page in client-side JavaScript are host objs. May also be
        native objs, as when host environment defines methods that are normal 
        JavaScript Function objs 
        * User-defined obj: Any obj created by execution of JavaScript code 
        * Own property: property defined directly on obj
        * Inherited property: property defined by obj's prototype obj  */

// Creating objs 
/* Obj literals: comma-separated list of colon-separated name:value pairs, enclosed 
within curly braces 
    * Property name is JavaScript identifier or string literal (empty string is allowed)
    * Property value is any JavaScript expression; value of expression (primitive value 
    or obj value) becomes value of property 
    * Expression that creates and initializes new, distinct obj each time it is 
    evaluated. Value of each property is evaluated each time literal is evaluated. */
var empty = {};                           // An object with no properties
var point = { x:0, y:0 };                 // Two properties
var point2 = { x:point.x, y:point.y+1 };  // More complex values
var book = {                      
    "main title": "JavaScript",           // Property names include spaces,
    'sub-title': "The Definitive Guide",  // and hyphens, so use string literals
    "for": "all audiences",               // for is a reserved word, so quote
    author: {                             // The value of this property is
        firstname: "David",               // itself an object.  Note that
        surname: "Flanagan"               // these property names are unquoted.
    }
};
/* new operator: creates and initializes new obj. 
    * Must be followed by function invocation; function used in this way is called a 
    constructor and serves to initialize newly created obj.
    * Core JavaScript includes built-in constructors for native types */
var o = new Object();     // Create an empty object: same as {}.
var a = new Array();      // Create an empty array: same as [].
var d = new Date();       // Create a Date object representing the current time
var r = new RegExp("js"); // Create a RegExp object for pattern matching.
/* Prototypes
    * Every JavaScript obj has second JavaScript obj ("prototype") associated with it.
    First obj inherits properties from prototype
    * All objects created by object literals have same prototype obj: Object.prototype 
    * Objs created using new keyword and constructor invocation use value of prototype 
    property of constructor function as their prototype. Obj created by new Object()
    inherits from Object.prototype just as obj created by {} does. 
        * Obj created by new Array() uses Array.prototype as its prototype
        * Obj created by new Date() uses Date.prototype as its prototype 
    * Object.prototype has no prototype: does not inherit properties 
    * All built-in constructors (and most user-defined constructors) have prototype 
    that inherits properties from Object.prototype, so Date object obj created by 
    new Date() inherits properties from both Date.prototype and Object.prototype
        * Prototype chain: Linked series of prototype objs  */
/* Object.create()
    * Method that creates new obj, using first arg as prototype of that obj 
    * Takes optional second arg that describes properties of new obj 
    * Static function, not method invoked on individual objs */
var o1 = Object.create({x:1, y:2});    // o1 inherits properties x and y
var o2 = Object.create(null);           /* o2 inherits no props or methods; does not
                                            have prototype */
var o3 = Object.create(Object.prototype);  // o3 is like {} or new Object()
// inherit() returns a newly created object that inherits properties from the
// prototype object p.  It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create)                // If Object.create() is defined...
        return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                  // Define a dummy constructor function.
    f.prototype = p;                  // Set its prototype property to p.
    return new f();                   // Use f() to create an "heir" of p.
}
// Use inherit() function to guard against unintended modification of obj by library 
// function that you don't have control over. Instead of passing obj directly to 
// function, can pass an heir. If function reads properties of heir, it will see 
// inherited values; if it sets properties, those properties will only affect heir, 
// not original obj. 
var o = { x: "don't change this value" };
library_function(inherit(o));  // Guard against accidental modifications of o

/* Querying and setting properties 
    * To obtain value of property, use dot (.) or square bracket ([]) operators 
        * left-hand side should be expression whose value is obj
        * dot operator: right-hand must be simple identifier that names property 
        * square brackets: value within brackets must be expression that evaluates 
        to string (or a value that can be converted to str) that contains desired 
        property name 
    * To create or set property, use dot or square brackets as you would to query 
    property, but put on left-hand side of assignment expression 
    * If obj has properties whose name is reserved word, may have to use square bracket 
    notation to access them */
var author = book.author;      // Get the "author" property of the book.
var name = author.surname      // Get the "surname" property of the author.
var title = book["main title"] // Get the "main title" property of the book.
book.edition = 6;                   // Create an "edition" property of book.
book["main title"] = "ECMAScript";  // Set the "main title" property.
/* Objects as associative arrays 
    * JavaScript objs are associative arrays (or hash or map or dictionary)
    * JavaScript is loosely typed language; program can create any number of 
    properties in any obj */
object.property
object["property"]       // associative array
// Read and concatenate address0, address1, address2, address3 properties of 
// customer object; [] array notation is more flexible than using . operator 
var addr = "";
for(i = 0; i < 4; i++) {
    addr += customer["address" + i] + '\n';
// Suppose writing program to compute current value of user's stock market investments.
// Program allows user to type in name of each stock she owns, number of shares of 
// each stock; use object named portfolio to hold info. Obj has 1 property for each 
// stock. Name of property is name of stock; property value is num of shares of that stock.
portfolio.ibm    // property that has value of 50; user holds 50 shares of stock in IBM 
// Since user enters stock names at runtime, can't know property names ahead of time;
// can't use . operator to access properties of portfolio obj. Can use [] operator 
// because uses string value (dynamic, can change at runtime) rather than identifier
// (static, must be hardcoded in program) to name property.
// Function for adding new stock to portfolio
function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}
// for/in loop is useful with associative arrays 
function getvalue(portfolio) {
    var total = 0.0;
    for(stock in portfolio) {           // For each stock in the portfolio:
        var shares = portfolio[stock];  //   get the number of shares
        var price = getquote(stock);    //   look up share price
        total += shares * price;        //   add stock value to total value
    }
    return total;                       // Return total value.
}
/* 