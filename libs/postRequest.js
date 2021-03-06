const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function postRequestResponse(url, resources, authKey, authValue, body) {
  return chai.request(url)
    .post(resources)
    .set(authKey, authValue)
    .send(body)
}

module.exports = postRequestResponse;