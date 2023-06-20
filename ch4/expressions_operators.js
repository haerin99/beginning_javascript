// Beginning JavaScript by David Flanagan
// Ch 4

/* Expression is phrase of JavaScript that interpreter can evaluate to produce
a value (e.g., constant, variable name).
* Complex expressions are built from simpler expressions
    * Array access expression, function invocation expression 
* Operator returns a value, rather than "evaluates to" a value */

/* Primary expressions: Simplest expressions; stand alone; do not include any 
simpler expressions */
// Literals: constant values embedded directly in program
1.23        // number literal
"hello"     // string literal
/pattern/   // regular expression literal
// Some reserved words
true 
false
null
this   // Evaluates to "current" object; used in object-oriented programming
// Bare variable reference
i
sum
undefined         // global variable, not keyword like null

/* Object and array initializers: expressions whose value is newly created obj
or array. Sometimes called "object literals", "array literals."
    * Not primary expressions. Include subexpressions that specify property and
    element values. */
/* Array initializer: comma-separated list of expressions contained within square
brackets. */
[]         // Empty array
[1+2, 3+4] // 2-element array
var matrix = [[1,2,3], [4,5,6], [7,8,9]];   // Nested array
var sparseArray = [1,,,,5];    // 5 elements, including three undefined elements
/* Object initializer expressions: curly brackets, each subexpression is 
prefixed with property name and colon */
var p = { x:2.3, y:-1.2 };    // Object with 2 properties
var q = {};                   // Empty object with no properties
q.x = 2.3; q.y = -1.2;        // Now q has same properties as p
var rectangle = { upperLeft: {x: 2, y: 2},
                    lowerRight: { x: 4, y: 5} };
/* Property names may be strings rather than identifiers.
Expressions in obj initializer need not have constant values */
var side = 1;
var square = { "upperLeft": {x: p.x, y: p.y },     
            'lowerRight': { x: p.x + side, y: p.y + side}};

// Function definition expression ("function literal")
var square = function(x) { return x * x; }

/* Property access expressions
    * expression.identifier: Expression specifies object. Identifier specifies 
    name of desired property.
        * Can only be used when desired property has name that is legal 
        identifier, and when you know the name when you write program. 
    * expression[expression]: First expression is object or array. Second 
    expression specifies name of desired property of index of desired array
    element. 
        * If property name is reserved word or includes spaces or punctation, or 
        when it is number (for arrays), must use square bracket notation.
    * If value of expression before . or [ is null or undefined, expression 
    throws TypeError. If named property does not exist, value of property access
    expression is undefined. */
var o = {x:1,y:{z:3}};  // An example object
var a = [o,4,[5,6]];    // An example array that contains the object
o.x                     // => 1: property x of expression o
o.y.z                   // => 3: property z of expression o.y
o["x"]                  // => 1: property x of object o
a[1]                    // => 4: element at index 1 of expression a
a[2]["1"]               // => 6: element at index 1 of expression a[2]
a[0].x                  // => 1: property x of expression a[0]

/* Invocation expression: JavaScript's syntax for calling (or executing) a
function or method */
f(0)             // f is function expression; 0 is arg expression
Math.max(x,y,z)  // Math.max is function, x,y,z are args
a.sort()         // a.sort is function; no args
/* Method invocation: Expression before open parenthesis is a property access 
function. Object or array that is subject of property access becomes value of
this parameter while body of function is being executed
* Other invocation expressions normally use global object as value of this
keyword.

/* Object creation expression: Creates new object and invokes function (called
constructor) to initialize properties of obj. Like invocation expression, except
prefixed with keyword new. */
new Object()
new Point(2, 3)
// If no args passed to constructor function, can omit empty pair of parentheses
new Object
new Date

/* Operator overview
++           increment
--           decrement
-            negate
+            convert to num
~            invert bits
!            invert boolean value
delete       remove property
type of      determine type of operand
void         return undefined value
*, /, %      multiply, divide, remainder
+, -         add, subtract
+            concatenate strings
<<           shift left
>>           shift right with sign extension
>>>          shift right with zero extension
<,<=,>,>=    compare in numeric/alphabetic order
instanceof   test object class
in           test whether property exists
==           test for equality
!=           test for inequality
===          test for strict equality
!==          test for strict inequality
&            compute bitwise AND
^            compute bitwise XOR
|            compute bitwise OR
&&           compute logical AND
||           compute logical OR
?:           choose 2nd or 3rd operand
=            assign to variable or property
*=,/=,%=,+=  operate and assign
-=,&=,^=,|=,
<<=,>>=,>>>=
,            discard 1st operand, return 2nd
*/

