const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

function putRequestResponse(url, resources, authKey, authValue, starKey, starValue) {
  return chai.request(url)
    .put(resources)
    .set(authKey, authValue)
    .set(starKey, starValue)
}

module.exports = putRequestResponse;