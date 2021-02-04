const model = require('../models/salaries.model')();

var salariesController = function () { }

salariesController.show = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        res.send(result);
        console.log(result);

    });
};

salariesController.edit = function (req, res) {
    let id = req.params.id;
    model.findById(id, (err, result) => {
        if (err) { console.log(err); }
        console.log(result.prenom);
        
        result.save();
        
        res.json(result);
    
    });

}

salariesController.delete = function (req, res) {

    let id = req.params.id;
    model.deleteOne({ _id: id }, (err, result) => {
        if (err) { console.log(err); }
        res.redirect('/salaries/');
    });

}

salariesController.save = function (req, res) {

    //if (req.body.id == 0) {

        var body = req.body;
        body.status = false;

        model.create(body, (err, result) => {
            if (err) { console.log(err); }
            res.send(result);
            console.log(result)
        });
    }
    //};
salariesController.update = function (req, res) {

        var body = req.body;

       model.updateOne({ _id: body.id }, {
            $set: {
               nom: body.nom,
              prenom :body.prenom,
                adresse : body.adresse
            }
        }, { multi: true }, (error, result) => {
             if (error)
                throw error;
             res.send(result);
         });
     };
    


module.exports = salariesController;