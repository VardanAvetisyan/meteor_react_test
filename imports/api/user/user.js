import {Class} from 'meteor/jagi:astronomy'

const collection = new Mongo.Collection('user')

const User = Class.create({
    name: 'User',
    collection,

    fields: {
        email: String,
        password: String,
    },

})

export {User}
