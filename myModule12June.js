function sayHello() {
    return "Hello, are you fine?";
}

function getData() {
    return Date();
}

// module.exports = sayHello;
/* 
module.exports = {
    sayHello: sayHello,
    getData: getData
}; */
module.exports = { sayHello, getData };



/*  export.sayHello = function() {
    return " HIII "
} ;
*/