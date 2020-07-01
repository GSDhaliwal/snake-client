const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  //'connect' event is triggered as soon as connection with server is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    //sending message to ther server
    conn.write('Name: GSD');
  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //event handler, to handle incoming data from server. prints messge for player
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
}

module.exports = connect;

//To set the name, we simply have to send the server a message in the form: Name: SNK where SNK can be any three alpha-numeric characters. The name is then shown to everyone on the game server.