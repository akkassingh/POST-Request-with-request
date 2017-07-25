var request = require("request");

request({
  url: "http://www.cjihrig.com/development/php/hello_form.php",
  method: "POST",
  form: {
    name: "Akkas"
  }
}, function(error, response, body) {
  console.log(body);
});
