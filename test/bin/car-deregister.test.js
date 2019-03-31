const exec = require('child_process').exec;
const taction = require('../../controllers/car/deregister');

describe('car deregister Script Test Cases', function () {
  describe('Primary car deregister Test Case', function () {
    it('Primary car deregister Good Path', function (done) {
      // var command = exec('bash -c ls -latr', {shell: 'C:\\Users\\dwpulsip\\tools\\Git\\bash.exe'}, function (err, stdout, stderr) {
      let command = "bin/adc-car-deregister ";
      let params = [];
      _.each(Object.keys(taction.inputs), function (key) {
        if(key !== "mode") {
          params.push("--" + key + " " + taction.inputs[key].type);
        }
      });
      command += params.join(" ");
      let results = exec(command, function (err, stdout, stderr) {
        console.log(stderr);
        if (err) {
          return done(err);
        }
        else {
          console.log(stdout);
        }
      });
      results.on('exit', function (code) {
        return done(code);
      });
    });
  });
});
