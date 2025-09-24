function x() {
    var i = 10;
    setTimeout(() => {
        console.log(i)
    }, 2000)
    setTimeout(() => {
        i++;
    },1000)
    console.log("hello world");
}

function test () {
    for (var i = 1; i < 6; i++){
        setTimeout(() => {
            console.log(new_i);
        }, i*1000)
    }
}

test();