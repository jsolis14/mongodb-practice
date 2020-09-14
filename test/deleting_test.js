const assert = require('assert');
const MarioChar = require('../models/marioChar');
const mongoose = require('mongoose');

describe('Deleting records', () => {
    beforeEach(async () => {
        //drop the collection
        await mongoose.connection.collections.mariochars.drop()
    })

    var char
    beforeEach(async () => {
        //create marChar instance
        char = new MarioChar({
            name: 'Mario'
        })

        //save instance to database
        await char.save()
        assert(char.isNew === false)
    })

    //create tests
    it('Deletes one record from the database', async () => {
        await MarioChar.findOneAndRemove({ name: 'Mario' })

        const res = await MarioChar.findOne({ name: 'Mario' })

        assert(!res)
    })

})
