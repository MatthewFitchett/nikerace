var request = require('request');
var app = require('../app');

describe('when an entrant that exists is requested from the API', function() {
    it('JSON is returned', function(done){
          request('http://localhost:3002/api/entrant?email=test@test.com&token=ABCDEFG', function(err,resp,body){
              expect(err).toBeNull();
              user = JSON.parse(body);
              expect(user.name).toBe('Matt'); 
              done(); 
      });
    });
});



describe('when a new user enters their Nike+ token and login details', function() {
  it('should create a new user', function() {
      // how do we establish a user?

  });

  xit('should save the users nike+ details', function() {
      expect(1).toBe(1);
  });

  xit('should show the current active races', function() {

  });

  xit('should update the current active races with the new nike+ details', function() {

  });
});



describe('when an existing user enters their Nike+ token and login details', function() {
  xit('should login the existing user', function() {

  });

  xit('should update the nike+ token to the new value', function() {

  });

  xit('should show the current active races', function() {

  });

  xit('should update the current active races with the new nike+ details', function() {

  });
});