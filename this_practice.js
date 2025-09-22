// This in the local context. This here references to the obj object.
const obj = {
    name: "Ammad",
    sayHello: function(){console.log(`${this.name} is saying Hello.`)}
}

obj.sayHello;

// ----------

// This in the global context. This here references the main window of the browser(if the console is running for the browser)
function xyz(){
    let x = 5;
    console.log(this);
}
xyz();

// ----------

// This in the arrow function context. This here references its surrounding context, which in this case again is the main window

const arrowFn = () => {
    console.log(this);
}

arrowFn();