/* Numbers of operands
    * Arity: Number of operands that operators expect
    * Binary operators: combine two expressions into a single, more complex
    expression
    * Unary operators: convert single expression into single, more complex
    expression (e.g., unary - operator)
    * Ternary operator: combines three expressions into single expression (e.g., 
    conditional operator ?:) */

/* Operand and result type
* Most operators expect operands to be of a specific type and return value of
specific type. JavaScript operators usually convert type of operands as needed. 
    * Multiplication operator * expects numeric operands but "3" * "5" is legal.
    Value of expression is 15, not "15." 
    * Every JavaScript value is either "truthy" or "falsy", so operators that
    expect boolean operands will work with operand of any type. */

/* Lvalue: an expression that can legally appear on left side of assignment
expression (e.g., variables, obj properties, array elements)
* Assignment operators and a few other operators expect operand of type lval */

/* Operator side effects: their evaluation may affect result of future 
evaluations (e.g., assignment operators, ++ increment operator, -- decrement 
operator, delete operator)
* function invocation, obj creation expressions have side effects if any operators
in function or constructor body have side effects

/* Operator precedence
    * Property access, invocation expressions have higher precedence than any
    operators */

// Operator associativity

// Order of evaluation

/* Arithmetic operations: *, /, %, +, -
    * Evaluate operands, convert values to nums if necessary, compute
    * Non-numeric operands that cannot convert to nums convert to NaN value; 
    if either operand is or converts to NaN, result of operation is NaN
    * All nums are floating-point in JavaScript
    * Sign of result of applying % is same as sign of first operand. Typically
    used with integer operands but also works for floating-point nums. */

/* + operator
    * Gives priority to string concatenation: if either of operands is string
    or obj that converts to string, other operand is converted to string and
    concatenation is performed
    * Addition is performed only if neither operand is string-like */
1 + 2         // => 3: addition
"1" + "2"     // => "12": concatenation
"1" + 2       // => "12": concatenation after number-to-string
1 + {}        // => "1[object Object]": concatenation after object-to-string
true + true   /* => 2: addition after boolean-to-number; booleans are primitives,
                (immutable) not objects, like functions and arrays (mutable) */
2 + null      // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN

/* Unary arithmetic operators: +, -, ++, --
* Convert single operand to number
* Unary operators modify value of single operand to produce new value. In 
JavaScript, all have high precedence and are right-associative.
* Unary plus (+): Converts operand to num (or to NaN), returns converted value
* Unary minus (-): Converts operand to num, changes sign of result
* Increment (++): Adds 1 to single operand, which must be lvalue (variable,
array element, obj property)
    * Return value of ++ operator depends on position relative to operand
    * When used before operand (pre-increment operator), increments operand 
    and evaluates to incremented value of operand
    * When used after operand (post-increment operator), increments operand
    but evaluates to unincremented value of operand 
    * Never performs string concatenation. Always converts operand to num and
    increments it. */
var i = 1, j = ++i;    // i and j are both 2
var i = 1, j = i++;    // i is 2, j is 1
var x = "1"
++x                    // 2
x + 1                  // "1"
/* Decrement (--): Expects lvalue operand. Converts value of operand to num, 
subtracts 1, assigns decremented value back to operand.
    * Return value depends on position relative to operand
    * When used before operand, decrements and returns decremented value
    * When used after operand, decrements operand but returns undecremented
    value */

