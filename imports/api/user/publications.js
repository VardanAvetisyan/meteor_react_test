import {User} from "/imports/api/user"

Meteor.publish('user.all', function () {
    return User.find()

})

Meteor.publish('user.all', function () {
    if (!User.checkAdmin(this.userId)) {
        throw new Meteor.Error('permission_denied', errors.permission_denied)
    }

    const cursor = User.find(),
        publications = PublicationUtils.join(
            cursor,
            [
                {collection: email, key: 'email'},
                {collection: password, key: 'password'},
            ]
        )

    return publications
})
