import React from 'react'
import {observer, inject} from 'mobx-react'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import ModalLogin from '../modalLogin/index'
import ModalSign from '../modalSign/index'
import './component.css'

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenLogin: false,
            isOpenSign: false,
        }
    }

    togglOpen() {
        this.setState({
            isOpenLogin: !this.state.isOpenLogin,
        })
    }

    togglOpenSinUp() {
        this.setState({
            isOpenSign: !this.state.isOpenSign,
        })
    }

    logOut() {
        this.props.store.logOut()

    }

    render() {
        const {store} = this.props
        return (
            <div>
                <Navbar color="light" light>
                    <div>
                        <Nav className="ml-auto navbar-nav" navbar>

                            {store.isAuthenticated ? <div>
                                    <NavItem>
                                        <NavLink href="#">
                                            <div role="presentation" onClick={this.logOut.bind(this)}>Log out</div>
                                        </NavLink>
                                    </NavItem>
                                </div>
                                :
                                <div>
                                    <NavItem>
                                        <NavLink href="#">
                                            <div role="presentation" onClick={this.togglOpen.bind(this)}>Log in</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">
                                            <div role="presentation" onClick={this.togglOpenSinUp.bind(this)}>Sign up
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </div>
                            }

                        </Nav>
                    </div>
                </Navbar>
                <ModalLogin isOpenLogin={this.state.isOpenLogin} toggle={this.togglOpen.bind(this)}/>

                <ModalSign isOpenSign={this.state.isOpenSign} toggleSign={this.togglOpenSinUp.bind(this)}/>
            </div>
        )
    }
}

export default inject("store")(observer(NavbarMenu))

