const assert = require('assert');
const MarioChar = require('../models/marioChar');
const { createHash } = require('crypto');
const mongoose = require('mongoose');
describe('Finding records', () => {
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
    it('Finds one record from the database', async () => {

        const res = await MarioChar.findOne({ name: 'Mario' })

        assert(res.name === 'Mario')
    })

    it('Finds record by id', async () => {
        const res = await MarioChar.findOne({ _id: char._id })

        assert(res._id.toString() === char._id.toString())
    })
})
