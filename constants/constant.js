const URL = 'https://jsonplaceholder.typicode.com';

const BODY_TO_POST = {
  title: 'Post method test',
  body: 'This is post method test',
  userId: 1
}
const HEADER = {
  KEY: "Content-type",
  VALUE: "application/json; charset=UTF-8"
}

const RESOURCES = {
  USERS: '/users',
  POSTS: '/posts',
}

module.exports = { RESOURCES, HEADER, BODY_TO_POST, URL };