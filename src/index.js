import React from 'react'
import ReactDOM from 'react-dom'
import './styles'

const APP_NODE = document.getElementById('app')

class App extends React.Component {
  render() {
    return <div className="container">Hello World! Step 1</div>
  }
}

ReactDOM.render(<App />, APP_NODE)
