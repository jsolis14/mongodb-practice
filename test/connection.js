const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const MarioChar = require('../models/marioChar');

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

before(async () => {
    const char = new MarioChar({ name: 'Mario' })
    await char.save()
})
