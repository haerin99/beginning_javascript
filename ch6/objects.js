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
/* Inheritance 
    * JavaScript objects have set of "own properties" and inherit set of properties from 
    prototype object
    * inherit() function creates objects with specified prototypes, as shown earlier 
    * Prototype attribute of obj creates chain or linked list from which properties are inherited 
        * Suppose query (access) property x in obj o. 
        * If o does not have own property with that name, prototype obj of o is queried for 
        property x. 
        * If prototype obj does not have own property by that name, but has a prototype itself, 
        query is performed on prototype of prototype
        * Continues until property x is found or until object with null prototype is searched */
var o = {}            // o inherits object methods from Object.prototype
o.x = 1;              // and has an own property x.
var p = inherit(o);   // p inherits properties from o and Object.prototype
p.y = 2;              // and has an own property y.
var q = inherit(p);   // q inherits properties from p, o, and Object.prototype
q.z = 3;              // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype    
q.x + q.y             // => 3: x and y are inherited from o and p”
/* Suppose assign property x of object o. 
    * If o already has own (noninherited) property named x, then assignment changes value of 
    existing property. Otherwise, assignment creates new property named x on object o. 
    * If o previously inherited property x, that property is now hidden by newly created own 
    property with same name.
* Property assignment examines prototype chain to determine whether assignment is allowed 
    * If o inherits read-only property named x, then assignment is not allowed 
    * If assignment is allowed, it always creates or sets property in original object and never 
    modifies prototype chain 
* Inheritance occurs when querying properties but not when setting them; allows us to selectively
override inherited properties */
var unitcircle = { r:1 };     // An object to inherit from
var c = inherit(unitcircle);  // c inherits the property r
c.x = 1; c.y = 1;             // c defines two properties of its own
c.r = 2;                      // c overrides its inherited property
unitcircle.r;                 // => 1: the prototype object is not affected
/* Rule: Property assignment either fails or creates or sets property in original obj 
* Exception: If o inherits property x, and that property is accessor property with setter
method, then that setter method is called rather than creating new property x in o 
* Setter method is called on object o, not on prototype obj that defines property; if setter 
method defines any properties, it will do so on o, and will leave prototype chain unmodified */
/* Property access errors 
    * Property access expressions do not always return or set value.
    * Not error: Query property that does not exist. If property x is not found as own property 
    or inherited property of o, property access expression o.x evaluates to undefined 
    * Error: Query property of object that does not exist (e.g., null and undefined values). */
book.subtitle;      // => undefined: property doesn't exist
// Raises TypeError exception. undefined doesn't have length property 
var len = book.subtitle.length;
// To guard against this exception, make sure book and book.subtitle are (or behave like) objs
// A verbose and explicit technique
var len = undefined;
if (book) {
    if (book.subtitle) len = book.subtitle.length;
}
// A concise and idiomatic alternative to get subtitle length or undefined 
var len = book && book.subtitle && book.subtitle.length;
/* Setting property on null or undefined also causes TypeError.
* Setting properties on other values don't always succeed; some properties are read-only, some 
objs do not allow addition of new properties. These failed attempts to set properties usually 
fail silently. */
// The prototype properties of built-in constructors are read-only.
Object.prototype = 0;  // Assignment fails silently; Object.prototype unchanged
/* Setting property p of obj o fails when:
    * o has own property p that is read-only: not possible to set read-only properties (unless 
    using defineProperty() method)
    * o has inherited property p that is read-only: not possible to hide inherited read-only 
    property with own property of same name 
    * o does not have own property p; o does not inherit property p with setter method, and o's
    extensible attribute is false. If p does not alr exist on o, and if no setter method to call, 
    then p must be added to o. But if o is not extensible, then no new properties can be defined 
    on it. */

/* Deleting properties 
    * delete operator removes property from obj. 
    * Its single operand should be property access expression
    * delete does not operate on value of property but on property itself. */
