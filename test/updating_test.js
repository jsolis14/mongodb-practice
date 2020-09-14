const assert = require('assert');
const MarioChar = require('../models/marioChar');
const { createHash } = require('crypto');

describe('Updating records', () => {
    var char
    beforeEach(async () => {
        //create marChar instance
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        })

        //save instance to database
        await char.save()
        assert(char.isNew === false)
    })

    //create tests
    it('Updates one record from the database', async () => {
        await MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' })
        const res = await MarioChar.findOne({ _id: char._id })

        assert(res.name === 'Luigi')
    })

    it('Increments the weight by one', async () => {
        await MarioChar.updateMany({}, { $inc: { weight: 1 } })
        const res = await MarioChar.findOne({ name: 'Mario' })
        assert(res.weight === 51)
    })

})
