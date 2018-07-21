import {Post} from "/imports/api/posts"


Meteor.methods({
    'post.add'(_post) {

        let post = new Post({
            subject: _post.subject,
            body: _post.body,
        })

        post.save((err) => {
            if (err) {
                throw new Error(err)
            }

        })
    },

    'post.delete'(_id) {
        const postExsist = Post.findOne(_id)
        postExsist.remove()
    },

})
