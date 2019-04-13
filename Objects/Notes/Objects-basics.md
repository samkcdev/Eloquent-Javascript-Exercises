## Objects Basics

Objects allows us to map key to values.

eg: <pre>

var employee = {
firstName:"Sam",
lastName:"Cherian",
designation:Developer
}

</pre>

We can access objects values either using the dot notation or Bracket Notation

eg:<pre>
employee.firstName;
employee.lastName;
result will be "Sam"
result will be "Cherian"

</pre>

Bracket Notaion is used to access values in an array when we can't use dot notation
eg:<pre>

var obj = {};
var person = "Tom";

obj[person]="This is a person";
obj[1+1+1] = "three";

obj;

</pre>

when accessing
obj.3//this will result in syntax error
but obj[3] will give "three";
also obj.person will also give error.
using obj[person] will give "This is a person"

Use Bracket Notation when:
-Evaluating a expression
-Pass in a varaible to get the name of the key
Use Dot notaion when:
-we know name of the key
-when its not a varaible and expression
<i>Need to research more on this topic</i>

<em>Keys are always string in JS Objects.</em>

## Adding to Objects

Adding properties or fuctions
Here also use either dot(.) or [] operator

<pre>
      employee.knowsAngular = true
</pre>

## Removing from Objects

delete employee.designation;
