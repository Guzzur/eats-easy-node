var fetch = require('node-fetch');

export default (config = {}) => fetch(`${config.api.url}/whoami`, { method: 'GET' });

/*
function getApiInfo() {
  fetch(`${config.api.url}/whoami`, { method: 'GET' });
}
*/
