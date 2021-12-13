var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code',
  params: {phoneNumber: '<REQUIRED>', verifyCode: '<REQUIRED>'},
  headers: {
    'x-rapidapi-host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com',
    'x-rapidapi-key': 'f53372be74mshbc15f46d373de4cp1e3970jsn0c82ef59c59d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});