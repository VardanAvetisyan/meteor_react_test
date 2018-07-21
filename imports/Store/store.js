import {observable, computed, decorate} from 'mobx'
import {Post} from '/imports/api/posts'
import {Tracker} from 'meteor/tracker'


class TodoStore {

    createTodo(subject, body) {
        if (Meteor.user()) {
            Meteor.call('post.add', {subject, body})
        }
    }


    removeTodo(_id) {
        if (Meteor.user()) {
            Meteor.call('post.delete', {_id})
        }
    }

    create() {
        this.todos = Post.find().fetch()
    }

    loginUser(email, password) {
        Meteor.loginWithPassword(email, password, (error) => {
            if (!error) {
                this.isLogged = true
            }
        })
    }

    logOut() {
        Meteor.logout((success, err) => {
            if (!err) {
                localStorage.clear()
                this.isLogged = false
            }
        })
    }

    addUser(data) {
        Meteor.call('user.add', data)
    }

    init() {
        const self = this
        Tracker.autorun(() => {
            Meteor.subscribe('posts.all')
            self.create()
        })

    }

    get isAuthenticated() {
        return this.isLogged
    }
}

decorate(TodoStore, {
    todos: observable,
    isLogged: observable
})

const store = new TodoStore()
store.init()
export default store