delete book.author;          // The book object now has no author property.
delete book["main title"];   // Now it doesn't have "main title", either.
/* delete operator only deletes own properties, not inherited ones. 
* To delete inherited property, must delete it from prototype obj in which it is defined; affects
every obj that inherits from that prototype.
* delete expression evaluates to true if delete succeeded, had no effect (such as deleting 
nonexistent property), used (meaninglessly) with expression that is not property access expression */
o = {x:1};          // o has own property x and inherits property toString
delete o.x;         // Delete x, and return true
delete o.x;         // Do nothing (x doesn't exist), and return true
delete o.toString;  // Do nothing (toString isn't an own property), return true
delete 1;           // Nonsense, but evaluates to true
/* delete does not remove properties that have configurable attribute of false
    * removes configurable properties of nonextensible objs 
* Certain properties of built-in objs are nonconfigurable, as are properties of global obj 
created by variable declaration and function declaration */
delete Object.prototype;  // Can't delete; property is non-configurable
var x = 1;                // Declare a global variable
delete this.x;            // Can't delete this property
function f() {}           // Declare a global function
delete this.f;            // Can't delete this property either
/* When deleting configurable properties of the global object in non-strict mode, you can omit 
the reference to the global object and simply follow the delete operator with the property name */
this.x = 1;      // Create a configurable global property (no var)
delete x;        // And delete it
/* In strict mode, however, delete raises a SyntaxError if its operand is an unqualified 
identifier like x, and you have to be explicit about the property */
access:delete x;        // SyntaxError in strict mode
delete this.x;          // This works

/* Testing properties 
    * JavaScript objects can be thought of as sets of properties
    * Often useful to be able to test for membership in the set; to check whether an object has 
    a property with a given name. Can do this with in operator, hasOwnProperty() and 
    propertyIsEnumerable() methods, or by querying the property */
// in operator expects a property name (as a string) on its left side and an object on its 
// right. Returns true if the object has an own property or an inherited property by that name 
var o = { x: 1 }
"x" in o;         // true: o has an own property "x"
"y" in o;         // false: o doesn't have a property "y"
"toString" in o;  // true: o inherits a toString property
// hasOwnProperty() method of obj tests whether obj has own property with given name. Returns
// false for inherited properties 
var o = { x: 1 }
o.hasOwnProperty("x");        // true: o has an own property x
o.hasOwnProperty("y");        // false: o doesn't have a property y
o.hasOwnProperty("toString"); // false: toString is an inherited property
// propertyIsEnumerable() refines hasOwnProperty() test. Returns true only if named property is 
// own property and its enumerable attribute is true. Certain built-in properties are not 
// enumerable. 
var o = inherit({ y: 2 });
o.x = 1;
o.propertyIsEnumerable("x");  // true: o has an own enumerable property x
o.propertyIsEnumerable("y");  // false: y is inherited, not own
Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable
// Instead of using in operator, often sufficient to query property and use !== to make sure 
// not undefined 
var o = { x: 1 }
o.x !== undefined;        // true: o has a property x
o.y !== undefined;        // false: o doesn't have a property y
o.toString !== undefined; // true: o inherits a toString property
/* in can distinguish between properties that do not exist and properties that exist but have 
been set to undefined. */
var o = { x: undefined }   // Property is explicitly set to undefined
o.x !== undefined          // false: property exists but is undefined
o.y !== undefined          // false: property doesn't even exist
"x" in o                   // true: the property exists
"y" in o                   // false: the property doesn't exists
delete o.x;                // Delete the property x
"x" in o                   // false: it doesn't exist anymore
// Code above uses !== operator to distinguish between undefined and null.
// Sometimes don't want to make this distinction:
// If o has a property x whose value is not null or undefined, double it.
if (o.x != null) o.x *= 2;
// If o has a property x whose value does not convert to false, double it.
// If x is undefined, null, false, "", 0, or NaN, leave it alone.
if (o.x) o.x *= 2;

