function Person(first, last) {

  //Here first name, last name are public variables.
  this.firstName = first;
  this.lastName = last;

  // this is a private variable.
  var privateFullName;
  
  // this is a private function cant be called directly.
  var privateGetFullName = ()=>{
     privateFullName = this.firstName + " " + this.lastName;
    return privateFullName;
  }

  //this is a privilaged function.
  this.privilagedGetFullName = function () {
    // privateFullName = this.firstName + " " + this.lastName;
     return privateGetFullName();// should not be called with this.
  };

  // this is a public function.
  Person.prototype.publicGetFullName = function(){
    //  privateFullName = this.firstName + " " + this.lastName;
      // return privateGetFullName(); valid
      return this.privilagedGetFullName();
  }
}

var myFather = new Person("Kanumuri", "Teja");

// privilaged and public functions can be accessable from outside,but where as private functions are not accessable.
console.log(myFather.privateFullName);// undefined
console.log(myFather.privateGetFullName);//undefined
console.log(myFather.privilagedGetFullName());
console.log(myFather.publicGetFullName());

myFather.nationality="India"; // this is specific to only myFather this is like a public member;
console.log(myFather.nationality);

// if we want to add to the constructor then we should add to the prototype.(public fields)
Person.prototype.age = 10;
console.log(myFather.age);

//adding to a prototype a function. this is a public method.
Person.prototype.fullDetails = function(){
  return  `my name is: ${myFather.publicGetFullName()} and my age is ${myFather.age} and belongs to ${myFather.nationality}`;
}
console.log(myFather.fullDetails());