const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function patchRequestResponse(url, resources, authKey, authValue, body) {
  return chai.request(url)
    .patch(resources)
    .set(authKey, authValue)
    .send(body)
}

module.exports = patchRequestResponse;