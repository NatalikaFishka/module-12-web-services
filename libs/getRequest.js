const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { URL, RESOURCES } = require('../constants/constant');

function getRequestResponse() {
  return chai.request(URL)
    .get(RESOURCES.USERS)
}

module.exports = getRequestResponse;