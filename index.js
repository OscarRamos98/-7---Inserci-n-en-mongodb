var mongoose = require('mongoose');

var schema = require('./squema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Book = mongoose.model('Book',schema,'books');

var book = new Book({
    title: 'Harry Potter',
    author: 'Enrique Jaime',
    body: 'Ssupenso',
    comments: [{
        body:'Buen libro',
        date:'2021/05/03'
    }],
    hidden: true,
    meta: {votes:100, favs:100}
});

book.save(function(error) {
    if(error){
        console.log(error);
        process.exit(1);
    } 
    console.log("Guardado con exito!");
    //process.exit(0);
 });

Book.update({_id:'60900c4c54b3a63ac41f711d'}, {$set:{hidden: true}},
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----Actualizacion---->");
    console.log(docs);
    //process.exit(0);
});

Book.findOneAndRemove({_id:'60900c4c54b3a63ac41f711d'}, function(error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Se eliminó correctamente");
    console.log(docs);
    process.exit(0);
});

Book.find({author: "Oscar Ramos"}, 
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
console.log("<----Consulta---->");
console.log(docs);
process.exit(0);
});
