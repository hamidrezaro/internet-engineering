
// outputting

console.log('hello hamid reza');
//window.alert('hello hamid!');


//variables and arrays
let hamid_full_name = 'hamid reza roodabeh';

const pi = 3.1415;

var some_list = [1,2,'hamid', 3.13];

some_list.forEach(function(element) {
    console.log(element);
});


//writing to html
var _tag = "<h1>Hamid Reza Roodabeh</h1>";

document.write(_tag);


// functions
function name_creator(first_name, last_name) {

    return "my name is: " + first_name + " " + last_name;

}

document.write("<br><br>");

document.write(name_creator('hamid reza', 'roodabeh'));