/* Bitwise operators: Perform low-level manipulation of bits in binary
representation of nums. Convert operands to nums, coerce numeric values to 32-
bit ints by dropping fractional part and bits beyond 32nd. 
    * Bitwise AND (&): Bit is set in result if corresponding bit is set in both
    operands (e.g., if both bits are 1, then corresponding resulting bit is 1)
    * Bitwise OR (|)
    * Bitwise XOR (^)
    * Bitwise NOT (~) : Reverses all bits in operand. Changes sign of value,
    subtracts 1.
    * Shift left (<<): Moves all bits in 1st operand to left by num of places
    specified in 2nd operand, which is int between 0 and 31. First bit (ones bit)
    becomes 2nd bit (twos bit), second bit becomes third, etc. Zero is used for new
    first bit, value of 32nd bit is lost. Shifting value left by 1 position is 
    equivalent to multiplying by 2, shifting two positions is equivalent to 
    multiplying by 4, so on.
    * Shift right with sign (>>): Bits filled in on left depend on sign bit of
    original operand to preserve sign of result. If 1st operand positive, result
    has zeros in high bits; if negative, result has ones in high bits. Shifting 
    a value right 1 place is equivalent to dividing by 2 (discarding remainder), etc. 
    * Shift right with zero fill (>>>): Bits shifted on left are always zero, 
    regardless of sign of 1st operand. */
/* Convert negative numbers in base 10 to binary:
    * Get binary representation of the positive number
    * 2's complement notation: replace 1's with 0's and vice versa. Add 1 in 
    binary. */


/* Relational expressions
* Equality and inequality operators
    * Strict equality operator (===): "is strictly equal to"
        * Evaluates operands
        * No type conversion
        * If both values null or undefined, equal
        * If values have different types, not equal
        * If one or both values is NaN, not equal. NaN is never equal to any
        value, including itself. Use x !== x to check whether x is NaN.
        * If one value is 0 and other is -0, equal
        * If values refer to same object, array, function, equal. If refer
        to different objects, not equal even if identical properties.
    * Equality operator (==): "is equal to"
        * If values have same type, test for strict equality. If strictly equal,
        equal.
        * Type conversion
        * If one value null and other undefined, equal
        * If one value num and other is string, convert str to num and compare again
        * If either value is true, convert to 1 and compare again. If either value
        false, convert to 0 and compare again.
        * If one value is object and other is num or str, convert obj to primitive
        by either its toString() method or valueOf() method and compare again. 
    * Assignment operator (=): "gets or is assigned"
    * Inequality operator (!=)
    * Strict inequality operator (!==) */
"1" == true              // => true

/* Comparison operators (<,>,<=,>=)
    * Operands may be of any type. Comparison can be performed only on nums and strings,
    so operands may be converted.
    * If operand evaluates to obj, obj is converted to primitive value.
    * Strings are compared using alphabetical order defined by Unicode values.
    * If operand not string, both operands converted to nums and compared. If operand 
    converts to NaN, comparison operator returns false. */
String.localeCompare()  // Takes locale-specific definitions of alphabetical order into account
String.toLowerCase()    // Case-insensitive comparisons
String.toUpperCase()
/* + favors strings; concatenation if either operand is string. Comparison operators favor 
numbers; only perform string comparison if both operands are strings */
1 + 2        // Addition. Result is 3.
"1" + "2"    // Concatenation. Result is "12".
"1" + 2      // Concatenation. 2 is converted to "2". Result is "12".
11 < 3       // Numeric comparison. Result is false.
"11" < "3"   // String comparison. Result is true.
"11" < 3     // Numeric comparison. "11" converted to 11. Result is false.
"one" < 3    // Numeric comparison. "one" converted to NaN. Result is false.

/* in Operator: Expects left-side operand that is or can be converted to string. 
Expects right-side operand that is object. Evaluates to true if left-side value 
is name of property of right-side obj */
var point = { x:1, y:1 };  // Define an object
"x" in point               // => true: object has property named "x"
"z" in point               // => false: object has no "z" property.
"toString" in point        // => true: object inherits toString method

var data = [7,8,9];        // An array with elements 0, 1, and 2 (indices)
"0" in data                // => true: array has an element "0"
1 in data                  // => true: numbers are converted to strings
3 in data                  // => false: no element 3

/* instanceof operator: Expects left-side operator that is obj and right-side
operand that identifies class of objects. Evaluates to true if left-side obj is
instance of right-side class. 
    * Classes of objs are defined by constructor fx that initializes them, so 
    right-side operand should be function. 
    * Considers "superclasses." If left-side operand is not obj, returns false.
    If right-hand side not fx, throws typeError. 
    * To evaluate expression o instanceof f, JavaScript evaluates f.prototype, 
    then looks for value in "prototype chain" of o. If finds it, then o is instance 
    of f (or of superclass of f), and operator returns true. */
