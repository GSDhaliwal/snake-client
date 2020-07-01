const net = require('net');

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

module.exports = connect;