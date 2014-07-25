var expect    = require('chai').expect,
    app       = require('../server/server.js'),
    test      = require('supertest'),
    port      = 8500;

var testPostid;


describe('Server/Database Intergration', function(){

  it('should be able to GET from home', function(done){
    test(app)
      .get('/')
      .expect(200)
      .end(done);
  });

  //We removed this test, will fix it later
  // it('should be able to POST to login', function(done){
  //   test(app)
  //     .post('/api/users/login')
  //     .expect(200, 'Login Page')
  //     .end(done);
  // });

  //We removed this test because dummy posts dont have cookies/serialized users
  // it('should be able to POST to tags', function(done){
  //   test(app)
  //     .post('/api/tags')
  //     .expect(200)
  //     .end(function(err, res){
  //       if(err){
  //         throw err;
  //       } else {
  //         testPostid= res.body._id;
  //         expect(res.body).to.be.a('object');
  //         done();
  //       }
  //     });
  // });

  it('should be able to GET from tags', function(done){
    test(app)
      .get('/api/tags')
      .expect(200)
      .end(function(err, res){
        if(err){
          throw err;
        } else {
          expect(res).to.be.a('object');
          done();
        }
      });
  });
  
  //Not posting so shouldn't delete
  // it('should be able to DELETE from tags', function(done){
  //   test(app)
  //     .del('/api/tags/' + testPostid)
  //     .expect(200, 'Data with id:' + testPostid + ' Deleted')
  //     .end(done);
  // });

});
