const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  //'connect' event is triggered as soon as connection with server is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    //sending message to ther server
    conn.write('Name: GSD');
    //conn.write('Move: up');
  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //event handler, to handle incoming data from server. prints message for player
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
}

module.exports = { 
  connect
};

