var webSocketServer=require("ws").Server;
//wss is an boject of webSocketServer
var wss=new webSocketServer({port:3000});

//listerner for wss
wss.on("connection",function(ws)
{
  //ws is an object sent by the ws-client
ws.on("message",function(message)
{
  //for exit
if(message.substring(message.length-4,message.length)=="exit"){
ws.close();}

else
{
  //for writing on each client sending to ws-client
wss.clients.forEach(function(client){
  client.send(message);

});
}
});


//  ws.send("Welcome to chat room");
});
