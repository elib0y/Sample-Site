var $ = require("jquery");
var Person = require('./modules/Person');

alert("Hello");
var john = new Person("John Doe", "Blue");

john.greet();

var jane = new Person("Jane Doe", "Green");

jane.greet();


  