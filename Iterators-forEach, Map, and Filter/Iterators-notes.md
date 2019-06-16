## For each iterators-forEach()

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

## Map - map()

<p>
map returns a new array. Syntax for map is the same as forEach and it takes the same parameters-value,index and array.
Since it is a higher order function we can assign it to an variable and get the returned array.
</p>

## Filter-filter()

So points to rememember:

1. forEach processes each value with calback function-return undefined. This processed value have to be saved in some variable.

2. map processes each value with callback function-returns an array, so the returned array can be assigned in an variable.

3. filter processes each value only if it satisfies a condition to become true and returns an array. It is sort of a testing function.

4. reduce-Takes four parameters. It runs a callback once through each value in the array using the following parameters:
   accumulator
   currentValue
   currentIndex
   array

   There are two conditions to decide which one in accumulator and currenValue
   Condition One:
   If an initial value is set then the accumulator is that value and currentValue becomes first value in the array.
   Condition Two:
   If an initial value is not set then the accumulator is the first value in the array and currentValue becomes the second value in the array

   NOTE:Always to get a returned value from a function assing that function to an variable.
