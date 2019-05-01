<p>All Errors in JS are objects that are created by a function called <b>Error</b></p>

## Common JS Errors are

<b>SyntaxError</b>-occurs when we write wrong JS syntax;
<b>ReferenceError</b>-occurs when we try to access a variable that doesnt exist in that scope or access that has not been decalared;
<b>TypeError</b>-occurs when we use builtin js types incorrectly like accessing properties on undefined or invoking something that is not a function.
<b>RangeErrors</b>-Occurs when we use recursive function.

## Catching and Throwing Errors in JS

### try/catch

<p>When we write a code to handle error gracefully we place code inside try block and if it throws error then it moves to catch block. </p>

<pre>

try{
      thisVarnotthere;
}

catch(e){
      console.log("error", e)
}

</pre>

to show proper custom error messages we can use 'throw'
