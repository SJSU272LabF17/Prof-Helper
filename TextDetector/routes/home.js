var ejs = require("ejs");



function index(req,res) {

    ejs.renderFile('./views/index.ejs',function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
}

exports.index=index;