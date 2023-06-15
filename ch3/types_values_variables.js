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




// Object to primitive conversions


