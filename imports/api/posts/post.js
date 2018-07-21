import {Class} from 'meteor/jagi:astronomy'

const collection = new Mongo.Collection('posts')

const Post = Class.create({
    name: 'Post',
    collection,

    fields: {
        subject: String,
        body: String,
    },

})

export {Post}
