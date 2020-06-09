const chai = require('chai');
const expect = chai.expect;

const getRequestResponse = require('../libs/getRequest');

const { URL, RESOURCES, HEADER } = require('../constants/jsonplaceholder_constants');

describe('GET method tests', () => {
  let serverResponse;

  before(async () => {
    serverResponse = await getRequestResponse(URL, RESOURCES.USERS)
  });

  it('Status code of the obtained response is 200 OK', () => {
    expect(serverResponse).to.have.status(200);
  });

  it('The content-type header exists in the obtained response', () => {
    expect(serverResponse).to.have.header(HEADER.KEY);
  });

  it('The value of the content-type header is application/json; charset=utf-8', () => {
    expect(serverResponse).to.have.header(HEADER.KEY, HEADER.VALUE);
  });

  it('The content of the response body is the array of 10 users', () => {
    expect(serverResponse.body.length).to.be.equal(10);
  });
});
