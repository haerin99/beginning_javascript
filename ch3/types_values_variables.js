// Beginning JavaScript by David Flanagan
// Ch 3

a.sort();            // object-oriented version of sort(a)

/* Hexadecimal literals begin with 0x, followed by string
of hexadecimal digits 
    * a through f (or A through F) represent values 10 
    through 15 */
0xff // 15 * 16 + 15 = 255 (base 10)
0xCAFE911 

// Floating-point literals
3.14
2345.789
.333333333333333333
// may be represented using exponential notation
6.02e23        // 6.02 x 10^23
1.4738223E-32  // 1.4738223 x 10^-32

// Arithmetic
Math.pow(2,53)          // 2 to the power 53
Math.round(.6)          // Round to the nearest integer
Math.ceil(.6)           // Round up to an integer
Math.floor(.6)          // Round down to an integer
Math.abs(-5)            // Absolute values
Math.max(x,y,z)         // Return largest argument
Math.min(x,y,z)         // Return smallest argument
Math.random()           // Pseudo-random number x where 0 <= x < 1.0
Math.PI
Math.E                  // e: Base of natural logarithm
Math.sqrt(3)
Math.pow(3, 1/3)        // Cube root of 3
Math.sin(0)             // Math.cos, Math.atan, etc.
Math.log(10)            // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2  // Base 2 logarithm of 512
Math.exp(3)             // Math.E cubed

/* JavaScript does not raise errors in cases of overflow (Infinity),
underflow (-Infinity), or division by zero (Infinity or 
-Infinity). 
    * Zero divided by zero results in Not-a-Number value (NaN) 
*/
/* NaN also arises if 
    * divide infinity by infinity,
    * square root of negative number
    * arithmetic operators with non-numeric operands 
    that cannot be converted to numbers. */

Infinity        // A read/write variable initialized to Infinity.
Number.POSITIVE_INFINITY  // Same value, read-only
1/0                       // Same value
Number.MAX_VALUE + 1      // Evaluates to Infinity

Number.NEGATIVE_INFINITY  // Expressions are negative infinity.
-Infinity
-1/0
-Number.MAX_VALUE - 1

NaN             // A read-write variable initialized to NaN
Number.NaN      // A read-only property holding the same value
0/0             // Evaluates to NaN

Number.MIN_VALUE/2    // Underflow: evaluates to 0
-Number.MIN_VALUE/2   // Negative zero
-1/Infinity           // Also negative 0
-0

// NaN doesn't compare equal to any value
// Determine whether value of x is NaN
x != x        // can't write x == NaN
isNaN()       /* true if argument is NaN or non-numeric 
                value such as string or object */
isFinite()    /* true if argument is a number other than
                NaN, Infinity, or -Infinity */

/* Negative zero and positive zero are almost
indistinguishable, except when used as a divisor */
var zero = 0;    // Regular zero
var negz = -0;   // Negative zero
zero === negz    // => true
1/zero === 1/negz // => false

/* Strict equality operator: === 
considers operands of different types to be different */

// Binary floating-point and rounding errors
var x = .3 - .2;   // thirty cents minus 20 cents
var y = .2 - .1;   // twenty cents minus 10 cents
x == y             // => false
x == .1            // => false
y == .1            // => true
/* Perform financial calculations using scaled integers
    Manipulate monetary values as integer cents
    rather than fractional dollars */

/* Dates and times
    * Date() constructor for creating objects that
    represent dates and times */
// 1st day of 1st month of 2010 
var then = new Date(2010, 0 , 1);  
// Same day, at 5:10:30pm, local time
var later = new Date(2010, 0 , 1, 17, 10, 30);
// Current date and time
var now = new Date(); 
// Date subtraction: interval in milliseconds
var elapsed = now - then;

later.getFullYear()           // => 2010
later.getMonth()              // => 0: zero-based months
later.getDate()               // => 1: one-based days
later.getDay()                /* => 5: day of week. 0 is
                                Sunday. 5 is Friday. */
