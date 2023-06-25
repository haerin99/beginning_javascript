// Beginning JavaScript by David Flanagan
// Ch 7

/* Array: Ordered collection of values 
    * Element: Each value of array
    * Index: Numeric position of element in array
    * JavaScript arrays are untyped: array element may be of any type; different 
    elements of same array may be of different types; elements may be objs or other 
    arrays
    * zero-based, 32-bit indexes: index of first element is 0; highest possible
    * dynamic: grow or shrink as needed; no need to declare fixed size or to 
    reallocate when size changes 
    * sparse: elements need not have contiguous indexes; there may be gaps 
    * length property 
        * for nonsparse arrays, specifies num of elements in arrays 
        * for sparse arrays, larger than index of all elements 
    * Specialized form of JavaScript obj; array indexes are prop names that are ints 
    * Implementations optimize arrays; access to numerically indexed array elements 
    is faster than access to regular obj props 
    * Inherit props from Array.prototype, which defines set of array manip methods 
        * Most of the methods are generic: work correctly for true arrays and any 
        "array-like obj"
    */

// Creating arrays

// Array literal: comma-separated list of array elements within square brackets; most simple*/
var empty = [];                 // An array with no elements
var primes = [2, 3, 5, 7, 11];  // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

var base = 1024;
var table = [base, base+1, base+2, base+3]; // Values in array literal may be expressions

var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]]; // Can contain obj literals or other array literals

var count = [1,,3]; // An array with 3 elements, the middle one undefined.
var undefs = [,,];  // An array with 2 elements, both undefined.
                        // Array literal syntax allows optional trailing comma

// Array() constructor
var a = new Array();   // no args; creates empty array with no elements []
var a = new Array(10);  // single num arg, which specifies length 
var a = new Array(5, 4, 3, 2, 1,    // Constructor args become elements of new array
                  "testing, testing"); 

/* Reading and writing array elements
    * Access element of array using [] operator 
    * Reference to array appears to left of brackets; arbitrary expression that has  
    non-negative int value inside brackets 
    * Arrays are specialized kind of obj; square brackets used to access array 
    elements work like square brackets used to access obj props
        * JavaScript converts numeric array index you specify to string (e.g., index 
        1 becomes str '1'), then uses that str as prop name 
    * When you use prop names that are non-negative ints less than 2^32, array 
    maintains value of length prop 
    * Array index vs obj prop name: all indexes are prop names, but only prop names 
    that are ints between 0 and 2^32-1 are indexes
        * All arrays are objs. Can create props of any name on them
        * If use props that are array indexes, arrays update length prop as needed 
    * Can index array using negative numbers or non-ints. 
        * Num is converted to str, which is used as prop name. Since the name is not 
        non-negative int, treated as regular obj prop, not array index. 
        * If you index array with str that is non-negative int, it behaves as array 
        index, not obj prop. Same is true if use floating-point num that is same as 
        an int.
    * Array indexes are special type of obj prop name; JavaScript arrays have no 
    "out of bounds" error 
        * When query nonexistent prop of any obj, get undefined (not error); also
        true for arrays 
    * Since arrays are objs...
        * Can inherit elements from their prototype 
        * Can have array elements defined by getter, setter methods. 
    * If array does inherit elements or use getters, setters for elements, 
    expect it to use nonoptimized code path: time to access element of such an 
    array would be similar to regular obj prop lookup times 
    */
var a = ["world"];     // Start with a one-element array
var value = a[0];      // Read element 0
a[1] = 3.14;           // Write element 1
i = 2;         
a[i] = 3;              // Write element 2
a[i + 1] = "hello";    // Write element 3
a[a[i]] = a[0];        // Read elements 0 and 2, write element 3

o = {};        // Create a plain obj 
o[1] = "one";  // Index it with a plain int 

a.length // => 4

a[-1.23] = true;  // This creates a property named "-1.23"
a["1000"] = 0;    // This the 1001st element of the array
a[1.000]          // Array index 1.  Same as a[1]

