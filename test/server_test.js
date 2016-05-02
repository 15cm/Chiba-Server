var request = require('request');
request.post(
    {
        url: 'http://localhost:9000/auth',
        body: JSON.stringify({
            phone: '13319280475',
            pass: 'password'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    },
    function(err,res,body){
        console.log(body);
    }
);
