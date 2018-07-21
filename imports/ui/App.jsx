import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'mobx-react'
import NavBar from './components/ListingNavbar/index'
import Home from '/imports/ui/components/FilterList/index'
import TodoStore from '/imports/Store/store'

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={TodoStore}>
                    <BrowserRouter>
                        <main>
                            <NavBar/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                        </main>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App
