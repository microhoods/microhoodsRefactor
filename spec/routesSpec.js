var expect    = require('chai').expect,
    app       = require('../server/server.js'),
    test      = require('supertest'),
    port      = 8500;


describe('routes', function(){

  it('should be able to get the home page', function(done){
    test(app)
      .get('/')
      .expect(200, 'Home Page')
      .end(done);
  });

  it('should be able to post to the login path', function(done){
    test(app)
      .post('/login')
      .expect(200, 'Login Page')
      .end(done);
  });

  it('should be able to post tags', function(done){
    test(app)
      .post('/api/tags')
      .expect(200, 'Saving Tags')
      .end(done);
  });

  it('should be able to delete tags', function(done){
    test(app)
      .del('/api/tags')
      .expect(200, 'Deleting Tags')
      .end(done);
  });

  it('should be able to retireve tags', function(done){
    test(app)
      .get('/api/tags')
      .expect(200, 'Here are your tags!')
      .end(done);
  });
});
