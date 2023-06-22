const jwt = require('jsonwebtoken');

module.exports = async (request, response, next) => {
    try {
        //get the token from authorization header

        // console.log(request.headers)
        const token = await request.headers.authorization.split(" ")[1];


        //check if the token matches the origin

        const decodedToken = jwt.verify(token, "RANDOM-TOKEN")
        const user = decodedToken;
        request.user = user;

        //pass down functionality to the endpoint
        next();


    } catch (error) {
        response.status(401).json({
            error: new Error("Invalid Request")
        })
    }
}