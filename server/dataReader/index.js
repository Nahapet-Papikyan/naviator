const fs = require('fs');

module.exports = {
  read() {
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))
    console.log(users);
  }
}