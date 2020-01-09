const bcrypt = require("bcryptjs")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "Steve", location: "Texas", password: bcrypt.hashSync('test', 12), email: "Steve@email.com"},
        {id: 2, username: "Dave", location: "Texas", password: bcrypt.hashSync('test', 12), email: "Dave@email.com"},
        {id: 3, username: "Linda", location: "New York", password: bcrypt.hashSync('test', 12), email: "Linda@email.com"},
        {id: 4, username: "Kevin", location: "New York", password: bcrypt.hashSync('test', 12), email: "Kevin@email.com"},
        {id: 5, username: "Carlos", location: "California", password: bcrypt.hashSync('test', 12), email: "Carlos@email.com"},
        {id: 6, username: "Karen", location: "California", password: bcrypt.hashSync('test', 12), email: "Karen@email.com"},
        {id: 7, username: "Virginia", location: "California", password: bcrypt.hashSync('test', 12), email: "Virginia@email.com"},
      ]);
    });
};
