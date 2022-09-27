function init() {

    var name = 'Mozilla' // local variable created by init()

    function displayName() {
        // displayName is the inner function, a closure
        console.log(name) // use variable declare in the parent  function
    }

    
}

init()