var db = require('../models');

module.exports = function(app) {
    app.get('/', function(req, res) {
        db.Sushi.findAll({}).then(function(sushi) {

            let SushiObject = {
                my_sushi: sushi
            }
            res.render('index', SushiObject);
        });
    });


}