var d = new Date();  // Create a new object with the Date() constructor
d instanceof Date;   // Evaluates to true; d was created with Date()
d instanceof Object; // Evaluates to true; all objects are instances of Object
d instanceof Number; // Evaluates to false; d is not a Number object
var a = [1, 2, 3];   // Create an array with array literal syntax
a instanceof Array;  // Evaluates to true; a is an array
a instanceof Object; // Evaluates to true; all arrays are objects
a instanceof RegExp; // Evaluates to false; arrays are not regular expressions


// Logical expressions 
/* Logical AND (&&)
    * Relational operators have higher precedence than && (and ||) 
    * Can return "truthy" or "falsy" values
    * If first operand is falsy, value of entire expression must be falsy, 
    so && returns value on left and does not evaluate expression on right. 
    * If value on left is truthy, evaluates and returns value on right. */
var o = { x : 1 };
var p = null;
o && o.x          // => 1: o is truthy, so return value of o.x
p && p.x          // => null: p is falsy, so return it and don't evaluate p.x
                    /* p.x would cause TypeError if evaluated; p.x is evaluated
                    only if p is truthy */
// Behavior of && is called "short circuiting"
if (a == b) stop();   // Invoke stop() only if a == b
(a == b) && stop();   // Does same thing
// Logical OR (||)
/* If max_width is defined, use that.  Otherwise look for a value in
the preferences object.  If that is not defined use a hard-coded constant. */
var max = max_width || preferences.max_width || 500;
// Supply default values for parameters
// Copy the properties of o to p, and return p
function copy(o, p) {
   p = p || {};  // If no object passed for p, use a newly created object.
   // function body goes here
}
/* Logical NOT (!) converts operand to boolean value before inverting converted value
    * Convert any value x to equivalent boolean value: !!x */
// Two theorems of Boolean algebra: These two equalities hold for any values of p and q
!(p && q) === !p || !q
!(p || q) === !p && !q

/* Assignment expressions
    * = operator expects left-side operand to be lvalue: variable or obj property (or
    array element). Expects right-side operand to be arbitrary value of any type. */
i = 0           // Set variable i to 0
o.x = 1         // Set property x fo object o to 1.
(a = b) == 0    // Can assign and test value in same expression
i = j = k = 0;  // Evaluated from right to left; assign single value to multiple variables

/* Assignment with operation
    * += works for numbers or strings. For numeric operands, performs addition and 
    assignment. For string operands, performs concatenation and assignment. 
    * +=, -=, *=, /=, %=
    * <<=, >>=, >>>=
    * &=, |=. ^=
* In most cases, a op= b, where op is operator, is equivalent to a = a op b
    * The two cases differ only if a includes side effects such as function call or
    increment operator */
// These assignments are not the same
data[i++] *= 2;        // (data[i++] = data[i++]) * 2
data[i++] = data[i++] * 2;
/* Do this instead:
i++
data[i] *= 2 */

// Evaluation expressions
/* Global function eval()
    * Expects 1 arg. If pass any value other than str, returns that value. If pass str,
    attempts to parse str as JavaScript code. Throws SyntaxError if fails. If successfully
    parses str, then evaluates code and returns value of last expression or statement in str 
    or undefined if last expression or statement had no value. 
    * Uses variable environment of code that calls it (i.e., variable scope) 
    * String of code passed to eval() must make syntactic sense on its own; Otherwise
    SyntaxError 
    * Functon but operator-like */
eval("3+2")    // => 5

/* Global eval()
    * When invoked by any other name, eval() would evaluate string as if top-level global
    code. Could not use or modify any variables local to calling function; would not 
    interfere with local optimizations */
