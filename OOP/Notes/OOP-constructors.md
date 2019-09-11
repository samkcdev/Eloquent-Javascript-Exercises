Constructor function

It is written like any other function except the name of the functions first letter is capitalized so that it is clear to other programmerrs that this is a constructor function

example of car construtor is:

<pre>

function Car(make,model,year){
      this.make = make;
      this.model =  model;
      this.year =  year;
}

</pre>

The <b>new Keyword</b> is to create these objects

<pre>
var probe = new Car('Ford','Probe',1993);
var cmax =  new Car('Ford','C-Max', 2014);

probe.make;
cmax.year;
</pre>