later.getHours()              // => 17: 5 pm, local time
later.getUTCHours()           /* hours in UTC time;
                                depends on timezone */
later.toString()              /* => "Fri Jan 01 2010 
                            17:10:30 GMT-0800 (PST)" */
later.toUTCString()           /* => "Sat, 02 Jan 2010 
                                01:10:30 GMT" */
later.toLocaleDateString()    // => "01/01/2010"
later.toLocaleTimeString()    // => "05:10:30 PM"
later.toISOString()     /* => "2010-01-02T01:10:30.000Z"; 
                            ES5 only” */

/* String: Immutable ordered sequence of 16-bit values
    * Length is number of 16-bit values it contains */
var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
p.length     // => 1: p consists of 1 16-bit element
e.length     /* => 2: UTF-16 encoding of e is 2 16-bit 
               "\ud835\udc52" */

// String literals
""   // Empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"This string\nhas two lines"
"π is the ratio of a circle's circumference to its diameter"

"two\nlines"   /* String representing 2 lines written 
                    on one line */
`one           // One-line string, using backticks
long
line`          

"one" +
    "long" +
    "line"

/* When combining JavaScript and HTML, use one style of
quotes for JavaScript and the other style for HTML. */
<button onclick="alert('Thank you')">Click Me</button>
    /* JavaScript expression double-quoted within HTML
    event-handler attribute */

// Escape sequences
\0          // NUL character
\b          // Backspace
\t          // Horizontal tab 
\n          // Newline character
\v          // Vertical tab
\f          // Form feed
\r          // Carriage return 
\"          // Double quote
\'          // single quote (or apostrophe) character)
    'You\'re right, it can\'t be a quote'
\\          // Backslash
\x XX       /* Latin-1 character specified by two 
                hexadecimal digits XX */
    \xA9        // copyright symbol
\u XXXX     /* Unicode character specified by four
                hexadecimal digits XXXX */

// Concatenate strings
msg = "Hello, " + "world";   // Produces the string "Hello, world"
greeting = "Welcome to my blog," + " " + name;

// String methods
s.length          // Length of string s
var s = "hello, world"        // Start with some text.
s.charAt(0)                   // => "h": the first character.
s.charAt(s.length-1)          // => "d": the last character.
s.substring(1,4)              // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4)                  // => "ell": same thing
s.slice(-3)                   // => "rld": last 3 characters
s.indexOf("l")                // => 2: position of first letter l.
s.lastIndexOf("l")            // => 10: position of last letter l.
s.indexOf("l", 3)             // => 3: position of first "l" at or after 3
“s.split(", ")                 // => ["hello", "world"] split into substrings
// Returns new strings; does not modify string
s.replace("h", "H")           // => "Hello, world": replaces all instances
s.toUpperCase()               // => "HELLO, WORLD”

// Can treat strings as arrays
s = "hello, world";
s[0]                   // => "h"
s[s.length-1]          // => "d"

/* Pattern matching
    * RegExp() constructor for creating objects that
    represent textual patterns
    * Strings and RegExp objects have methods for
    pattern matching and search-and-replace operations
    using regular expressions */
/* Regular expression literal is text between pair of 
slashes. Second slash can be followed by one or more 
letters which modify pattern meaning. */
/^HTML/     // Match letters H T M L at start of string
/[1-9][0-9]*/ /* Match non-zero digit, followed by any 
                # of digits */
/\bjavascript\b/i /* Match "javascript" as a word,
                    case-insensitive */
/* RegExp objects define methods, and strings also have
methods that accept RegExp arguments. */
var text = "testing: 1, 2, 3";   // Sample text
var pattern = /\d+/g    /* Matches all instances of one 
                        or more digits */
pattern.test(text)     // => true: a match exists
text.search(pattern)   // => 9: position of first match
text.match(pattern)    // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/);     // => ["", "1", "2", "3"]: split on non-digits

/* Boolean values
    * Any JavaScript value can be converted to a boolean value
    * Any time JavaScript expects a boolean value, a falsy value
    works like false and a truthy value works like true */
