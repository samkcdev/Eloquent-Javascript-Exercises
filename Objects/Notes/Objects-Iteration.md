## Looping Over objects

### Using for in loop

eg:

<pre>
      var instructor = {
            name:"Sam",
            knowsJs:true,
            knowAngular:true,
      }

      for(let info in instructor){
            console.log(info[instructor]);
      }
</pre>

In this loop every key from object is assinged to info variable.
And to access the value we use the bracket notation.

### Using if...in condition

This is used to check if a key exists in an object.

eg:

<pre>
      var sampleObj = {
            name:"sam",
            favBook:"Animal Farm"
      }

      if("favBook" in sampleObj){
            console.log("Fav book exists")
      }

</pre>
