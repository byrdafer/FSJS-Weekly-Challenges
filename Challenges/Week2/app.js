//create function
  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results


function processMessage(msg)
{
  if(msg === "Hello")
  {
    alert("Hello World");
  }
  else
  {
    alert("You didn't say hello! :( ");
  }
  console.log(msg);
};

var message;

message = prompt();

processMessage(message);