// falsy values: Convert to, and therefore work like, false
undefined
null
0
-0
NaN
""    // the empty string
/* truthy values: All other values, including all objects (and 
arrays) convert to, and work like, true */
/* Suppose variable o either holds an object or value null. Can
test explicitly to see if o is non-null */
if(o !== null)   // Same as...
if(o)
toString()      // Converts boolean values to strings "true" or "false"
&&              /* Boolean AND operation; evaluates to truthy 
            value iff both operands are truthy; falsy value otherwise */
||              /* Boolean OR operation: evaluates to truthy
            value if either one (or both) operands is truthy;
            falsy value if both operands falsy */
!               /* Boolean NOT operation; unary operator:
                evaluates to false if its operand is truthy. */
if ((x == 0 && y == 0) || !(z == 0)) {
    // x and y are both zero or z is non-zero
}

// null and undefined: absence of value
null          /* program-level, normal, expected 
                 * for numbers, strings, objects */
typeof(null)  /* => 'object': sole member of its own type;
            special object value that indicates "no object" */
undefined /* system-level, unexpected, error-like
            * value of variables that have not be initialized,
            when query value of object property or array element 
            does not exist, returned by functions that have no 
            return value, value of function parameters for which 
            no argument is supplied */
typeof(undefined) // => 'undefined': sole member of a special type
null == undefined // => true
null === undefined // => false
/* . or [] to access a property or method of these values causes
TypeError 
    * Use null to assign one of these values to variable/property
    or to pass to a function */

/* Global object
    * Properties are globally defined symbols that are available
    to a JavaScript program
    * If code declares global variable, variable is property of 
    global object
    * When JavaScript interpreter starts (or web browser loads
    new page), JavaScript interpreter creates new global object 
    and gives it an initial set of properties that define:
*/
// Global properties
undefined
Infinity
NaN
// Global functions
isNaN()
parseInt()
eval()
//Constructor functions
Date()
RegExp()
String()
Object()
Array()
// Global objects
Math
JSON
// Refer to global object using JavaScript keyword this
var global = this;     /* Define global variable to refer to 
                          global object */
/* Window object
    * In client-side JavaScript, serves as global object for all
    JavaScript code contained in browser Window
    * Has self-referential window property that can be used
    instead of this
    * Defines core global properties and few other globals that 
    are specific to web browsers and client-side JavaScript
*/

/* Wrapper objects: Temporary objects created when accessing
property of string, number, boolean
* Refer to value of property using . notation
    * Method: When value of property is a function */
o.m()        // Invoke method m of an object o
var s = "hello world!";     // A string
// Use string properties
var word = s.substring(s.indexOf(" ")+1, s.length); 
/* Strings are not objects but have properties
    * When you refer to property of string s, JavaScript converts
    string value to object, as if by calling new String(s)
    * Object inherits string methods and is used to resolve
    property reference. Once property is resolved, object is
    discarded.
* Numbers and booleans have methods for same reason: temp object
is created using Number() or Boolean() constructor. Method is
resolved using temp object. 
* No wrapper objects for null and undefined values
    * Trying to access property of one of these values causes
    TypeError
*/
var s = "test";          // Start with a string value
s.len = 4;               /* Set a property on it; creates temp 
                            String obj, sets len property to 4, 
                            discards obj */
var t = s.len;           /* Now query the property; creates new
                            String obj from original (unmodified)
                            string value, tries to read len 
                            property (does not exist) */
t                        // => undefined
/* String, number, and boolean values differ from objects
    * Properties are read-only
    * Can't defined new properties on them */
/* Possible (almost never necessary or useful) to explicitly
create wrapper objects */
var s = "test", n = 1, b = true;  // String, number, boolean value
var S = new String(s);            // String object
var N = new Number(n);            // Number object
var B = new Boolean(b);           // Boolean object
/* JavaScript converts wrapper objects into wrapped primitive
value as necessary; S, N, B usually behave just like s, n, b 
    * == equality operator treats value and its wrapper objects
    as equal
    * === strict equality operator and typeOf operator 
    distinguishes them
*/

