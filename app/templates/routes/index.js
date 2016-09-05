var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = function (app) {

    app.get('/api/v1/users', function (req ,res) {
        keystone.list('User').model
            .find()
            .exec()
            .then(function (data) {
                res.send({
                    code: 200,
                    data: data
                })
            }, function(err){
                res.send({
                    code: 500,
                    error: err
                })
            });
    });

	// Views
	app.use(function (req, res) {
		res.render('index');
	});

};
