var mongoose = require('mongoose');

var schema = require('./squema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Book = mongoose.model('Book',schema,'books');

var book = new Book({
    title: 'Paco el chato',
    author: 'Oscar Ramos',
    body: 'Buen libro',
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
    process.exit(0);
 });