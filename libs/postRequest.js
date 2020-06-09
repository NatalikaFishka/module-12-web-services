const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { BODY_TO_POST, RESOURCES, HEADER, URL } = require('../constants/constant');

// function postRequestResponse() {
//   return chai.request(URL)
//     .post('/posts')
//     .set("Content-type", "application/json; charset=UTF-8")
//     .send(JSON.stringify(BODY_TO_POST))
// }

function postRequestResponse() {
  return chai.request(URL)
    .post(RESOURCES.POSTS)
    .set(HEADER.KEY, HEADER.VALUE)
    .send(JSON.stringify(BODY_TO_POST))
}

module.exports = postRequestResponse;