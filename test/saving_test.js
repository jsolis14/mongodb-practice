const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Saving records', () => {

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
