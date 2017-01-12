var models = require("../models");
var express = require("express");
var router = express.Router();

var List = models.List;

//create a list
router.post('/lists', function(request,response) {
   List.create(request.body).then(function(list){
       List.findById(list.id).then(function(list){
           response.status(201).send(list);
       });
   });
});

//read all
router.get('/lists', function(request,response){
    List.findAll().then(function(list){
        response.status(200).send(list);
    });
});

//read one by id
router.get('/lists/:id', function(request,response){
   List.findById(request.params.id).then(function(list){
       if(list){
           response.status(200).send(list);
       } else {
           response.status(404).send();
       }
   }) ;
});

//update one by id
router.put('/lists/:id',function(request,response){
   List
        .findById(request.params.id)
        .then(function(list){
            if(list){
                list
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(200).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

//delete a list by id
router.delete('/lists/:id',function(request,response){
    List
        .findById(request.params.id)
        .then(function(list) {
            if(list){
                list
                    .destroy()
                    .then(function(){
                        response.status(204).send();
                    })
                    .catch(function(error){
                        console.warn((error));
                        response.status(500).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

module.exports = router;
