// function nestedFn() {
//     function fun1() {
//         let a = 1;
//         console.log(a); 
//         function fun2() {
//             let b = 2;
//             console.log(b); 
//             function fun3() {
//                 let c = 3;
//                 console.log(c); 
//             }
//             return fun3;
//         }
//         return fun2;
//     }
//     return fun1;
// }

// let result = nestedFn();
// let fun2 = result(); 
// let fun3 = fun2(); 
// fun3();


// function add(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// const add5 = add(5);
// console.log(add5(3)); 
// console.log(add(5)(3));






// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         } else {
//             return function(...nextArgs) {
//                 return curried.apply(this, args.concat(nextArgs));
//             }
//         }
//     }
// }

// function multiply(a, b, c, d) {
//     return a * b * c * d;
// }

// const curriedMultiply = curry(multiply);
// console.log(curriedMultiply(2)(3)(4)(7)); 
// console.log(curriedMultiply(2, 3)(4)(654)); 
// console.log(curriedMultiply(2, 3, 4, 765)); 


function printFullName() {
    console.log(this.firstName + " " + this.lastName);
}

const employee = {
    firstName: "Deva",
    lastName: "Raju"
};

const student = {
    firstName: "Chandra",
    lastName: "Mohan"
};


printFullName.call(employee); 
printFullName.call(student);  

printFullName.apply(employee); 
printFullName.apply(student); 

const printEmployeeFullName = printFullName.bind(employee);
const printStudentFullName = printFullName.bind(student);

printEmployeeFullName(); 
printStudentFullName();  