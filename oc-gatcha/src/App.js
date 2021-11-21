import React from 'react'
import Main from './Main'
import Buttons from './Buttons'

class App extends React.Component {
    render() {
        return <div className="app">
            {/* <Header /> */}
            <h1>OC Gatcha Sim</h1>
            <Main />
            <Buttons />
        </div>
    }
}

export default App