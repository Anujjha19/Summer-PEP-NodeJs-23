// Fetch Syntax 

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Do something with the data, such as logging it to the console
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
    });
