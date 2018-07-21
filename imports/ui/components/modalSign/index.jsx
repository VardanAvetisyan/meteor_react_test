import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, ModalFooter} from 'reactstrap'
import PropTypes from 'prop-types'
import {observer, inject} from 'mobx-react'
import './component.css'


class ModalSign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            email: '',
            password: '',
        }
    }

    onChange(event) {
        const value = event.target.value
        this.setState({
            [event.target.name]: value,
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.store.addUser({email: this.state.email, password: this.state.password})
        this.setState({
            email: '',
            password: '',
        })
        this.props.toggleSign()

    }

    render() {

        return (
            <div>
                <Modal isOpen={this.props.isOpenSign} toggle={this.props.toggleSign}>
                    <ModalHeader toggle={this.props.toggleSign}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form inline className="modalBody">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    value={this.state.email}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.onChange.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    value={this.state.password}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.onChange.bind(this)}
                                />
                            </FormGroup>
                        </Form>
                        <ModalFooter>
                            <Button className="btn" onClick={this.onSubmit.bind(this)}>Sign Up</Button>{' '}
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

ModalSign.propTypes = {
    isOpenSign: PropTypes.bool.isRequired,
    toggleSign: PropTypes.func.isRequired,
}

export default inject("store")(observer(ModalSign))

