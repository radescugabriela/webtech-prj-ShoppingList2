var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Category=models.Category;


router.post('/categories', function(req,res) {
    Category.create(req.body).then(function(){
      res.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});

// get all categories and all products associated with categories
router.get('/categories', function(req, res) {
    Category.findAll({limit: 600,include: [{model: models.List}]
        }).then(function(categories) {
             res.status(200).send(categories);
    });
});

// get one category by id
router.get('/categories/:id', function(request,response){
    Category.findById(request.params.id).then(function(article){
        if(Category) {
            response.status(200).send(categories);
        } else {
            response.status(404).send();
        }
    });
});

// delete a category by id
router.delete('/categories/:id', function(request,response){
    Category
        .findById(request.params.id)
        .then(function(category){
            if(category) {
                category
                    .destroy()
                    .then(function(){
                        response.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});
module.exports = router;