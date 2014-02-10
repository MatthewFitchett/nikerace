var express  = require('express');
var app      = express();
var http     = require('http');
var path     = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

// Monogo DB connection..
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
// passport config..
require('./config/passport')(passport); 

app.configure(function() {
    app.set('port', process.env.PORT || 3002);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());  
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    
    app.use(express.session({ secret: 'abiglongsecretthatnooneknows' })); // session secret
    
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }
});

// configure the routing for HTTP / API requests
require('./app/routes.js')(app, passport);

// startup the server...
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
