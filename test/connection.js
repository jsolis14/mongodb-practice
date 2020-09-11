const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


//connect to DB before test runs
before((done) => {
    //connect to mongoDB
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });

    mongoose.connection.once('open', () => {
        console.log('Connection has been made')
        done()
    }).on('error', (error) => {
        console.log(error)
    });
})


//drop the characters collection before each test
beforeEach(async () => {
    //drop the collection
    await mongoose.connection.collections.mariochars.drop()
})