a = [true, false];     // This array has elements at indexes 0 and 1
a[2]                   // => undefined. No element at this index.
a[-1]                  // => undefined. No property with this name.

/* Sparse array: Elements do not have contiguous indexes starting at 0
    * Normally, length prop of array specifies num of elements in array 
    * If array is sparse, value of length prop > num of elements 
    * Can be created with Array() constructor, assigning to array index larger 
    than current array length, or with delete operator
    * Arrays that are sufficiently sparse are typically implemented in slower, 
    more memory-efficient way than dense arrays are
        * Looking up elements takes about as much time as regular obj prop lookup
    * Omitting value in array literal also creates sparse array
    * In practice, most JavaScript arrays will not be sparse; if working with
    sparse array, code will probably treat it like a nonsparse array with 
    nondefined elements
    */
a = new Array(5);   // No elements, but a.length is 5.
a = [];             // Create an array with no elements and length = 0.
a[1000] = 0;        // Assignment adds one element but sets length to 1001.

var a1 = [,,,];         // This array is the same as a2
var a2 = new Array(3);  // This array has no values at all
0 in a1                 // => false: a1 has no element with index 0
0 in a2                 // => false: a2 has no element with index 0

/* Array length
    * Every array has length property, which makes ararys different from regular 
    JavaScript objs 
    * For dense arrays (i.e., not sparse), length prop specifies num of elements
    in array; value is 1 + highest index in array
    * Arrays will never have element whose index >= length 
    * Two special behaviors to maintain length invariant
        1. If assign value to array element whose index i >= array's current 
        length, value of length prop = i+1
        2. If set length prop to non-negative integer n < current value, any 
        array elements whose index >= n are deleted from array
    * Can set length prop of array to value larger than current value; creates 
    sparse area at end of array 
    * Can make length prop of array read-only with Object.defineProperty()
    * If make array element nonconfigurable, cannot be deleted; length prop 
    cannot be set to < index of nonconfigurable element
    */
[].length             // => 0: the array has no elements
['a','b','c'].length  // => 3: highest index is 2, length is 3

a = [1,2,3,4,5];     // Start with a 5-element array.
a.length = 3;        // a is now [1,2,3].
a.length = 0;        // Delete all elements.  a is [].
a.length = 5;        // Length is 5, but no elements, like new Array(5)

a = [1,2,3];                               // Start with a 3-element array.
Object.defineProperty(a, "length",         // Make the length property
                      {writable: false});  // readonly.
a.length = 0;                              // a is unchanged.

/* Adding and deleting array elements 
    * Add elements to array:
        * Assign values to new indexes
        * push() method: Adds one or more values to end of array
            * Pushing value onto array a is same as assigning value to a[a.length]
        * unshift() method: Insert value at beginning of array, shifting existing 
        array elements to higher indexes 
    * Delete array elements:
        * delete operator (like deleting obj properties)
            * Deleting array element is similar to assigning undefined to that 
            element 
            * Does not alter length prop, does not shift elements with higher 
            indexes down to fill in gap left by delete prop 
            * If delete element from array, array becomes sparse 
        * Set length prop to new desired length 
        * pop() method: Reduces length of array by 1; returns value of deleted 
        element 
        * shift() method: Remove element from beginning of array
            * Shifts all elements down to index one lower than current index 
        * splice() method: Inserting, deleting, replacing array elements
            * Affects length prop; shifts array elements to higher or lower 
            indexes as needed
    */
a = []           // Start with an empty array.
a[0] = "zero";   // And add elements to it.
a[1] = "one";

a = [];              // Start with an empty array
a.push("zero")       // Add a value at the end.  a = ["zero"]
a.push("one", "two") // Add two more values.  a = ["zero", "one", "two"]

a = [1,2,3];   
delete a[1];   // a now has no element at index 1
1 in a         // => false: no array index 1 is defined 
a.length       // => 3: delete does not affect array length

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

