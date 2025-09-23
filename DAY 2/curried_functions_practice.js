const buildSandwich = (ingredient1) => {
    return (ingredient2) =>{
        return (ingredient3) =>{
            return `${ingredient1}, ${ingredient2}, ${ingredient3}.`
        }
    }
}

// console.log(buildSandwich("apple")("salad")("mango"))

// refactoring

const buildSammy = ingredient1 => ingredient2 => ingredient3 => `${ingredient1}, ${ingredient2}, ${ingredient3}.`;

// console.log(buildSammy("apple")("salad")("mango"))


{/* Another curry example */}

const multiply = (x,y) => x * y;

const curriedMultiply = x => y => x * y;

console.log(curriedMultiply(2)(3));

// function doesnt complete until it recieves all its parameters, however, it also doesn't throw an error