/* Immutable primitive values and mutable object references
    * Primitive values: undefined, null, booleans, numbers, strings
    * Objects: arrays, functions
*/
/* Primitives are immutable 
    * All string methods that appear to return modified string 
    are, in fact, returning new string value */
var s = "hello";    // Start with lowercase text
s.toUpperCase();    // Returns "HELLO", but doesn't alter s
s                   // => "hello": original string has not changed
/* Primitives are compared by value
    * JavaScript treats two distinct string values as equal iff
    they have same length and if character at each index is same. */
// Objects are mutable
var o = { x:1 };       // Start with an object
o.x = 2;               // Mutate it by changing value of a property
o.y = 3;               // Mutate it again by adding a new property
var a = [1,2,3]        // Arrays are also mutable
a[0] = 0;              // Change value of array element
a[3] = 4;              // Add a new array element
// Objects are not compared by value
var o = {x:1}, p = {x:1}; // Two objects with same properties
o == p                    // => false: distinct objects are never equal
var a = [], b = [];       // Two distinct, empty arrays
a == b                    // => false: distinct arrays are never equal
/* Objects are reference types. Object values are references. Objects
are compared by reference. */
var a = [];  // Variable a refers to empty array.
var b = a;   // b refers to same array; does not create copy of object
b[0] = 1;    // Mutate array referred to by variable b.
a[0]         // => 1: the change is also visible through variable a
a == b       // => true: a and b refer to same object; they are equal
/* Make a copy of an object or array
    * Explicitly copy properties of object or elements of array */
var a = ['a', 'b', 'c'];   // Array we want to copy
var b = [];                   // Distinct array we'll copy into
for(var i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy element of a into b
}
/* Compare two distinct objects or arrays
    * Compare their properties or elements */
function equalArrays(a,b) {
    if (a.length != b.length) return false; // Different-size arrays not equal
    for(var i = 0; i < a.length; i++)   // Loop through all elements
        if (a[i] !== b[i]) return false;  // If any differ, arrays not equal
    return true;                          // Otherwise equal
}

// Type conversions
10 + " objects"  // => "10 objects": Number 10 converts to a string
"7" * "4"       // => 28: Both strings convert to numbers
var n = 1 - "x";  // => NaN: String "x" can't convert to a number
n + " objects"   // => "NaN objects": NaN converts to string "NaN"
/* Primitive-to-primitive conversions: string, number, boolean, object
* undefined -> NaN, false
* null -> 0, false
* true -> 1
* "" -> 0, false
* "one" -> NaN, true
* 0, -0 -> false
* NaN -> false, new Number(NaN)
* Infinity, -Infinity -> true
* 1 -> true
* [] -> 0, true
* [9] -> 9, true
* ['a'] -> use join() method, NaN, true
* function(){} -> NaN, true */
/* Primitive-to-object conversions: primitive values convert to their wrapper
object as if by calling String(), Number(), Boolean() constructor.
    * Exceptions are null, undefined: TypeError exception; Object() function
    returns newly created empty object {} */

// Conversions and equality
// The following are true
null == undefined // treated as equal
"0" == 0      // String, Boolean convert to number before comparing
0 == false
"0" == false
// Convertibility of one value to another does not imply equality

/* Explicit conversions
    * Boolean(), Number(), String(), Object() functions are constructors for
    wrapper objects
    * When invoked without new operator, they work as conversion functions
*/
Number("3")    // => 3
String(false)  // => "false" Or use false.toString()
Boolean([])    // => true
Object(3)      // => new Number(3)
// Operators perform implicit type conversions
x + "" // + operand; same as String()
+x     // Unary + operand; same as Number(x). May also see x-0
!!x    /* Unary ! operator converts operand to boolean and negates it; same 
        as Boolean(x). */
