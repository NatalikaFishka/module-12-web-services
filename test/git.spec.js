const chai = require('chai');
const expect = chai.expect;

const getRequestResponse = require('../libs/getRequest');
const postRequestResponse = require('../libs/postRequest');
const putRequestResponse = require('../libs/putRequest');
const patchRequestResponse = require('../libs/patchRequest');
const deleteRequestResponse = require('../libs/deleteRequest');
const { GIT_INPUTS } = require('../constants/git_constants');

const url = GIT_INPUTS.URL;
const authKey = GIT_INPUTS.AUTH_HEADER.KEY;
const authValue = GIT_INPUTS.AUTH_HEADER.VALUE;
const addGistBody = GIT_INPUTS.ADD_GIST_BODY;
const editGistBody = GIT_INPUTS.EDIT_GIST_BODY;
const starHeaderKey = GIT_INPUTS.TICK_STAR_HEADER.KEY;
const starHeaderValue = GIT_INPUTS.TICK_STAR_HEADER.VALUE;

const userGistResource = GIT_INPUTS.RESOURSES_PARTS.USERS + GIT_INPUTS.RESOURSES_PARTS.USER_NAME + GIT_INPUTS.RESOURSES_PARTS.GISTS;
const addGistResource = GIT_INPUTS.RESOURSES_PARTS.GISTS;

describe('Get and add gist', () => {

  it('GET NatalikaFishka gists with status 200 OK', async () => {
    const serverResponse = await getRequestResponse(url, userGistResource, authKey, authValue)
    expect(serverResponse).to.have.status(200);
  });

  it('One more gist appears after POST gist request', async () => {
    const beforePostGistCount = (await getRequestResponse(url, userGistResource, authKey, authValue)).body.length;
    await postRequestResponse(url, addGistResource, authKey, authValue, addGistBody);
    const afterPostGistCount = (await getRequestResponse(url, userGistResource, authKey, authValue)).body.length;
    expect(afterPostGistCount).to.be.equal(beforePostGistCount + 1);
  });

});

describe('Star/unstar gist', () => {
  let isStarred = false;
  let starResources;
  let id;

  before(async () => {
    id = (await getRequestResponse(url, userGistResource, authKey, authValue)).body[0].id;
    starResources = GIT_INPUTS.RESOURSES_PARTS.GISTS + '/' + id + GIT_INPUTS.RESOURSES_PARTS.STAR;
  })

  it('Star the first gist with PUT method', async () => {
    await putRequestResponse(url, starResources, authKey, authValue, starHeaderKey, starHeaderValue);
    if ((await getRequestResponse(url, starResources, authKey, authValue)).status === 204) {
      isStarred = true;
    };
    expect(isStarred).to.be.true;
  });

  it('Unstart previously started with DELETE method ', async () => {
    await deleteRequestResponse(url, starResources, authKey, authValue);
    if ((await getRequestResponse(url, starResources, authKey, authValue)).status === 404) {
      isStarred = false;
    };
    expect(isStarred).to.be.false;
  });

});

describe('Edit/Delete gist', () => {
  let editResources;
  let id;

  before(async () => {
    id = (await getRequestResponse(url, userGistResource, authKey, authValue)).body[0].id;
    editResources = GIT_INPUTS.RESOURSES_PARTS.GISTS + '/' + id;
  })

  it('Edit gist description with PATCH methos', async () => {
    await patchRequestResponse(url, editResources, authKey, authValue, editGistBody);
    let newDescription = (await getRequestResponse(url, editResources, authKey, authValue)).body.description;
    expect(newDescription).to.be.equal(editGistBody.description)
  });

  it('Delete dist with DELETE methos', async () => {
    const beforeDeleteGistCount = (await getRequestResponse(url, userGistResource, authKey, authValue)).body.length;
    await deleteRequestResponse(url, editResources, authKey, authValue);
    const afterDeleteGistCount = (await getRequestResponse(url, userGistResource, authKey, authValue)).body.length;
    expect(afterDeleteGistCount).to.be.equal(beforeDeleteGistCount - 1);
  });

});
