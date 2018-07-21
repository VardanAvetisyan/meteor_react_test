import {Post} from "/imports/api/posts"

Meteor.publish('posts.all', function () {
    return Post.find()

})