/* Enumerating properties 
* for/in loop: runs body of loop once for each enumerable property (own or inherited) of 
specified obj, assigning name of property to loop variable 
    * Built-in methods that objects inherit are not enumerable 
    * Properties that code adds to objects are enumerable (unless using one of functions
    to make them nonenumerable)
* Object.keys(): returns array of names of enumerable own properties of obj. Works like keys()
utility function 
* Object.getOwnPropertyNames(): works like Object.keys(); returns names of all own properties 
of specified object, not just enumerable properties */
var o = {x:1, y:2, z:3};             // Three enumerable own properties
o.propertyIsEnumerable("toString")   // => false: not enumerable
for(p in o)                          // Loop through the properties
    console.log(p);                  // Prints x, y, and z, but not toString
// Filter properties returned by for/in
for(p in o) {
    if (!o.hasOwnProperty(p)) continue;       // Skip inherited properties
}
for(p in o) {
    if (typeof o[p] === "function") continue; // Skip methods
}
/* Utility functions that use for/in loops to manipulate obj properties in helpful ways 
    * extend() function is commonly included in JavaScript utility libraries */
// Obj utility functions that enumerate properties 
/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
    for(prop in p) {                         // For all props in p.
        o[prop] = p[prop];                   // Add the property to o.
    }
    return o;
}

/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is left alone.
 * This function does not handle getters and setters or copy attributes.
 */
function merge(o, p) {
    for(prop in p) {                           // For all props in p.
        if (o.hasOwnProperty[prop]) continue;  // Except those already in o.
        o[prop] = p[prop];                     // Add the property to o.
    }
    return o;
}

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
    for(prop in o) {                         // For all props in o
        if (!(prop in p)) delete o[prop];    // Delete if not in p
    }
    return o;
}

/*
 * For each property of p, delete the property with the same name from o.
 * Return o.
 */
function subtract(o, p) {
    for(prop in p) {                         // For all props in p
        delete o[prop];                      // Delete from o (deleting a
                                             // nonexistent prop is harmless)
    }
    return o;
}

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o,p) { return extend(extend({},o), p); }

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o,p) { return restrict(extend({}, o), p); }

/*
 * Return an array that holds the names of the enumerable own properties of o.
 */
function keys(o) {
    if (typeof o !== "object") throw TypeError();  // Object argument required
    var result = [];                 // The array we will return
    for(var prop in o) {             // For all enumerable properties
        if (o.hasOwnProperty(prop))  // If it is an own property
            result.push(prop);       // add it to the array.
    }
    return result;                   // Return the array.
}

/* Property getters and setters 
* Obj property is name, value, set of attributes
    * Value may be replaced by getter or setter methods 
* Accessor properties: Properties defined by getters and setters 
* Data properties: Have a single value
* When a program queries the value of an accessor property, JavaScript invokes the getter method 
(passing no arguments). The return value of this method becomes the value of the property access 
expression. 
* When a program sets the value of an accessor property, JavaScript invokes the setter method, 
passing the value of the right-hand side of the assignment. This method is responsible for 
“setting,” in some sense, the property value. The return value of the setter method is ignored.
* Accessor properties do not have a writable attribute as data properties do. 
    * If a property has both a getter and a setter method, it is a read/write property. 
    * If it has only a getter method, it is a read-only property.
    * If it has only a setter method, it is a write-only property (something that is not possible 
    with data properties) and attempts to read it always evaluate to undefined. */
// Easiest way to define accessor properties is with extension to obj literal syntax 
var o = {
    // An ordinary data property 
    data_prop: value,

    // An accessor property defined as a pair of functions
    get accessor_prop() { /* function body here */ },
    set accessor_prop(value) { /* function body here */ }
};
/* Accessor properties: one or two functions whose name is the same as the property name, and 
with the function keyword replaced with get and/or set
* No colon is used to separate the name of the property from the functions that access that 
property, but a comma is still required after the function body to separate the method from 
the next method or data property. */
// Object represents 2D Cartesian point. Has ordinary data properties to represent X and Y 
// coordinates of the point. Has accessor properties for equivalent polar coordinates of point.
var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};
/* Keyword this is used in getters and setters above. 
    * JavaScript invokes these functions as methods of obj on which they are defined; within body
    of function this refers to point obj 
    * getter method for r property can refer to x and y properties as this.x, this.y 
* Accessor properties are inherited, just as data properties are, so you can use obj p defined 
above as prototype for other points. 
    * Can give new objs their own x and y properties; they'll inherit r and theta properties */
