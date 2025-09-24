// Example 1
// Write a function applyToArray(arr, callback) that takes an array and a callback function. It should return a new array where each element is transformed using the callback.

function applyToArray(arr, f) {
    // return arr.map(f);
    for (let i = 0; i < arguments[0].length; i++){
        arguments[0][i] = f(arguments[0][i]); 
    }
    return arr;
}

const prices = [1,2,3,4,5];

// console.log(applyToArray(prices, (x) => x * 2));


// Example 2
// Write a function myFilter(arr, callback) that mimics JavaScript’s built-in .filter(). It should return a new array containing only the elements where the callback returns true.

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        (callback(arr[i])) ? result.push(arr[i]): null;
    }
    return result;
}

// console.log(myFilter([1,2,3,4,5,10,90,22,5], (x) => x > 10))

// Example 3

function fakeFetchData(callback){
    console.log("Fetching Data...");

    setTimeout(() => {
        const message = "Data successfully fetched";
        callback(message);
    }, 3000);
}

fakeFetchData((message) => {
    console.log(message.toUpperCase());
});