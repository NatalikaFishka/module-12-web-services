const GIT_INPUTS = {
  URL: 'https://api.github.com',
  AUTH_HEADER: {
    KEY: 'Authorization',
    VALUE: `token 223f8be596bb55df92c90fb1f5732278638368fb`
  },
  TICK_STAR_HEADER: {
    KEY: "Content-Length",
    VALUE: 0
  },
  RESOURSES_PARTS: {
    USERS: '/users',
    USER_NAME: '/NatalikaFishka',
    GISTS: '/gists',
    STAR: '/star'
  },
  ADD_GIST_BODY: {
    "description": "Hello World Examples",
    "public": true,
    "files": {
      "hello_world_python.txt": {
        "content": "Run `python hello_world.py` to print Hello World"
      }
    }
  },
  EDIT_GIST_BODY: {
    "description": "This is edited description"
  }
}

module.exports = { GIT_INPUTS }