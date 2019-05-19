# Notes Related to Arrays in JS from

https://www.rithmschool.com/courses/javascript/javascript-arrays-array-methods

Array Methods:

### Add values to the end of the Array

      push("new array value");

### Add values to the start of the Array

      unshift("new array value");
      
NB: Adding function always returns the  length of the array after new item has been added.

### Removing values from the end of an array 
arr.pop();
### Removing values from the start of an array
arr.shift();

NB: Deleting function in arrays always returns the removed value

### splice()

It can be used to both add and delete values from array
splice takes two params
-first is the index
-second is the number of items to removed or added

### slice()

creates a copy array or we can create new sub-array from an array
it takes two params
-first one is the starting index and second last index
the result will be new sub array from starting index and going upto last index(not including the last index)
But if we dont specify the last index it will start and show all the values after that.

### concat

Joins Arrays together

### join

Join method joins the elements within an array with whatever is passed as arguement. The output will be string value. This arguement passed is used usually called _delimiter_.
