// Beginning JavaScript by David Flanagan
// Ch 8

/* Function: Block of JavaScript code that is defined once but may be executed, 
or invoked, any number of times.
    * Also called subroutine, procedure
    * Parameterized: function definition may include list of identifiers, 
    known as parameters, that work as local variables for body of fx
    * Function invocations provide values, or arguments, for fx's parameters 
    * Functions often use their arg values to compute return value that 
    becomes value of function-invocation expression 
    * Invocation context: Value that each invocation has, in addition to args, 
    that is value of this keyword
    * Method of obj: Function that is assigned to prop of obj
    * When fx is invoked on or through obj, that obj is invocation context or 
    this value for fx
    * Constructors: Functions designed to initialize newly created obj
    * Functions are objs and can be manipulated by programs (e.g., assign 
    functions to variables and pass them to other functions)
        * Can set properties on them, invoke methods on them
    * Function definitions can be nested within other functions
        * Have access to any variables that are in scope where they are defined;
        JavaScript functions are closures
    */

/* Defining functions 
    * function keyword
        * Can be used in function definition expression or in function 
        declaration statement (function)
    * Identifier that names the function 
        * Required for function declaration statements; used as name of variable; 
        newly defined function obj is assigned to variable
        * Optional for function definition expressions; if present, name refers 
        to function obj only within body of function itself 
    * Pair of parentheses around comma-separated list of zero or more identifiers, 
    which are parameter names for function, and they behave like local variables 
    within body of function 
    * Pair of curly braces with zero or more JavaScript statements inside; these 
    statements are body of function: executed whenever function is invoked 
    * Function declaration statement: Declares a variable, assigns function obj 
    to it 
    * Function definition expression: Does not declare a variable
        * Well-suited for fxs that are used only once, as in last 2 examples 
        below 
    * Name is allowed for functions that need to refer to themselves, i.e., 
    recursive functions 
    * If fx definition expression includes a name, local function scope for that
    function will include binding of that name to fx obj 
        * Fx name becomes local variable within function 
    * Most functions defined as expressions do not need names
    * Function declaration statements are "hoisted" to top of enclosing script or 
    enclosing function; functions in this way may be invoked from code that appears 
    before they are defined 
        * Not true for fxs defined as expressions; in order to invoke fx, must be able 
        to refer to it. Can't refer to fx defined as expression until it is assigned to 
        variable. 
    * Variable declarations are hoisted 
    * Return statement: Causes fx to stop executing, to return value of its expression 
    (if any) to caller 
        * If does not have associated expression, returns undefined value
        * If fx does not contain return statement, executes each statement in fx body 
        and returns undefined value to caller 
    * Most of fxs below are designed to compute value; they use return to return value 
    to caller
    * printprops() function: outputs names and values of obj's props; no return value 
    necessary, and fx does not include return statement 
        * Procedures: Fxs with no return value 
    */
// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
    for(var p in o) 
        console.log(p + ": " + o[p] + "\n"); 
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; }

// Function expressions can include names, which is useful for recursion.
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
data.sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));

/* Function names
    * Descriptive but concise
    * Verbs or phrases that begin with verbs 
    * Common convention to begin function names with lowercase letter
    * When name includes multiple words, conventions:
        * Separate words with underscores like_this();
        * Begin all words after the first with uppercase letter likeThis()
    * Fxs that are supposed to be internal or hidden (not part of public API)
    are sometimes given names that begin with underscore 
    * Useful to give frequently used functions very short names
        * Ex: Client-side JavaScript framework jQuery makes heavy use in its
        public API of fx named $()
    * Dollar signs, underscores are the two characters besides letters, numbers
    that are legal in JavaScript identifiers
    */

/* Nested functions 
    * Variable scoping rules: Can access parameters, variables of fx (or functions)
    they are nested within 
    * In code below, inner fx square() can read and write parameters a, b defined by
    outer function hypotenuse() 
    * Function declaration statements are not true statements 
        * ECMAScript specification only allows them as top-level statements
        * Can appear in global code, or within other functions, but cannot appear 
        inside of loops, conditionals, try/catch/finally, with statements
    * Function definition expressions may appear anywhere in JavaScript code 
    */
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}

/* Invoking functions 
    * JavaScript code that makes up body of fx is not executed when fx is 
    defined but when it is invoked 
    * Can be invoked in 4 ways:
        * as functions 
        * as methods 
        * as constructors 
        * indirectly through call(), apply() methods 
    */

/* Function invocation 
    * Invocation expression: Consists of fx expression that evaluates to fx
    obj followed by open parenthesis, comma-separated list of zero or more 
    arg expressions, close parenthesis
    * If fx expression is property-access expression (if fx is prop of obj or 
    element of array), then it is method invocation expression 
    * In invocation, each arg expression is evaluated; resulting values become 
    args to fx 
        * These values are assigned to parameters named in fx definition 
        * In body of fx, a reference to parameter evaluates to corresponding arg
        value 
    * For regular fx invocation, return value of fx becomes value of invocation 
    expression 
        * If fx returns bc interpreter reaches end, return value is undefined 
        * If fx returns bc interpreter executes a return, return value is value
        of expression that follows return or undefined if return statement has 
        no value 
    * For fx invocation in ECMAScript 3 and nonstrict ECMAScript 5, invocation
    context (this value) is global obj. In strict mode, invocation context is 
    undefined
    * Fxs written to be invoked as fxs do not typically use this keyword
        * Used to determine whether strict mode is in effect 
    */
printprops({x:1});                                 
var total = distance(0,0,2,1) + distance(2,1,3,5); 
var probability = factorial(5)/factorial(13);

// Define and invoke a function to determine if we're in strict mode.
var strict = (function() { return !this; }());

/* Method invocation 
    * Method: JavaScript function that is stored in prop of obj */
// Function r, object o
// Define method named m of o 
o.m = f;

// Invoke method m() of obj o 
o.m();
o.m(x, y) /* Invocation expression: includes fx expression o.m and two arg 
            expressions, x and y
                * Fx expression is prop access expression; fx is invoked as 
                method rather than as regular fx */