var geval = eval;                 // Using another name does a global eval
var x = "global", y = "global";   // Two global variables
function f() {                    // This function does a local eval
    var x = "local";              // Define a local variable
    eval("x += 'changed';");      // Direct eval sets local variable
    return x;                     // Return changed local variable
}
function g() {                    // This function does a global eval
    var y = "local";              // A local variable
    geval("y += 'changed';");     // Indirect eval sets global variable
    return y;                     // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global": 
console.log(g(), y); // Global variable changed: prints "local globalchanged":

/* Strict eval()
    * Local eval with private variable environment; in strict mode, evaluated code can
    query and set local variables, but it cannot define new variables or functions in
    local scope 
    * Makes eval into reserved word */

// Miscellaneous operators
/* Conditional operator (?:)
    * Ternary operator (three operands)
    * First operand goes before ?, second goes between ? and :, third goes after : 
    * Operands may be of any type. First operand is evaluated as boolean. If truthy,
    then second operand is evaluated, and its value is returned. If first operand falsy,
    then third operand is evaluated and value returned. Either second or third operand
    is evaluated, never both. 
    * Shortcut for if statement */
x > 0 ? x : -x   // Absolute value of x
/* Checks that variable is defined and has truthy value. Uses it if so or provides default
value if not */
greeting = "hello " + (username ? username : "there"); 
// Equivalent to if statement
greeting = "hello ";
if (username)
    greeting += username;
else 
    greeting += "there";
/* typeof operator
    * Unary operator that is placed before single operand, which can be of any type
    * Value is string that specifies type of operand */
typeof(undefined)                     // => "undefined"
typeof(null)                          // => "object"
typeof(true)                          // => "boolean"
typeof(false)
typeof(/* any num */)                 // => "number"
typeof(NaN)
typeof(/* any str */)                 // => "string"
typeof(/* any fx */)                  // => "function"
typeof(/* any nonfx native obj */)    // => "object"
typeof(/* any host obj */)            /* => implementation-defined string, but not 
                                        "undefined," "boolean," "number," "string" */
(typeof value == "string") ? "'" + value + "'" : value
// typeof is also useful when used with switch statement
/* Can place parentheses around operand to typeof, which looks like fx name rather than 
operator keyword */
typeof(i)
/* To distinguish null from objs, explicitly test for this special-case value
    * typeof may return string other than "object" for host objs. Most host objs in 
    client-side JavaScript have type of "obj" 
* typeof is useful only to distinguish objs from other primitive types
    * Evaluates to "object" for all obj and array values other than functions
    * Returns "function" for all callable objs, whether native or host
* To distinguish one class of obj from another, use other techniques
    * instanceof operator, class attribute, or constructor property */

/* Delete operator: 
    * Unary operator that attempts to delete obj property or array element specified
    as its operand
    * Typically used for property deletion side effect, not for value it returns (like 
    assignment, increment, decrement operators) */
var o = { x: 1, y: 2}; // Start with an object
delete o.x;            // Delete one of its properties
"x" in o               // => false: the property does not exist anymore

var a = [1,2,3];       // Start with an array
delete a[2];           // Delete the last element of the array
a.length               // => 2: array only has two elements now

var o = {x:1, y:2};  // Define a variable; initialize it to an object
delete o.x;          // Delete one of the object properties; returns true
typeof o.x;          // Property does not exist; returns "undefined"
delete o.x;          // Delete a nonexistent property; returns true
delete o;            // Can't delete a declared variable; returns false.
                     // Would raise an exception in strict mode.
delete 1;            // Argument is not an lvalue: returns true
this.x = 1;          // Define a property of the a global object without var
delete x;            // Try to delete it: returns true in non-strict mode
                     // Exception in strict mode. Use 'delete this.x' instead
x;                   // Runtime error: x is not defined

/* void operator
    * Unary operator that appears before single operand, which may be of any type
    * Evaluates operand, then discards value and returns undefined; using void
    operator makes sense only if operand has side effects 
    * Most common use is in client-side javascript: URL, where allowed to evaluate
    expression for side effects without browser displaying value of evaluated 
    expression */
// HTML <a> tag
<a href="javascript:void window.open();">Open New Window</a>
/* Could be more cleanly written using onclick event handler rather than javascript: URL,
so void operator would not be necessary */

/* Comma operator (,)
    * Evaluates left operand, evaluates right operand, returns value of right operand */
i=0, j=1, k=2;   // Evaluates to 2
i = 0; j = 1; k = 2;    // Equivalent to the above
// The first comma below is part of the syntax of the var statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for(var i=0,j=10; i < j; i++,j--)
    console.log(i+j);