// Iterating arrays 
// for loop
var keys = Object.keys(o);   // Get an array of property names for object o
var values = []              // Store matching property values in this array
for(var i = 0; i < keys.length; i++) {  // For each index in the array
    var key = keys[i];                  // Get the key at that index
    values[i] = o[key];                 // Store the value in the values array
}
/* Nested loop -- may see for loop optimized so that array length is only looked
up once rather than on each iteration  */
for(var i = 0, len = keys.length; i < len; i++) {
   // loop body remains the same
}
/* Assumed array is dense and that all elements contain valid data. if not, 
test array elements before using them */
for(var i = 0; i < a.length; i++) {
    if (!a[i]) continue;  // Skip null, undefined, and nonexistent elements; falsy values
    // loop body here
}

for(var i = 0; i < a.length; i++) {
    if (a[i] === undefined) continue; // Skip undefined + nonexistent elements; nonexistent (empty) elements evaluate to undefined
    // loop body here
}

for(var i = 0; i < a.length; i++) {
    if (!(i in a)) continue ; // Skip nonexistent elements
    // loop body here
}

// for/in loop with sparse arrays
// Assign enumerable prop names (incl array indexes) to loop variable one at a time 
    // Indexes that do not exist will not be iterated; they are skipped
for(var index in sparseArray) {
    var value = sparseArray[index];
    // Now do something with index and value
}

/* for/in loop can return names of inherited props, such as names of methods 
that have been added to Array.prototype 
    * Do not use for/in loop on array unless include test to filter out 
    unwanted props */
// Test
for(var i in a) {
    if (!a.hasOwnProperty(i)) continue;  // Skip inherited properties
    // loop body here
}
// Another test
for(var i in a) {
    // Skip i if it is not a non-negative integer
    if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
}

/* for/in loop can iterate props of obj in any order 
    * Implementations typically iterate array elements in ascending order 
    * If array has both obj props and array elements, prop names may be 
    returned in order they were created, rather than in numeric order 
    * If iteration order matters for your algorithm, use regular for loop 
* forEach() method: Iterating array elements by passing each one, in index 
order, to function that you define */
var data = [1,2,3,4,5];     // This is the array we want to iterate
var sumOfSquares = 0;       // We want to compute the sum of the squares of data
data.forEach(function(x) {  // Pass each element of data to this function
                 sumOfSquares += x*x;  // add up the squares
             });
sumOfSquares                // =>55 : 1+4+9+16+25

/* Multidimensional arrays 
    * JavaScript doesn't support true multidim arrays; can approximate with 
    arrays of arrays 
    * To access value in array of arrays, use [] operator twice (e.g., 
    matrix[x][y]) */

// 2D array as multiplication table 
// Create a multidimensional array
var table = new Array(10);               // 10 rows of the table
for(var i = 0; i < table.length; i++)
    table[i] = new Array(10);            // Each row has 10 columns

