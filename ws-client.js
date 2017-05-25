//identify where the websocket is running and create an object for client
var ws=new WebSocket("ws://localhost:3000");

//when client is connected
ws.onopen=function(){
setTitle("Connected to Chat Room");
};
//when client is Disconnected or socket is closed
ws.onclose=function(){
setTitle("Disconnected");

};
//when a message is recieved from ws server display the message using printMessage function
ws.onmessage=function(payload){


printMessage(payload.data);

}
//when a user enters something on the website it is sent by ws-client to ws server and then
var name;
// server returns the obect which is recieved by ws.onmessage
document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    var name=document.getElementById('name');
    if(name.value!="")
{
    input.value=name.value+": "+input.value;
ws.send(input.value);
}    else
    alert("Enter Your Name to send a message");
    input.value = '';
};

//set the titile to whatever is given in title
function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

//print message on the web browser asynchronously
function printMessage(message) {
    var p = document.createElement('p');
  p.innerText = message;
var name=document.getElementById('name');

if(name.value==message.substring(0,name.value.length))
p.className+="text-white  card card-danger ";
else
p.className+="text-white card card-success ";


    document.querySelector('div.messages').appendChild(p);
}