/* toString() method defined by Number class accepts optional argument that
specifies base (between 2 and 36) for conversion. Otherwise, base 10. */
var n = 17;
binary_string = n.toString(2);       // Evaluates to "10001"
octal_string = "0" + n.toString(8);  // Evaluates to "021"
hex_string = "0x" + n.toString(16);  // Evaluates to "0x11"
/* number-to-string conversions
    * toFixed() converts number to string with a specified number of digits
    after decimal point; no exponential notation
    * toExponential() converts number to string using exponential notation
    * toPrecision() converts number to string with number of significant digits
    specified; exponential notation if number of sig digits is not large 
    enough to display entire int portion of number */
var n = 123456.789;
n.toFixed(0);        // "123457"
n.toFixed(2);        // "123456.79"
n.toFixed(5);        // "123456.789000"
n.toExponential(1);  // "1.2e+5"
n.toExponential(3);  // "1.235e+5"
n.toPrecision(4);    // "1.235e+5"
n.toPrecision(7);    // "123456.8"
n.toPrecision(10);   // "123456.7890"
/* string-to-number conversions
    * Number() conversion function attempts to parse string as integer or float.
    Only works for base-10 ints. 
    * parseInt() parses only integers. Interprets strings that begin with "0x"
    or "0X" as a hexadecimal numbers.
    * parseFloat() parses both integers and floating-point numbers
    * parseInt(), parseFloat() skip whitespace, parse as many numeric characters
    as they can, ignore trailing. If first nonspace character is not part of 
    valid numeric literal, return NaN. */
parseInt("3 blind mice")     // => 3
parseFloat(" 3.14 meters")   // => 3.14
parseInt("-12.34")           // => -12
parseInt("0xFF")             // => 255
parseInt("0xff")             // => 255
parseInt("-0XFF")            // => -255
parseFloat(".1")             // => 0.1
parseInt("0.1")              // => 0
parseInt(".1")               // => NaN: integers can't start with "."
parseFloat("$72.47");        // => NaN: numbers can't start with "$”
/* parseInt() accepts optional second arg specifying radix (base) of number
to be parsed (2 to 36) */
parseInt("11", 2);           // => 3 (1*2 + 1)
parseInt("ff", 16);          // => 255 (15*16 + 15)
parseInt("zz", 36);          // => 1295 (35*36 + 35)
parseInt("077", 8);          // => 63 (7*8 + 7)
parseInt("077", 10);         // => 77 (7*10 + 7)”

/* Object to primitive conversions
    * Object-to-boolean: All objects (incl arrays, functions) convert to true. 
    Also for wrapper objects; new Boolean(false) is an object, so it converts 
    to true.
    * Object-to-string, object-to-number: Invoke method of object to be 
    converted. */
/* All native objects inherit 2 conversion methods:
    1. toString() returns string representation of object. Classes define more
    specific versions of the method. The toString() method of...
        a. Array class: converts each array element to string, joins resulting
        strings together with commas
        b. Function class: returns implementation-defined representation of
        function (i.e. strings of JavaScript source code)
        c. Date class: returns human-readable (& JavaScript-parsable) date and
        time string.
        d. RegExp class: converts RegExp objects to string that looks like
        RegExp literal... 
    2. valueOf() is supposed to convert object to primitive value that 
    represents the object if primitive value exists; returns object itself 
        a. Wrapper classes define valueOf() methods that return wrapped
        primitive value
        b. Arrays, functions, regular expressions inherit default method 
        c. Date class defines valueOf() method that returns date in internal
        representation: number  of milliseconds since January 1, 1970 */
