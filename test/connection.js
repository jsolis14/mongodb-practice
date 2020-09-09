const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('Connection has been made')
}).on('error', (error) => {
    console.log(error)
});
