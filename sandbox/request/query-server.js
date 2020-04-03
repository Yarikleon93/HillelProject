// Подключаем модули. Все модули ниже идут в комплекте с nodeJS
const http = require('http');
const url = require('url');
const queryString = require('querystring');

function createTable(query) {
  const gridWidth = Number(query.gridWidth);
  const gridHeight = Number(query.gridHeight);

  let result = '';
  result = result + '<html><table border="1">';

  for (let i = 1; i <= gridHeight; i++) {
    result = result + '<tr>';
    for (let j = 1; j <= gridWidth; j++) {
      result = result + `<td>${i * j}</td>`;
    }
    result = result + '</tr>';
  }

  result = result + '</table></html>';
  return result;
}
/**
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
function requestHandler(request, response) {

  console.log('Requested: ', request.url);

  if (request.method === 'GET') {
    const { query } = url.parse(request.url, true);
    response.writeHead(200);
    response.write(createTable(query));
    response.end();
  }

  if (request.method === 'POST') {
    let body = '';
    /** Обработчик события 'data'
     * вызывается каждый раз, когда приходит новый фрагмент тела запроса (body)
     * В нашем случае body очень маленький и придет скорее всего одним куском, но
     * надо быть готовым ко всему.
     * Подклеиваем новые данные к уже полученным.
     */
    request.on('data', chunk => {
      body = body + chunk.toString('utf8');
    });


    /**
     * Когда весь запрос получен, можно распарсить (от слова parse) body,
     * отрисовать таблицу и отправить ответ.
     */
    request.on('end', () => {
      const query = queryString.parse(body);
      response.write(createTable(query));
      response.end();
    });
  }
}

const server = http.createServer(requestHandler);
const PORT = 5001;

server.on('listening', () => console.log(`Listening on port: ${PORT}`));

server.listen(PORT);