// Initialize the array
for(var row = 0; row < table.length; row++) {
    for(col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

// Use the multidimensional array to compute 5*7
var product = table[5][7];  // 35

/* Array methods 
    * Below are useful array manipulation functions on Array.prototype; 
    they are available as methods of any array 
    */
/* join() method: Converts all elements of array to strings and concatenates 
them, returning resulting string
    * Can specify optional string that separates elements in resulting string
    * If no separator str is specified, comma is used */
var a = [1, 2, 3];     // Create a new array with these three elements
a.join();              // => "1,2,3"
a.join(" ");           // => "1 2 3"
a.join("");            // => "123"
var b = new Array(10); // An array of length 10 with no elements
b.join('-')            // => '---------': a string of 9 hyphens

/* reverse() method: Reverses order of elements of array; returns reversed 
array 
    * Rearranges elements in existing array; doesn't create new array */
var a = [1,2,3];
a.reverse().join()  // => "3,2,1"; a is now [3,2,1]

/* sort() method: Sorts elements of array in place; returns sorted array 
    * When called with no args, sorts array elements in alphabetical order 
    (temporarily converting them to strings to perform comparison)
    */
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", ");  // s == "apple, banana, cherry"

/* If array contains undefined elements, they are sorted to end of array
* To sort array into order other than alphabetical, must pass comparison 
function as arg to sort()
* Comparison function decides which of its two args should appear first in 
sorted array
    * If first arg should appear before second, fx should return num < 0 
    * If first arg should appear after second, fx should return num > 0
    * If values are equivalent, comparison fx should return 0 
    */

// Sort array elements into numerical order 
var a = [33, 4, 1111, 222];
a.sort();                 // Alphabetical order:  1111, 222, 33, 4
a.sort(function(a,b) {    // Numerical order: 4, 33, 222, 1111
           return a-b;    // Returns &lt; 0, 0, or &gt; 0, depending on order
       });
a.sort(function(a,b) {return b-a});   // Reverse numerical order

// Case-insensitive alphabetical sort on array of strings
// Pass comparison function that converts both of args to lowercase 
a = ['ant', 'Bug', 'cat', 'Dog']
a.sort();                // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function(s,t) {   // Case-insensitive sort
           var a = s.toLowerCase();
           var b = t.toLowerCase();
           if (a < b) return -1;
           if (a > b) return 1;
           return 0;
       });               // => ['ant','Bug','cat','Dog']

/* concat() method: Creates and returns new array that contains elements of 
original array on which concat() was invoked, followed by each of args to 
concat()
    * If any of these args is array, then array elements are concatenated
    (not array itself)
    * Does not recursively flatten arrays of arrays
    * Does not modify array on which it is invoked 
    */
var a = [1,2,3];
a.concat(4, 5)          // Returns [1,2,3,4,5]
a.concat([4,5]);        // Returns [1,2,3,4,5]
a.concat([4,5],[6,7])   // Returns [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]])  // Returns [1,2,3,4,5,[6,7]]

/* slice() method: Returns a slice, or subarray, of specified array 
    * Two args specify start and end of slice to be returned 
    * Returned array contains element specified by first arg and all subsequent 
    elements up to, but not including, element specified by second arg 
    * If only one arg is specified, returned array contains all elements from 
    start position to end of array 
    * If either arg is negative, it specifies array element relative to last 
    element in array (e.g., arg of -1 specifies last element in array, arg of 
    -3 specifies third from last element of array)
    * Does not modify array on which it is invoked 
    */
var a = [1,2,3,4,5];
a.slice(0,3);    // Returns [1,2,3]
a.slice(3);      // Returns [4,5]
a.slice(1,-1);   // Returns [2,3,4]
a.slice(-3,-2);  // Returns [3]

/* splice() method: General-purpose, for inserting or removing elements from 
array 
    * Modifies array on which it is invoked 
    * Can delete elements from array, insert new elements into array, or perform 
    both operations at same time 
    * Elements of array that come after insertion of deletion point have indexes 
    increased or decreased as necessary so that they remain contiguous with 
    rest of array 
    * First two args specify which array elements are to be deleted
        * First arg specifies array position at which insertion and/or deletion 
        is to begin 
        * Second arg specifies number of elements that should be deleted from 
        (spliced out of) array. If second arg omitted, all array elements from 
        start element to end of array are removed. 
    * Returns array of deleted elements, or empty array if no elements were 
    deleted.
    * First two args may be followed by any num of additional args that specify
    elements to be inserted into array, starting at position specified by first 
    arg
    * Unlike concat(), splice() inserts arrays themselves, not elements of 
    those arrays 
    */
var a = [1,2,3,4,5,6,7,8];
a.splice(4);    // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1,2);  // Returns [2,3]; a is [1,4]
a.splice(1,1);  // Returns [4]; a is [1]

var a = [1,2,3,4,5];
a.splice(2,0,'a','b');  // Returns []; a is [1,2,'a','b',3,4,5]
a.splice(2,2,[1,2],3);  // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]

