//fsMethods14June.js

var fs = require('fs');

// fs.appendFile( path , content , function ( err , data ) {} )
// fs.open ( path , "w" , function ( err , data ) {} )
// fs.writeFile ( path , content , function ( err , data ) {} )
// fs.rename( path , nameOfFile , function ( err , data ) {} )
// fs.unlink( path  , function ( err , data ) {} )



fs.unlink('newFile14June.txt', function (err, data) {
    if (err) {
        console.log('Error : ', err)
    } else {
        console.log(" File Deleted Successfull ")
    }
})


/* Rename File 
fs.rename('newFile14June.txt', " RenameNewFile14June", function (err, data) {
    if( err) {
        console.log('Error : ' , err)
    }else{
        console.log( " Rename Successfull ")
    }
}) 
*/


/* Write File 
fs.writeFile('newFile14June.txt', " Hello File Cretaed using Fs Write ", function (err, data) {
    if( err) {
        console.log('Error : ' , err)
    }else{
        console.log( " Write Successfull ")
    }
}) 
*/


/* Open File 
fs.open('newFile14June.txt', "w" , function (err, data) {
    if( err) {
        console.log('Error : ' , err)
    }else{
        console.log( " Opened  Successfull ")
    }
})
*/


/* Append File 
fs.appendFile('newFile14June.txt', " Hello File Cretaed using Fs Append ", function (err, data) {
    if( err) {
        console.log('Error : ' , err)
    }else{
        console.log( " Append Successfull ")
    }
}) 
*/