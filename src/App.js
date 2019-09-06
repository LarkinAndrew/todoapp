import React from 'react';
import './App.css';
import { Header } from './components/Header/'
import { Workplace } from './components/Workplace/'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faEdit, faMinusCircle, faTimes, faSave, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPlus, faEdit, faMinusCircle, faTimes, faSave, faCheck)

class App extends React.Component {
    updateComponent = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div className="App">
                <Header updateComponent={this.updateComponent}/>
                <Workplace updateComponent={this.updateComponent}/>
            </div>
        )
    }
}

export default App;
