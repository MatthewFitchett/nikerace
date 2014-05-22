var request = require('supertest');
var app = require('../app.js');
//var routes = require('../app/routes.js')(app, passport);

describe('when a new user enters their Nike+ token and login details', function() {
  xit('should create a new user', function(done) {
      // how do we establish a user?

  });
});

describe('when a request to root is made', function(){
  it('should respond with the index', function(done){
      request(app)
        .get('/')
        .expect(200)
        .end(function(err, res){
            expect(res).not.toBe(null);
            expect(res.text).not.toBe(null);
            expect(res.text).toContain('The Nike+ race');
            done();
          });
  });

  describe('when standard signup is enabled', function() {
    it('should reponsd with a standard signup control and link', function(done){
      request(app)
        .get('/')
        .expect(200)
        .end(function(err, res){
            expect(res.text).toContain('<a href="/signup"');
            done();
          });
    });
  });
});