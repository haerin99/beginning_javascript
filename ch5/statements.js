// Beginning JavaScript by David Flanagan
// Ch 5

/* Statements: Executed to make something happen
    * Conditionals
    * Loops
    * Jumps */

/* Expression statements 
    * Assignment statements (e.g., i *= 3; counter ++;)
    * delete operator
    * Function calls (e.g., alert(greeting);, window.close();)

/* Compound and empty statements
* Statement block: Sequence of statements enclosed within curly braces
    * Combines multiple statements into a single compound statement */
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}   // Does not end with semicolon
// Empty statement is useful when creating loop that has empty body
 ;
// Initialize array a
for(i = 0; i < a.length; a[i++] = 0) ;
// Including semicolon after right parenthesis can cause bugs
if ((a == 0) || (b == 0));   // Oops! This line does nothing...
    o = null;                 // and this line is always executed.
// Comment code to make it clear that using empty statement on purpose
for(i = 0; i < a.length; a[i++] = 0) /* empty */ ;

// Declaration statements 
// var
var i;                                        // One simple variable
var j = 0;                                    // One var, one value
var p, q;                                     // Two variables
var greeting = "hello" + name;                // A complex initializer
var x = 2.34, y = Math.cos(0.75), r, theta;   // Many variables
var x = 2, y = x*x;                           // Second var uses the first
var x = 2,                                    // Multiple variables...
    f = function(x) { return x*x },           // each on its own line
    y = f(x);
for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++,j--) console.log(i*j);
for(var i in o) console.log(i);
/* function
    * fx declaration statements may appear in top-level JavaScript code,
    or nested within other fxs. May not appear within if statements, while
    loops, or other statements. */