/* push() and pop() methods allow you to work with arrays as if they were stacks 
    * push() method: Appends one or more new elements to end of array. Returns 
    new length of array.
    * pop() method: Deletes last element of array, decrements array length.
    Returns value that it removed.
    * Both methods modify array in place rather than produce modified copy of
    array. 
    * Combination of push() and pop() allows you to use JavaScript array to 
    implement first-in, last-out stack 
    */
var stack = [];       // stack: []
stack.push(1,2);      // stack: [1,2]      Returns 2
stack.pop();          // stack: [1]        Returns 2
stack.push(3);        // stack: [1,3]      Returns 2
stack.pop();          // stack: [1]        Returns 3
stack.push([4,5]);    // stack: [1,[4,5]]  Returns 2
stack.pop()           // stack: [1]        Returns [4,5]
stack.pop();          // stack: []         Returns 1

/* unshift() and shift(): Insert and remove elements from beginning of array, 
rather than from the end
    * unshift(): Adds element or elements to beginning of array, shifts existing
    array elements up to higher indexes to make room, returns new length of 
    array 
        * When invoked with multiple args, args are inserted all at once (as with 
        splice() method) instead of one at a time; appear in resulting array in
        same order in which they appeared in arg list. Order would have been 
        reversed had the elements been inserted one at a time.
    * shift(): Removes and returns first element of array, shifting all 
    subsequent elements down one place to occupy newly vacant space at start of
    array
    */
var a = [];            // a:[]
a.unshift(1);          // a:[1]         Returns: 1
a.unshift(22);         // a:[22,1]      Returns: 2
a.shift();             // a:[1]         Returns: 22
a.unshift(3,[4,5]);    // a:[3,[4,5],1] Returns: 3
a.shift();             // a:[[4,5],1]   Returns: 3
a.shift();             // a:[1]         Returns: [4,5]
a.shift();             // a:[]          Returns: 1

/* toString() and toLocaleString()
    * toString() method: For array, converts each of its elements to string 
    (calling toString() methods of its elements, if necessary), outputs comma-
    separated list of those strings. 
        * join() method returns same string when invoked with no args 
    * toLocaleString(): Localized version of toString(). Converts each array 
    element to str by calling toLocaleString() method of element, then 
    concatenates resulting strings using locale-specific (and implementation-
    defined) separator string.
    */
[1,2,3].toString()          // Yields '1,2,3'
["a", "b", "c"].toString()  // Yields 'a,b,c'
[1, [2,'c']].toString()     // Yields '1,2,c'

/* ECMAScript 5 Array methods 
    * Iterating, mapping, filtering, testing, reducing, searching arrays
    * Most of the methods accept fx as first arg and invoke that fx once for
    each element (or some elements) of array
        * If array is sparse, fx you pass is not invoked for nonexistent 
        elements 
    * In most cases, fx you supply is invoked with 3 args: value of array 
    element, index of array element, array itself 
        * Often only need first of these arg values; can ignore second and third
    * Most of the ECMAScript 5 methods that accept fx as first arg accept 
    optional second arg 
        * If specified, fx is invoked as if it is method of this second arg; 
        second arg you pass becomes value of this keyword inside of fx you pass 
    */

/* forEach() method: Iterates through array, invoking fx you specify for each
element 
    * Pass fx as first arg
    * Invokes fx with three args: value of array element, index of array element,
    array itself
    * If only care about value of array element, can write fx with only one
    parameter; additional args will be ignored 
    * Does not provide way to terminate iteration before all elements have been
    passed to fx; no equivalent of break statement you can used with regular for
    loop 
    * If need to terminate early, must throw exception, and place call to forEach()
    within try block
    */
var data = [1,2,3,4,5];                           // An array to sum
// Compute the sum of the array elements
var sum = 0;                                      // Start at 0
data.forEach(function(value) { sum += value; });  // Add each value to sum
sum                                               // => 15

// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; });
data;                                              // => [2,3,4,5,6]

