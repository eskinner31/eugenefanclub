var bcrypt = require('bcrypt');
// require(knex);
// require(pg);

var testUser = {
  username: 'xoEugenexoxo',
  firstname: 'Logan',
  lastname: 'King',
  phone: '1234567890',
  email: 'number1eugenefanboy@hotmail.com',
  password: 'notverysecure'
};

function hashPassword(user,callback){
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return err;
        else {
          user.password = hash;
          callback(user);
          return hash;
        }
        });
      });
  }

function comparePassword(password, user, callback){
    bcrypt.compare(password, user, function(err,res){
      if(err) console.log(err);
      console.log(res);
      if(res == true){
        callback(res, user);
      }
      if(res == false){
        callback(res, user);
      }
    });
  }

comparePassword('notverysecure','$2a$10$b1K/Fm6JtD9O3HftFwMBwOR2aBzegizXnvgnge7E2ukiHPcYUFEJm',function(res,user){
  console.log(res,user);
});
