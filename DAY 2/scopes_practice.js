{/* Var in loop */}
for (var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i); // output is 3 three times
    }, 1000)
}

// var has function scoped, not block scoped

{/* Let in loop */}
for (let i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i); // output: 0,1,2 
    }, 1000)
}

// let is block scoped

{/* Const in loop */}
for (const i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i); // throws error because const i is immutable
    }, 1000)
}