var q = inherit(p);  // Create a new object that inherits getters and setters
q.x = 0, q.y = 0;    // Create q's own data properties
console.log(q.r);    // And use the inherited accessor properties
console.log(q.theta);
/* Code above uses accessor properties to define API that provides 2 representations (Cartesian
coordinates, polar coordinates) of single set of data.
* Other reasons to use accessor properties
    * Sanity checking of property writes 
    * Returning different values on each property read */
// This object generates strictly increasing serial numbers
var serialnum = {
    // This data property holds the next serial number.
    // The $ in the property name hints that it is a private property.
    $n: 0,

    // Return the current value and increment it
    get next() { return this.$n++; },

    // Set a new value of n, but only if it is larger than current
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "serial number can only be set to a larger value";
    }
};
// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
    get octet() { return Math.floor(Math.random()*256); },
    get uint16() { return Math.floor(Math.random()*65536); },
    get int16() { return Math.floor(Math.random()*65536)-32768; }
}

/* Property attributes 
* ECMAScript 5 API for querying and setting property attributes 
    * Allows library authors to add methods to prototype objs and make them nonenumerable, like 
    built-in methods 
    * Allows library authors to "lock down" their objs, defining properties that cannot be 
    changed or deleted 
* Consider getter, setter methods of accessor property, value of data property to be property 
attributes 
    * Property has a name and 4 attributes: value, writable, enumerable, configurable 
* Accessor properties don't have value attribute or writable attribute; their writability is 
determined by presence or absence of a setter 
    * 4 attributes of accessor property: get, set, enumerable, configurable 
* Property descriptor: Object to represent the set of four attributes; used by methods for 
querying and setting attributes of a property
    * Has properties with same names as attributes of property it describes; has properties 
    named value, writable, enumerable, configurable
    * Descriptor for accessor property has get, set properties instead of value, writable 
    * writable, enumerable, configurable are boolean values; get, set properties are function 
    values 
*/
/* To obtain property descriptor for named property of specified obj, call
Object.getOwnPropertyDescriptor(obj, prop) */
// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({x:1}, "x");

// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x");         // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString");  // undefined, inherited

/* To query attributes of inherited properties, must explicitly traverse prototype chain 
    * Object.getPrototypeOf() 
* To set attributes of property, or to create new property with specified attributes, call 
Object.defineProperty(); pass obj to be modified, name of property to be created or altered, 
property descriptor obj */
var o = {};  // Start with no properties at all
// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", { value : 1, 
                                writable: true,
                                enumerable: false,
                                configurable: true});

// Check that the property is there but is nonenumerable
o.x;           // => 1
Object.keys(o) // => []

// Now modify the property x so that it is read-only
Object.defineProperty(o, "x", { writable: false });

// Try to change the value of the property
o.x = 2;      // Fails silently or throws TypeError in strict mode
o.x           // => 1

// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
o.x           // => 2

// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function() { return 0; } });
o.x           // => 0

/* Property descriptor passed to Object.defineProperty() does not have to include all 4 
attributes. If creating new property, then omitted attributes are taken to be false or 
undefined. If modifying existing property, then omitted attributes are left unchanged.
    * Method alters existing own property or creates new own property, but will not alter 
    inherited property 
* To create or modify more than one property at a time, use Object.defineProperties()
    * First arg is obj that is to be modified 
    * Second arg is obj that maps names of properties to be created or modified to property 
    descriptors for those properties */
    