// toString()
[1,2,3].toString()                // => "1,2,3"
(function(x) {                    // => "function(x) {\nf(x);\n}"
f(x);
}).toString();   
new Date(2010,0,1).toString();    //'Fri Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)'
/\d+/g.toString()                 // "/\\d+/g"
// valueOf()
var d = new Date(2010, 0, 1);     // Fri Jan 01 2010 00:00:00 GMT-0500 (Eastern Standard Time)
d.valueOf()                       // => 1262332800000
/* object-to-string conversion
    * If obj has toString() method, JavaScript calls it. If returns primitive
    value, JavaScript converts value to string and returns result.
    * If obj has no toString() method or if method does not return primitive
    value, then JavaScript looks for valueOf() method. If method exists, 
    JavaScript calls it. If return value is a primitive, JavaScript converts
    that value to a string and returns converted value. 
    * Otherwise, JavaScript cannot obtain primitive value; throws typeError
* object-to-number conversion
    * If object has valueOf() method that returns primitive value, JavaScript
    converts value to number and returns result.
    * Otherwise, if object has toString() method that returns primitive value,
    JavaScript converts and returns the value.
    * Otherwise, JavaScript throws TypeError. 
    * So, empty array converts to number 0; array with single element converts
    to a number. 
*/
/* + operator performs numeric addition, string concatenation.
    * If either operand is object, JavaScript converts object using special
    object-to-primitive conversion (rather than object-to-number conversion 
    used by other arithmetic operators)
* == equality operator is similar
    * If asked to compare object with primitive value, converts obj using
    object-to-primitive conversion.
* Special case for Date objects
    * object-to-string conversion (toString() first) for Date objects
    * object-to-number conversion (valueOf() first) for all objects that are
    not dates 
    * Returned primitive value is forced to a number or string
* < operator and other relational operators perform object-to-primitive
conversions like == does, but without special case for Date objects
    * Any obj is converted by trying valueOf() first, then toString()
    * Whatever primitive value obtained is used directly.
* +, ==, !=, and relational operators are only ones that perform special
string-to-primitive conversions. Other operators convert explicitly to 
specified type and do not have special case for Date objects.
    * - operator converts operands to numbers */
var now = new Date();    // Create Date object
typeof (now + 1)         // => "string": + converts dates to strings
typeof (now - 1)         // => "number": - uses object-to-number conversion
now == now.toString()    // => true: implicit and explicit string conversions
now > (now - 1)          // => true: > converts Date to number

// Variable declaration
var i;                     // var keyword
var sum;
var i, sum;                // Declare multiple variables
var message = "hello";     // Combine variable declaration with initialization
var i = 0, j = 0, k = 0;
for(var i = 0; i < 10; i++) console.log(i);   // can be part of for loop
for(var i = 0, j = 10; i < 10; i++, j--) console.log(i*j);
for(var p in o) console.log(p);
// JavaScript variable can hold value of any type
var i = 10;
i = "ten";

/* Repeated and omitted declarations
* Error if... 
    * attempt to read value of undeclared variable
    * assign value to undeclared variable
* In non-strict mode, if assign value to undeclared variable, JavaScript
creates that variable as property of global object; works like properly
declared global variable. But this is bad habit and causes bugs. Always
declare variables with var. */

/* Variable scope
    * Scope of variable: region of program source code in which it is defined
    * Global variable has global scope; defined everywhere in JavaScript code
    * Local variables have local scope
        * Variables declared within function, function parameters are defined 
        only within body of function
        * Takes precedence over global variable with same name */
var scope = "global";           // Declare global variable
function checkscope() {
    var scope = "local";        // Declare local variable with same name
    return scope                // Return local value, not global one
}
checkscope()                    // => "local"
// Must use var to declare local variables
scope = "global";               // Declare global variable, even without var
function checkscope2() {
    scope = "local";            // Oops, changed global variable
    myscope = "local";          // Implicitly declares new global variable
    return [scope, myscope];    // Return two values.
}
checkscope2()                   // => ["local", "local"]: has side effects!
scope                           // => "local": global variable has changed.
myscope                         // => "local": global namespace cluttered
// Nested function definitions
var scope = "global scope";     // global variable
function checkscope() {         
    var scope = "local scope";  // local variable
    function nested() {
        var scope = "nested scope";  // Nested scope of local variables
        return scope;                // Return value in scope here
    }
    return nested();      // Must return nested function to see returned value
}
checkscope()                    // => "nested scope"

