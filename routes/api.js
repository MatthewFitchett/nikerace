
var Nike=require('node-nike');

exports.entrants = function (req, res) {
    console.log(req.query.token);
    res.json({
        name: 'Matt',
        token: req.query.token
    });
};

exports.postToken = function (req, res) {
    console.log(req.body.apiToken);

    var token = req.body.apiToken;
    var nike = new Nike(token);

    nike.get('',function(err, data) {
        console.log(data);
    });
    // Now we've got the token we need to make  nike+ request for the data!
    res.json({
        success:true
    });
};