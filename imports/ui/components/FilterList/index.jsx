import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import {observer, inject} from 'mobx-react'
import Delete from 'react-icons/lib/go/trashcan'
import Person from 'react-icons/lib/fa/user'
import Comment from 'react-icons/lib/fa/commenting-o'
import './component.css'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            body: '',
        }
    }

    addPost(e) {
        if (this.state.value !== '' || this.state.body !== '') {
            e.preventDefault()
            this.props.store.createTodo(this.state.value, this.state.body)
        }
        this.setState({value: '', body: ''})
    }

    removePost = (e) => {
        console.log(e._id, "sadfsd")
        this.props.store.removeTodo(e._id)
    }

    render() {
        const {store} = this.props
        return (
            <div>
                <Container>
                    <Row>
                        {
                            store.isAuthenticated && <Col xs="12" sm="4" md="4">
                                <form>
                                    <div className="form">
                                        <input
                                            type="text"
                                            className="inputSearch"
                                            placeholder="write Post name or filter them"
                                            value={this.state.value}
                                            onChange={(e) => this.setState({value: e.target.value})}
                                        />
                                        <textarea
                                            name="text"
                                            rows="4"
                                            cols="10"
                                            wrap="soft"
                                            className="inputCom2"
                                            placeholder="your message"
                                            value={this.state.body}
                                            onChange={(e) => this.setState({body: e.target.value})}
                                        />
                                        <div>
                                            <button className="btnPost btn" onClick={this.addPost.bind(this)}>Add Post
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        }
                        <Col xs="12" sm="8" md="8">
                            <div className="comment">
                                <Comment className="com"/>
                                {this.props.store.todos.length}
                            </div>
                            <div>
                                <form>
                                    <ul className="ul">
                                        {this.props.store.todos.map((item) => (
                                            <li
                                                className="listLi"
                                                key={item._id}
                                            >
                                                <p>Post id: {item._id}</p>
                                                <Person className="com"/>
                                                <div className="title"> {item.name} </div>
                                                <div className="inputCom"> {item.body} </div>
                                                {store.isAuthenticated && <Delete
                                                    className="delete"
                                                    onClick={this.removePost.bind(this, item)}
                                                />}
                                            </li>))}
                                    </ul>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default inject("store")(observer(Posts))
