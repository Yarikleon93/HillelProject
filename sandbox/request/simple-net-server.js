const net = require('net');

/**
 * @param {net.Socket} socket
 */
function requestHandler(socket) {
  console.log('connected!');
  socket.on('data', (data) => {
    console.log(data.toString('utf8'));
    socket.write(`HTTP/1.1 200 OK
Server: Homemade

<html>
<body>
  404 Not Found
</body>
</html>

`);
    socket.end();
  })
}

const server = net.createServer(requestHandler);
server.listen(5000);

