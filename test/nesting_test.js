const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting Records', () => {
    beforeEach(async () => {
        await mongoose.connection.collections.authors.drop()
    })

    it('creates an author with sub-documents', async () => {
        const author = new Author({
            name: 'Patrick Rothfuss',
            books: [{
                name: 'Name of the Wind',
                page: 400
            }]
        })
        await author.save()

        const res = await Author.findOne({ name: 'Patrick Rothfuss' })

        assert(res.books.length === 1)
    })

    it('adds a book to an author', async () => {
        const author = new Author({
            name: 'Patrick Rothfuss',
            books: [{
                name: 'Name of the Wind',
                pages: 400
            }]
        })
        await author.save()

        const res = await Author.findOne({ name: 'Patrick Rothfuss' })
        res.books.push({ name: "Wise Man's Fear", pages: 500 })
        await res.save()

        const find = await Author.findOne({ name: 'Patrick Rothfuss' })
        console.log(find)
        assert(find.books.length === 2)
    })
})