// Calls forEach() method within try block
// If function passed to foreach() throws foreach.break, loop terminates early
function foreach(a,f,t) {     // a: array; f: function; t: value of this keyword inside of fx (opt)
    try { a.forEach(f,t); }
    catch(e) {
	if (e === foreach.break) return; 
	else throw e;
    }
}
foreach.break = new Error("StopIteration");

/* map() method: Passes each element of array on which it is invoked to function 
you want to specify. Returns array containing values returned by that fx.
    * Fx passed to map() is invoked in same way as fx passed to forEach()
    * For map() method, however, fx you pass should return a value
    * Returns new array: does not modify array it is invoked on
        * If array is sparse, returned array will be sparse in same way: same 
        length, same missing elements 
    */
a = [1, 2, 3];
b = a.map(function(x) { return x*x; });  // b is [1, 4, 9]

/* filter() method: Returns array containing subset of elements of array on which 
it is invoked 
    * Function passed to it should be predicate: fx that returns true or false 
    * Predicate is invoked just as for forEach(), map()
        * If return value is true, or value that converts to true, then element
        passed to predicate is member of subset and is added to array that will 
        become the return value 
    * Skips missing elements in sparse arrays. Return value is always dense.
    */
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 });   // [2, 1]
everyother = a.filter(function(x,i) { return i%2==0 }); // [5, 3, 1]

// Close gaps in sparse array 
var dense = sparse.filter(function() { return true; });

// Close gaps and remove undefined, null elements
a = a.filter(function(x) { return x !== undefined && x != null; });

/* every() and some()
    * Array predicates: Apply predicate function you specify to elements of array,
    then return true or false 
    * every() method: Returns true iff predicate function returns true for all
    elements in array 
        * Like mathematical "for all" quantifier
    * some() method: Returns true if there exists at least one element in array 
    for which predicate returns true. Returns false iff predicate returns false 
    for all elements of array.
        * Like mathematical "there exists" quantifier 
    * Stop iterating array elements as soon as they know what value to return
        * some() returns true the first time your predicate returns true.
        Only iterates through entire array if predicate always returns false.
        * every() returns false the first time your predicate returns false.
        Only iterates all elements if predicate always returns true.
    * By mathematical convention, every() returns true and some returns false 
    when invoked on empty array 
    */
a = [1,2,3,4,5];
a.every(function(x) { return x < 10; })      // => true: all values < 10.
a.every(function(x) { return x % 2 === 0; }) // => false: not all values even.

a = [1,2,3,4,5];
a.some(function(x) { return x%2===0; })  // => true: a has some even numbers.
a.some(isNaN)                            // => false: a has no non-numbers.

/* reduce(), reduceRight() methods combine elements of array, using fx you 
specify, to produce single value
    * Common operation in functional programming ("inject", "fold")
* reduce() method
    * First arg: fx that performs reduction operation; combine or reduce 
    two values into single value, returns reduced value. 
    * Second (optional) arg: Initial value to pass to fx 
    * Fxs used with reduce() are different than fxs used with forEach(), map()
        * Value, index, array values are passed as second, third, fourth args 
        * First arg is accumulated result of reduction so far.
            * On first call to fx, first arg is initial value that was passed 
            as second arg to reduce() 
            * On subsequent calls, it is value returned by previous invocation 
            of function
        * When invoking reduce() with no initial value, it uses first element 
        of array as initial value 
            * First call to reduction fx will have first and second array
            elements as first and second args 
    * Calling reduce() on empty array with no initial value arg causes 
    TypeError
    * Calling reduce() with one value (either array with one element and no 
    initial value, or empty array and initial value) returns that one value 
    without calling reduction fx 
* reduceRight(): Works like reduce(), except processes array from highest index
to lowest (right-to-left), rather than from lowest to highest 
    * Might want to do this if reduction operation has right-to-left precedence
* Neither reduce() nor reduceRight() accepts optional arg that specifies the 
this value on which reduction fx is to be invoked (see Function.bind())
    * Optional initial value arg takes its place 
* every(), some() methods perform array reduction operation but differ from 
reduce() in that they terminate early when possible and do not visit every 
array element
* reduce(), reduceRight() are not intended solely for mathematical computations
    * union(): Computes "union" of two objs and returns new obj that has props 
    of both. Expects two objs and returns another obj, so works as reduction 
    fx. Can use reduce() to generalize it and compute union of any num of objs.
    */
