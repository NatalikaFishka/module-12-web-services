const chai = require('chai');
const expect = chai.expect;

const getRequestResponse = require('../libs/getRequest');
const postRequestResponse = require('../libs/postRequest');
const { BODY_TO_POST, HEADER } = require('../constants/constant');

describe('GET method tests', () => {
  let serverResponse;

  before(async () => {
    serverResponse = await getRequestResponse()
  });

  it('Status code of the obtained response is 200 OK', () => {
    expect(serverResponse).to.have.status(200);
  });

  it('The content-type header exists in the obtained response', () => {
    expect(serverResponse).to.have.header(HEADER.KEY);
  });

  it('The value of the content-type header is application/json; charset=utf-8', () => {
    expect(serverResponse).to.have.header(HEADER.KEY.toLowerCase(), HEADER.VALUE.toLowerCase());
  });

  it('The content of the response body is the array of 10 users', () => {
    expect(serverResponse.body.length).to.be.equal(10);
  });
});

describe('POST method tests', () => {
  let serverResponse;

  before(async () => {
    serverResponse = await postRequestResponse();
  })

  it('Post responce contains posted body object', () => {
    expect(serverResponse.body).to.deep.include(BODY_TO_POST);
  });

  it('Post responce contains id 101', () => {
    expect(serverResponse.body.id).to.be.equal(101);
  });

});