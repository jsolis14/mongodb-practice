const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');
const mongoose = require('mongoose');
describe('Saving records', () => {
    beforeEach(async () => {
        //drop the collection
        await mongoose.connection.collections.mariochars.drop()
    })

    //create tests
    it('saves a record to the database', async () => {

        //create marChar instance
        var char = new MarioChar({
            name: 'Mario'
        })

        //save instance to database
        await char.save()
        assert(char.isNew === false)
    })
})
