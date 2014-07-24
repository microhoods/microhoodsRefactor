var expect    = require('chai').expect,
    app       = require('../server/server.js'),
    test      = require('supertest'),
    port      = 8500;

var testPostid;


describe('routes', function(){

  it('should be able to get the home page', function(done){
    test(app)
      .get('/')
      .expect(200)
      .end(done);
  });

  it('should be able to post to the login path', function(done){
    test(app)
      .post('/api/users/login')
      .expect(200, 'Login Page')
      .end(done);
  });

  it('should be able to post tags', function(done){
    test(app)
      .post('/api/tags')
      .expect(200)
      .end(function(err, res){
        if(err){
          throw err;
        } else {
          console.log(res.body);
          testPostid= res.body._id;
          expect(res.body).to.be.a('object');
          done();
        }
      });
  });

  it('should be able to delete tags', function(done){
    test(app)
      .del('/api/tags/' + testPostid)
      .expect(200, 'Deleted Tags!')
      .end(done);
  });

  it('should be able to retrieve tags', function(done){
    test(app)
      .get('/api/tags')
      .expect(200, 'Here are your tags!')
      .end(done);
  });
});