var a = [1,2,3,4,5]
var sum = a.reduce(function(x,y) { return x+y }, 0);     // Sum of values
var product = a.reduce(function(x,y) { return x*y }, 1); // Product of values
var max = a.reduce(function(x,y) { return (x>y)?x:y; }); // Largest value

// extend() and union() from ch 6
function extend(o, p) {
    for(prop in p) {                         // For all props in p.
        o[prop] = p[prop];                   // Add the property to o.
    }
    return o;
}
function union(o,p) { return extend(extend({},o), p); }

// Generalize union() using reduce()
var objects = [{x:1}, {y:2}, {z:3}];
var merged = objects.reduce(union);    // => {x:1, y:2, z:3}

// reduce(), reduceRight() may give diff results when used with union()
// When two objs have props with same name, union() fx uses value of that prop
// from first arg
var objects = [{x:1,a:1}, {y:2,a:2}, {z:3,a:3}];
var leftunion = objects.reduce(union);       // {x:1, y:2, z:3, a:1}
var rightunion = objects.reduceRight(union); // {x:1, y:2, z:3, a:3}

/* indexOf() and lastIndexOf()
    * Search array for element with specified value. Return index of first such
    element found, or -1 if none is found.
    * indexOf(): Searches array from beginning to end
    * lastIndexOf(): Searches from end to beginning
    * Do not take fx arg. First arg is value to search for. Second arg is 
    optional: specifies array index at which to begin search. If this arg is
    omitted, indexOf() starts at beginning and lastIndexOf() starts at end.
        * Negative values are allowed by second argument; treated as offset
        from end of array, as they are for splice() method (e.g., -1 specifies
        last element of array)
    * Strings have indexOf(), lastIndexOf() methods that work like these array
    methods
    */
a = [0,1,2,1,0];
a.indexOf(1)       // => 1: a[1] is 1
a.lastIndexOf(1)   // => 3: a[3] is 1
a.indexOf(3)       // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
// Second argument to indexOf() can be used to find matches beyond first
function findall(a, x) {
    var results = [],            // The array of indexes we'll return
        len = a.length,          // The length of the array to be searched
        pos = 0;                 // The position to search from
    while(pos < len) {           // While more elements to search...
        pos = a.indexOf(x, pos); // Search
        if (pos === -1) break;   // If nothing found, we're done.
        results.push(pos);       // Otherwise, store index in array
        pos = pos + 1;           // And start next search at next element
    }
    return results;              // Return array of indexes
}

/* Array type 
    * Arrays are objs with special behavior. Given unknown obj, useful to 
    determine whether it is array or not:
    * Array.isArray() function
    * typeof() operator does not help: returns "obj" for arrays (and for all 
    objs other than fxs)
    * instanceof operator works in simple cases. 
        * Problem is that in web browsers, there can be more than one window or 
        frame open. Each has its own JavaScript environment, with its own global 
        object. Each global object has its own set of constructor functions. So, 
        obj from one frame will never be instance of constructor from another 
        frame. 
        * Interframe confusion does not arise often, but it is enough of a
        problem that instanceof operator is not a reliable test for arrays 
        * Solution: inspect class attribute of obj. For arrays, this attribute 
        will always have value "Array"
    
    */
Array.isArray([])     // => true
Array.isArray({})     // => false

[] instanceof Array     // => true
({}) instanceof Array   // => false

// Test class attribute 
// Same thing as what Array.isArray() function does 
var isArray = Function.isArray || function(o) {
    return typeof o === "object" &&
        // Obtain class attribute using Object.prototype.toString()
        Object.prototype.toString.call(o) === "[object Array]";
};
    
