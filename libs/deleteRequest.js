const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function deleteRequestResponse(url, resources, authKey, authValue) {
  return chai.request(url)
    .delete(resources)
    .set(authKey, authValue)
}

module.exports = deleteRequestResponse;