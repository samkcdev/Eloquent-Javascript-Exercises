## For each iterators

<p>
The forEach() method executes a callback function once for each array element. 
The callback takes in three arguements-the array currentValue, index(optional) and the array itself(optional);
It always returns 'undefined'.
</p>

<pre>

let arr = [5, 6, 8];

arr.forEach(function(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log(this);
});

</pre>