/* Array-like objs 
    * JavaScript arrays have special features that other objs do not have:
        * length prop is automatically updated as new elements added to list 
        * Setting length to smaller value truncates array
        * Arrays inherit useful methods from Array.prototype
        * Arrays have class attribute of "Array"
    * Often reasonable to treat obj with numeric length prop and corresponding
    non-negative int props as kind of array ("array-like" objs)
        * Cannot invoke array methods on them or expect special behavior from 
        length prop
        * Can iterate through them with same code as for true array; many array
        algorithms work just as well with array-like objs as they do with real
        arrays, esp if algorithms treat array as read-only or if they leave 
        array length unchanged
    * Arguments object is array-like obj
        * In client-side JavaScript, a number of DOM methods, such as 
        document.getElementsByTagName(), return array-like objs.
    * ECMAScript 5 strings behave like arrays, but tests like isArrayLike() 
    for array-like objs typically return false for strings; they are usually 
    best handled as strings, not arrays
    * In ECMAScript 5, all array methods are generic 
        * Exception: concat() method; can be invoked on array-like obj but does 
        not property expand that obj into returned array)
    * Since array-like objs do not inherit from Array.prototype, cannot
    invoke array methods on them directly. Can invoke them indirectly using 
    Function.call method 
    */
var a = {};  // Start with a regular empty object

// Add properties to make it "array-like"
var i = 0;
while(i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;

// Now iterate through it as if it were a real array
var total = 0;
for(var j = 0; j < a.length; j++)
    total += a[j];

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are 
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded 
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
    if (o &&                                // o is not null, undefined, etc.
        typeof o === "object" &&            // o is an object
        isFinite(o.length) &&               // o.length is a finite number
        o.length >= 0 &&                    // o.length is non-negative
        o.length===Math.floor(o.length) &&  // o.length is an integer
        o.length < 4294967296)              // o.length < 2^32
        return true;                        // Then o is array-like
    else
        return false;                       // Otherwise it is not
}

// Invoke array methods indirectly on array-like objs using Function.call
var a = {"0":"a", "1":"b", "2":"c", length:3};  // An array-like object
Array.prototype.join.call(a, "+")  // => "a+b+c"
Array.prototype.slice.call(a, 0)   // => ["a","b","c"]: true array copy
Array.prototype.map.call(a, function(x) { 
    return x.toUpperCase();
})                                 // => ["A","B","C"]:

// Firefox introduced versions of these methods as fxs defined directly on Array constructor 
// These static function versions of array methods are nonstandard; may not be defined in all browsers
var a = {"0":"a", "1":"b", "2":"c", length:3};  // An array-like object
Array.join(a, "+")
Array.slice(a, 0)
Array.map(a, function(x) { return x.toUpperCase(); })

// Ensure that functions you need exist before you use them
// Create them if they do not already exist
Array.join = Array.join || function(a,sep) {
    return Array.prototype.join.call(a,sep);
};
Array.slice = Array.slice || function(a,from,to) {
    return Array.prototype.slice.call(a,from,to);
};
Array.map = Array.map || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
}

/* Strings as arrays 
    * In ECMAScript 5, strings behave like read-only arrays. Instead of accessing 
    individual characters with charAt() method, can use square brackets (more 
    concise, readable, efficient)
         * Can apply generic array methods to strings 
    * typeof operator still returns "string" for strings; Array.isArray() returns
    false if pass it as string 
    * Strings are immutable values, so when treated as arrays, they are read-only
    arrays 
    * Array methods like push(), sort(), reverse(), splice() modify array in 
    place and do not work on strings 
    * Attempting to modify str using array method does not cause error, fails 
    silently
    */
var s = test;
s.charAt(0)    // => "t"
s[1]           // => "e"

s = "JavaScript"
Array.prototype.join.call(s, " ")      // => "J a v a S c r i p t"
Array.prototype.filter.call(s,         // Filter the characters of the string
    function(x) {                      
        return x.match(/[^aeiou]/);    // Only match nonvowels
    }).join("")                        // => "JvScrpt"

