const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//connect to DB before test runs
before((done) => {
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });

    mongoose.connection.once('open', () => {
        console.log('Connection has been made')
        done()
    }).on('error', (error) => {
        console.log(error)
    });
})

//connect to mongoDB
