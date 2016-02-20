var express = require('express');
var router = express.Router();
var request = require('request').defaults({jar:true});
var url = require('url');


var rootUrl = 'http://dev.learninghealth.io:8080/';


router.all('/*', function(req, res, next){
    console.log('im here');
    
    request.post(
        'http://dev.learninghealth.io:8080/bonita/loginservice',
        {
            form: {
                username: 'nancy',
                password: 'bpm',
                redirect: false,
                redirecturl: '',
                tenant: 1
            }
        }, 
        function(error, response, html){
            doRequest();
        }
    );
    
    var pathToCall = req.originalUrl.slice(req.baseUrl.length);
    
    var finalUrl = url.resolve(rootUrl, pathToCall);
    
    function doRequest()
    {
        request({
            method: req.method,
            uri: finalUrl,
            formData: req.query
        },function(error,response,body){
            if(error)
            {
                res.send(error);
                res.end();
                return;
            }
            res.send(body);
            res.end();
            
            
        })
    }
    var a = router;
    a = request;
    a = url;
    a = rootUrl;
    
    
})

module.exports = router;