/* Function scope and hoisting
    * JavaScript uses function scope, not block scope
    * Function scope: variables are visible within function in which they are
    defined and within any functions that are nested within that function
        * Some programmers declare all variables at top of function, rather
        than closer to point at which they are used
    * Block scope: Each block of code within curly braces has its own scope;
    variables are not visible outside of block in which they are declared
        * Good practice to declare variables as close as possible to where they
        are used with narrowest possible scope
*/
// i, j, k have same scope
function test(o) {
    var i = 0;         // i is defined throughout function
    if (typeof o == "object") {
        var j = 0;     // j is defined everywhere, not just block
        for(var k=0; k < 10; k++) { // k is defined everywhere, not just loop
            console.log(k);         // k is still defined: prints 10 
        }
        console.log(j);             // j is defined, but may not be initialized
    }
    console.log(k);               // => 10
}
/* hoisting: JavaScript behaves as if all variable declarations in a function
(but not associated assignments) are "hoisted" to the top of the function. */
var scope = "global";
function f() {
    console.log(scope);   // Prints "undefined", not "global"
    var scope = "local";  // Variable initialized here, but defined everywhere
    console.log(scope);   // Prints "local"
}

/*  Local variables declared within a function are visible throughout 
function body and before they are declared; they are defined throughout. 
Global variable by same name is hidden throughout function.
* Local variable is not actually initialized until var statement is
executed. */
// Function equivalent to test(o)
function f() {
    var scope;            // Local variable declared at top of function
    console.log(scope);   // Exists here, but still has "undefined" value
    scope = "local";      // Initialize it and give it a value
    console.log(scope);   // Has expected value
}

/* Variables as properties
    * Declaring global JavaScript variable is same as defining property of 
    global object. If you use var to declare variable, property that is created 
    is nonconfigurable (cannot be deleted with delete operator)
    * If assign value to undeclared variable in non-strict mode, JavaScript 
    automatically creates global variable. Variables created in this way are
    regular, configurable properties of global object and can be deleted */
var truevar = 1;     // Properly declared global variable, nondeleteable
fakevar = 2;         // Creates deleteable property of global object 
this.fakevar2 = 3;   // Does same thing 
delete truevar       // => false: variable not deleted 
delete fakevar       // => true: variable deleted 
delete this.fakevar2 // => true: variable deleted
/* Local variables are properties of an object associated with each function 
invocation. "call object" (ECMAScript 3) or "declarative environment record" 
(ECMAScript 5). 
    * Refer to global object with the this keyword 
    * No way to refer to object in which local variables are stored */

/* Scope chain 
    * JavaScript is lexically scoped language: scope of variable is set of
    source code lines for which variable is defined 
    * Global variables are defined throughout program. Local variables are 
    defined throughout function in which they are declared, and also within 
    any functions nested within that function. 
    * Think of local variables as properties of some kind of implementation- 
    defined object. 
    * Another way to think about variable scope: Every chunk of code has a 
    scope chain associated with it.
        * Scope chain: List or chain of objects that defines variables that 
        are "in scope" for that code. 
        * Variable resolution: When JavaScript needs to look up value of 
        variable x, it starts by looking at first object in chain. If obj has 
        property named x, that value of property is used. Otherwise, JavaScript 
        continues search with next object in chain, and so on. 
        * If x is not a property of any objs in scope chain, then x is not in
        scope for that code -> ReferenceError.
    * In top-level JavaScript code (i.e., code not contained within any function 
    definitions), scope chain consists of only global object. 
    * In non-nested function, scope chain consists of two objects
        1. Obj that defines function's parameters and local variables 
        2. Global object 
    * In nested function, scope chain has 3 or more objs 
    * How this chain of objs is created: 
        * When function is defined, it stores scope chain. When function is 
        invoked, it creates new obj to store local variables, and adds that 
        new obj to stored scope chain to create new, longer chain that 
        represents scope for that function invocation. 
        * For nested functions: each time outer function is called, inner 
        function is defined again. Since scope chain differs on each 
        invocation of outer function, inner function will be subtly different 
        each time it is defined. Code of inner function will be identical on 
        each invocation of outer function, but scope chain associated with 
        that code will be different. */

