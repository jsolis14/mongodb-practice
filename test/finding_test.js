const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {

    beforeEach(async () => {
        //create marChar instance
        var char = new MarioChar({
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
})
