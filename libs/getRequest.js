const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function getRequestResponse(url, resources, authKey = 'Any', authValue = 'Value') {
  return chai.request(url)
    .get(resources)
    .set(authKey, authValue)
}

module.exports = getRequestResponse;