// Object.defineProperties() returns modified obj (as does Object.defineProperty())
var p = Object.defineProperties({}, {       // start with empty obj 
    x: { value: 1, writable: true, enumerable:true, configurable:true },  // add data property 
    y: { value: 1, writable: true, enumerable:true, configurable:true },  // add data property 
    r: {                                                  // add read-only accessor property
        get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
        enumerable:true,
        configurable:true
    }
});

/* Object.create() ----- see earlier
    * First arg is prototype obj for newly created obj 
    * Second optional arg is same as 2nd arg to Object.defineProperties()
* If pass set of property descriptors to Object.create(), then they are used to add properties
to newly created obj 
* Object.defineProperty() and Object.defineProperties() throw TypeError if creating or modifying 
property not allowed 
    * writable attribute governs attempts to changing value attribute. configurable attribute 
    governs attempts to change other attributes (also specifies whether property can be 
    deleted). possible to change value of nonwritable property if property is configurable. 
    possible to change property from writable to nonwritable even if property is nonconfigurable.
    * If obj is not extensible, can edit existing own properties but cannot add new properties to it 
    * If property is not configurable, cannot change its configurable or enumerable attributes 
    * If accessor property is not configurable, cannot change its getter or setter method, 
    cannot change it to a data property.
    * If data property is not configurable, cannot change it to accessor property.
    * If data property is not configurable, cannot change its writable attribute from false 
    to true but can change it from true to false.
    * If data property is not configurable and not writable, cannot change its value. Can change 
    value of property that is configurable but nonwritable; same as making it writable, changing 
    value, then converting it back to nonwritable.
* extend() function ----- see earlier 
    * Copied name and value of properties from one object to another; ignored attributes. 
    * Did not copy getter, setter methods of accessor properties but converted them into 
    static data properties 
*/
/* New version of extend that uses Object.getOwnPropertyDescriptor() and Object.defineProperty()
to copy all property attributes 
* Rather than written as function, new version is defined as new Object method and is added 
as nonenumerable property to Object.prototype 
*/
// Copying property attributes 
/*
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the object on which it is called by copying properties
 * from the object passed as its argument.  All property attributes are
 * copied, not just the property value.  All own properties (even non-
 * enumerable ones) of the argument object are copied unless a property
 * with the same name already exists in the target object.
 */
Object.defineProperty(Object.prototype,
    "extend",                  // Define Object.prototype.extend
    {
        writable: true,
        enumerable: false,     // Make it nonenumerable
        configurable: true,
        value: function(o) {   // Its value is this function
            // Get all own props, even nonenumerable ones
            var names = Object.getOwnPropertyNames(o);
            // Loop through them
            for(var i = 0; i < names.length; i++) {
                // Skip props already in this object
                if (names[i] in this) continue;
                // Get property description from o
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                // Use it to create property on this
                Object.defineProperty(this, names[i], desc);
            }
        }
    });

/* Legacy API for getters and setters 
    * Can use Object.getOwnPropertyDescriptor(), Object.defineProperty() to query getter 
    and setter methods or to add new accessor properties to existing objs 
    * API consists of 4 methods available on all objs:
        * __lookupGetter__(), __lookupSetter__() return getter, setter method for named property
        * __defineGetter__(), __defineSetter__() define getter, setter: pass prop name, then 
        getter or setter method second 
    * Double underscores indicate nonstandard methods */

// Object attributes: Every obj has associated prototype, class, extensible attributes 
/* prototype attribute: Specifies obj from which it inherits properties ("prototype of o")
    * When prototype appears in code font, refers to ordinary obj property, not prototype attribute 
    * Set when obj is created
        * Objs created from obj literals use Object.prototype as prototype 
        * Objs created with new use value of prototype property of constructor function as prototype 
        * Objs created with Object.create() use first arg to that fx (which may be null) as prototype
    * Can query prototype of any object by passing that obj to Object.getPrototypeOf()
        * ECMAScript 3: o.constructor.prototype 
    * Objs created with new expression usually inherit constructor property that refers to constructor 
    fx used to create obj 
    * Constructor fxs have prototype property that specifies prototype for objs created using that 
    constructor 
    