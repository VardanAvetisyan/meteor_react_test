import {Accounts} from 'meteor/accounts-base'


Meteor.methods({
    'user.add'(_user) {
        console.log(_user, "user")
        Accounts.createUser(_user)
    }
})
