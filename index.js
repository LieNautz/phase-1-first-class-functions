//For the below function, we need to make sure it receives and function and also calls it
//In the below we are invoking the `callback` function.
function receivesAFunction(callback){
    callback();
}

//For this code, we need to return a named function. 

function returnsANamedFunction(){
    return function aFunction(){}
}

//For the below line of code we need to write the syntax to call a anonymous function
//Remember that anonymous functions syntax is usually function() without an identifier.
function returnsAnAnonymousFunction(){
return function(){};
}