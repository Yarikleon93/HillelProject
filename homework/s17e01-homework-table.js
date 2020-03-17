/**
 * Для запуска необходимо зайти в LMS и втавить этот содержимое файла в консоль.
 * Можно сохранить в сниппетах для повторного использования
 * (chrome devtools => sources => snippets)
 */
async function get(uri) {
  const BASE_URL = 'https://lms.ithillel.ua/api/lms/';
  const result = await fetch(BASE_URL + uri);
  const { response } = await result.json();
  return response;
}

function resultCell(hw) {
  return function(user) {
    const result = hw.students_statuses.find(res => res.user.id === user._id);
    const completed = result && result.status === 'complete'
    const hwUrl = `https://lms.ithillel.ua/groups/5d810c8b57b38028559dafa1/homeworks/${hw._id}`;
    const cellClass = completed ? 'green' : 'red'
    return `<td class="${cellClass}"><a href="${hwUrl}"><div></div></a></td>`;
  }
}

function createRow(hw) {
  return `<tr>
    <td>${hw.number}. ${hw.title}</td>
    ${users.map(resultCell(hw)).join('\n')}
  </tr>`;
}

function createTable() {
  let modalContainer = document.querySelector('.undonehw');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.className = 'undonehw';
    document.body.appendChild(modalContainer);
  }


  const createUserHeader = (user) => {
    const avatar = user.avatars[0].sizes.find(({ size }) => size === '100x100');
    return `<th><img src=${avatar.path}>${user.first_name} ${user.last_name}</th>`;
  }
  modalContainer.innerHTML = `
    <div class="dialog" style="justify-content: center; align-items: center;">
    <table>
      <tr>
        <th>name</th>
        ${users.map(createUserHeader).join('\n')}
      </tr>
      <tbody>
        ${hws.map(createRow).join('\n')}
      </tbody>
    </table>
    </div>`;
}

function appendStyle() {
  const css = `
.undonehw {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  overflow: scroll;
}

td.red { background: red;}
td.green { background: green;}
td a div {
  height: 30px;
}
`;
  const head = document.head;
  const style = document.createElement('style');

  head.appendChild(style);

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

}

async function main() {
  hws = await get('homeworks/groups/5d810c8b57b38028559dafa1');
  users = await get('groups/5d810c8b57b38028559dafa1/rating');

  appendStyle();
  createTable();
}


main();