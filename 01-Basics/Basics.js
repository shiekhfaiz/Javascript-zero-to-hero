// Type of vairables In Javascript

let Personal_Name = "Sheikh Faizan"; // <=e.g; can be updated not changed 
const Date_Of_Birth = "07-03-2002"; //  <=e.g; cant be changed nor updated

/* We will always use let and var for storing content in the vairables var 
will be never used as it can easy updated and changed which can make our code corrupt*/

// Data Types in Js
// Premitive Data Types
let Name = "Faizan Mushtaq"; // Data Type String
console.log(typeof(Name)) // Output will be a = String
let Age = 23 // Data Type will be number
console.log(typeof(Age)); // Output will Be  = Number
let Issafe = true // Data Type is boolean
console.log(typeof(Issafe)); // Output Will Be = Boolean
let Death_date; // Data Type undefined
console.log(typeof(Death_date)) // Output Will be = Undefined
let Nothing = null // Data Type Oject 
console.log(typeof(Nothing)); // Output will be = Object
// Another Data Type is symbol used for uniqueness

// Non Primitive Data Types
let Personal_Info = { Name : "Faizan" , Age : 23 , BloodGroup :"B+"}; // Data type object
console.log(typeof(Personal_Info)); // Output will be = Object 
let Array1 = [a=22, b= 52, c="Sheikh-Faizan"]; // Data Type Array
console.log(typeof(Array1)); // Output Will be = Object


// Conversions of of data Data Types
let a2 = 33; // Data Type Number
let changeintype = String(a2) // Conversion of Number Data Type into String
console.log(typeof(changeintype));   // output will be string 

// Noticable Points in data Type Convserions are 
let Islogin = 1
let typeislogin = Boolean(Islogin); 
console.log(typeislogin); // output will be = True 
// Same is the case with boolean if we convert the boolean to a number will be converted into 1 also fasle is = 0 , vice versa in terms conversion
// trying to convert a data type another which doesnt make any sense will give output of NaN (Not a Number)

