var sails = require('sails');

before(function (done) {
  this.timeout(50000);
  sails.lift({}, function (err, server) {
    console.log("Server:", server);
    if (err) {
      return done(err);
    }
    done(err, sails);
  });
});

after(function (done) {
  sails.lower(done);
});
