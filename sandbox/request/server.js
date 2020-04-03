/**
 * The actual code which is used on the server for this assignment
 */
const http = require('http');

const PORT = 80;
let responseCount = 0;

/**
 * Sets CORS headers to response
 * @param {http.ServerResponse} res
 */
function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
const handleRequest = (req, res) => {
  if (req.url === '/hw/42') {
    setTimeout(() => {
      setCors(res);
      responseCount++;
      res.write(`Your first response! ${responseCount} responses sent so far.`);
      res.end();
    }, Math.random() * 3000);
    return;
  }

  res.statusCode = 404;
  res.end();
};

http.createServer(handleRequest)
  .listen(PORT, () => console.log('listening'));
