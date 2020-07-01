const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //event handler, to handle incoming data from server. prints messge for player
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
}

console.log('Connecting ...');
connect();