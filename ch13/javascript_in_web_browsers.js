// Beginning JavaScript by David Flanagan
// Ch 13

/* Web pages displayed in web browsers
    * Documents: pages that present static info 
        * Presentation of that static info may be fairly dynamic, but info
        itself is static 
    * Other web pages feel more like applications than documents 
        * Dynamically load new info as needed
        * Graphical rather than textual
        * Operate offline, save data localy so they can restore state when 
        visited again 
    * Other web pages combine features of both documents and applications 
    */

/* Client-side JavaScript
    * Window obj: Main entry point to all client-side JavaScript features, APIs
        * Represents web browser window or frame
        * Can refer to it with identifier window 
        * Defines props like location, which refers to Location obj that 
        specifies URL currently displayed in window and allows script to load 
        new URL into window
        * Defines methods like alert(), which displays message in dialog box,
        and setTimeout(), which registers function to be invoked after 
        specified amount of time 
        * Global obj; at top of scope chain; props and methods are global 
        variables and global functions 
        * Property named window that refers to itself 
            * Can use if need to refer to window obj itself
            * Not necessary if just want to refer to access props of global 
            window obj 
    * document: Property of Window obj that refers to Document obj that 
    represents content displayed in window. 
    * Document obj has important methods:
        * getElementById(): Returns single document element (representing 
        open/close pair of HTML tags and all content between them) based on 
        value of id attribute 
    * The Element obj returned by getElementById() has other important props 
    and methods that allow scripts to get its content, set value of its 
    attributes, and so on
        * Each element obj has style and className props that allow scripts to 
        specify CSS styles for document element or to alter CSS class names that 
        apply to element 
        * Setting CSS-related props alters presentation of document element 
    * Event handler props: Allow scripts to specify functions that should be 
    invoked asynchronously when certain events occur 
        * Another set of important props on Window, Document, Element objs 
        * Allow JavaScript code to alter behavior of windows, documents, 
        elements that make up those documents 
        * Event handler props have names that begin with word "on"
    * onload handler of Window obj: One of the most important event handlers
        * Triggered when content of document displayed in window is stable, 
        ready to be manipulated 
        * JavaScript code is commonly wrapped within onload event handler 
    * HTML <script> element holds JavaScript code 
    * Nested functions are common bc of extensive use of event handlers
    */
// Set the location property to navigate to a new web page
window.location = "http://www.oreilly.com/";

var timestamp = document.getElementById("timestamp");

// If the element is empty, then insert the current date and time into it
if (timestamp.firstChild == null)
    timestamp.appendChild(document.createTextNode(new Date().toString()));

// Explicitly alter the presentation of the heading element
timestamp.style.backgroundColor = "yellow";

// Or just change the class and let the stylesheet specify the details:
timestamp.className = "highlight";

// Update the content of the timestamp element when the user clicks on it
timestamp.onclick = function() { this.innerHTML = new Date().toString(); }

