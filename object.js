// 1) JavaScript Object by object literal
var emp = {
    id:28,
    name:"sajib",
    salary:4000
}

console.log("ID is "+ emp.id +" Name is " +emp.name+ " Salary = " +emp.salary);


// 2) By creating instance of Object

var emp = new Object();
emp.id = 29;
emp.name = "Akash Biswas";
emp.salary = 5000;

console.log("ID is "+ emp.id +" Name is " +emp.name+ " Salary = " +emp.salary);

// 3) By using an Object constructor

function Person(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary
}
var p1 = new Person(22,"Mr. Dhar",6000);  
console.log("Id = "+p1.id+ "Name is " +p1.name+ " Salary is "+p1.salary);