var f = function(x) { return x+1; }  // Expression assigned to a variable
function f(x) { return x+1; }        // Statement includes variable name
function hypotenuse(x, y) {
    return Math.sqrt(x*x + y*y);  // return is documented in the next section
}
function factorial(n) {           // A recursive function
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Conditionals 
// if 
if (expression)        // JavaScript syntax requires single statement
    statement
if (!address) {        // Can use statement block
    address = "";
    message = "Please specify a mailing address.";
}
if (expression)        // Second form
      statement1       // Executes statement1 if expression is truthy
else
      statement2       // Executes statement2 if expression is falsy
if (i == j) {          // Use curly braces to clarify which if the else goes with
    if (j == k) {
        console.log("i equals k");
    }
}
else {  // What a difference the location of a curly brace makes!
    console.log("i doesn't equal j");
}
// else if
if (n == 1) {
    // Execute code block #1
}
else if (n == 2) {
    // Execute code block #2
}
else if (n == 3) {
    // Execute code block #3
}
else {
    // If all else fails, execute block #4
}
/* switch: Equivalent to repeated if/else statements
    * When all branches depend on value of same expression
    * Matching case is determined using === identity operator 
    * Avoid using case expressions that contain side effects such as function 
    calls or assignments; limit to constant expressions */
switch(expression) {
      statements
}
switch(n) {              // 
  case 1:                      // Start here if n == 1
    // Execute code block #1.”
    break;                     // Stop here
  case 2:                      // Start here if n == 2
    // Execute code block #2.
    break;                     // Stop here
  case 3:                      // Start here if n == 3
    // Execute code block #3.
    break;                     // Stop here
  default:                     // If all else fails...
    // Execute code block #4.
    break;                     // stop here
}
function convert(x) {
    switch(typeof x) {
      case 'number':            // Convert the number to a hexadecimal integer
        return x.toString(16);
      case 'string':            // Return the string enclosed in quotes
        return '"' + x + '"';
      default:                  // Convert any other type in the usual way
        return String(x);
    }
}

/* Loops
    * while
    * do/while 
    * for 
    * for/in */
// while
while (expression)
      statement

var count = 0;        
while (count < 10) {
    console.log(count);
    count++;
}
// do/while
do
      statement        // body of loop is executed at least once
  while (expression);  // loop expression is tested at bottom of loop

function printArray(a) {
    var len = a.length, i = 0;
    if (len == 0)
        console.log("Empty Array");
    else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
// for 
for(initialize ; test ; increment)
      statement

for(var count = 0; count < 10; count++)
    console.log(count);

var i,j;
for(i = 0, j = 10 ; i < 10 ; i++, j--)
    sum += i * j;

function tail(o) {                          // Return the tail of linked list o
    for(; o.next; o = o.next) /* empty */ ; // Traverse while o.next is truthy
    return o;
}
// for/in
for (variable in object)  // variable may be any expression that evalues to lvalue
      statement
// Use for loop to iterate through elements of array
for(var i = 0; i < a.length; i++)  // Assign array indexes to variable i
    console.log(a[i]);             // Print the value of each array element
// Do the same for properties of obj using for/in loop
for(var p in o)        // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property

/* Property enumeration order 
* Enumerate properties of simple objs in order in which they were defined 
* Enumeration order becomes implementation dependent if
    * Obj inherits enumerable properties
    * obj has properties that are integer array indexes
    * used delete to delete existing properties of obj 
    * used Object.defineProperty() or similar methods to alter property attributes 
    of obj
* Inherited properties are enumerated after all noninherited "own" properties
if obj, but are also enumerated in order in which they were defined 
* If obj inherits properties from more than one "prototype" (i.e., if it has 
more than one obj in its "prototype chain"), then properties of each prototype obj in 
chain are enumerated in creation order before enumerating properties of next obj */

/* Jump statements 
    * break: makes interpreter jump to end of loop or other statement 
    * continue: makes interpreter skip rest of body of loop and jump back to top 
    to begin new iteration 
    * return: makes interpreter jump from function invocation back to code that 
    invoked it. also supplies value for invocation.
    * throw: raises or "throws" an exception. designed to work with try/catch/finally 
    statement, which establishes block of exception handling code. */

/* Labeled statements 
    * Only useful to label statements that have bodies (e.g., loops, conditionals)
    * By giving loop a name, can use break and continue statements inside body of
    loop to exit loop or to jump to top of loop to begin next iteration 
    * Labeled statements may be labeled; any statement may have multiple labels */
identifier: statement 
    
mainloop: while(token != null) {
    // Code omitted...
    continue mainloop;  // Jump to the next iteration of the named loop
    // More code omitted...
}

// break: causes the innermost enclosing loop or switch statement to exit immediately
break;
    
for(var i = 0; i < a.length; i++) {
    if (a[i] == target) break;
}

break labelname;   /* jumps to end of, or terminates, enclosing statement that 
                        has specified label */

var matrix = getData();  // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
var sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
compute_sum: if (matrix) {
    for(var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if (!row) break compute_sum;
        for(var y = 0; y < row.length; y++) {
            var cell = row[y];
            if (isNaN(cell)) break compute_sum;
            sum += cell;
        }
    }
    success = true;
}
// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise sum contains the sum of all cells of the matrix.

/* continue 
    * restarts loop at next iteration 
    * Can be used only within body of loop. Otherwise, syntax error. 
    * In while loop, specified expression at beginning of loop is tested again,
    and if it's true, loop body is executed starting from top
    * In do/while loop, execution skips to bottom of loop, where loop condition 
    is tested again before restarting loop at top 
    * In for loop, increment expression is evaluated, and test expression is 
    tested again to determine if another iteration should be documented
    * In for/in loop, loop starts over with next property name being assigned to 
    specified variable */
continue;

continue labelname;

for(i = 0; i < data.length; i++) {
    if (!data[i]) continue;  // Can't proceed with undefined data
    total += data[i];
}

// return 
return expression;        
function square(x) { return x*x; } // Function that has return statement 
square(2)                // Invocation evaluates to 4
// Using return without expression makes function return undefined to caller 
function display_object(o) {
    // Return immediately if the argument is null or undefined.
    if (!o) return;
    // Rest of function goes here...
}

/* exception: signal that indicates exceptional condition or error has occurred
throw an exception: signal such an error or exceptional condition 
catch an exception: handle it, take whatever actions are necessary or appropriate 
to recover from exception */
throw expression;   // expression may evaluate to value of any type
/* Error class and subclasses
* Error obj has name property that specifies type of error and message 
property that holds string passed to constructor function */
function factorial(x) {
    // If the input argument is invalid, throw an exception!
    if (x < 0) throw new Error("x must not be negative");
    // Otherwise, compute a value and return normally
    for(var f = 1; x > 1; f *= x, x--) /* empty */ ;
    return f;
}

/* try/catch/finally: exception handling mechanism
    * try clause: defines block of code whose exceptions are to be handled 
    * catch clause: block of statements that are invoked when exception occurs 
    anywhere within try block 
    * finally block: contains code to clean up after code in try clause; 
    guaranteed to be executed, regardless of what happens in try block 
* try block must be accompanied by catch or finally block
* Braces are required part of syntax
* If finally block causes jump with return, continue, break, throw, or by 
calling method that throws exception, interpreter abandons pending jump and 
performs new jump 
* If finally clause issues return statement, method returns normally, even if 
exception has been thrown and has not yet been handled */
try {
  // Normally, this code runs from the top of the block to the bottom
  // without problems. But it can sometimes throw an exception,
  // either directly, with a throw statement, or indirectly, by calling
  // a method that throws an exception.
}
catch (e) {
  // The statements in this block are executed if, and only if, the try
  // block throws an exception. These statements can use the local variable
  // e to refer to the Error object or other value that was thrown.
  // This block may handle the exception somehow, may ignore the
  // exception by doing nothing, or may rethrow the exception with throw.
}
finally {
  // This block contains statements that are always executed, regardless of
  // what happens in the try block. They are executed whether the try
  // block terminates:
  //   1) normally, after reaching the bottom of the block
  //   2) because of a break, continue, or return statement
  //   3) with an exception that is handled by a catch clause above
  //   4) with an uncaught exception that is still propagating
}

try {
    // Ask the user to enter a number
    var n = Number(prompt("Please enter a positive integer", ""));
    // Compute the factorial of the number, assuming the input is valid
    var f = factorial(n);
    // Display the result
    alert(n + "! = " + f);  
}
catch (ex) {    // If the user's input was not valid, we end up here
    alert(ex);  // Tell the user what the error is
}
    
// Simulate for( initialize ; test ; increment ) body;
initialize ;
while( test ) {
    try { body ; }
    finally { increment ; }
}

/* Miscellaneous statements 
    * with
    * debugger 
    * strict */
/* with 
    * Scope chain: list of objs that are searched in order to perform variable 
    name resolution 
    * with statement temporarily extends scope chain */
/* adds object to front of scope chain, executes statement, restore scope 
chain to original state */
with (object)
    statement      
// Avoid using with, difficult to optimize and runs more slowly
/* with makes it easier to work with deeply nested obj hierarchies
    * No longer need to prefix each form property name with document.forms[0]. 
    That obj is temporarily part of scope chain and is automatically searched when 
    JavaScript needs to resolve identifier such as address */
document.forms[0].address.value      // Access elements of HTML form 
with(document.forms[0]) {            // Add form obj to scope chain 
    // Access form elements directly here. For example:
    name.value = "";
    address.value = "";
    email.value = "";
}
// Avoid with statement, write code above 
var f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";
// Scope chain is used only when looking up identifiers, not when creating new ones 
with(o) x = 1;   /* If obj o has property x, then assign value 1 to that property 
                    * If x is not defined in o, code is same as x = 1 without with 
                    statement 
                    * Assigns to local or global variable named x, or creates new
                    property of global obj 
                    * with statement provides shortcut for reading properties of o, 
                    but not for creating new properties of o*/

/* debugger 
    * Normally does nothing
    * If debugger program is available and is running, this may perform debugging 
    action
    * Acts like breakpoint: execution of JavaScript code stops, can use debugger 
    to print variables' values, examine call stack, and so on. */
/* Suppose getting exception in function f() because called with undefined arg, but 
can't figure out where call is coming from */
function f(o) {
  if (o === undefined) debugger;  // Temporary line for debugging purposes
  ...                             // The rest of the function goes here.
}
f()            // Execution stops, use debugger to inspect call stack


/* "use strict"
    * directive (not statement)
    * Does not include language keywords; just expression statement that consists 
    of special string literal (in single or double quotes)
    * Can appear only at start of script or function body, before real statements
    appear. May be followed or preceded by other string literal expression statements,
    which JavaScript implementations can interpret as implemention-defined directives.
    String literal expression statements that follow first regular statement in script 
    or function are ordinary expression statements; may not be interpreted as directives,
    no effect.
    * Indicates that code that follows (in script or function) is strict code. Strict 
    code is executed in strict mode, which is restricted subset of language that fixes 
    few important language deficiencies, provides stronger error checking and 
    increased security.
* Differences between strict mode and non-strict mode 
    * with statement is not allowed in strict mode 
    * In strict mode, all variables must be declared: ReferenceError is thrown if 
    you assign value to identifier that is not declared variable, function, function 
    parameter, catch clause parameter, or property of global obj. (In non-strict 
    mode, this implicitly declares global variable by adding new property to 
    global obj).
    * In strict mode, functions invoked as functions (rather than as methods) have 
    a this value of undefined. (In non-strict mode, functions invoked as functions 
    are always passed global obj as their this value.) This difference can be used to 
    determine whether implementation supports strict mode */
var hasStrictMode = (function() { "use strict"; return this===undefined}());
