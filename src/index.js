import React from 'react'
import ReactDOM from 'react-dom'
import './styles'

const APP_NODE = document.getElementById('app')

class App extends React.Component {
  render() {
    return (
      <div className="container">
        WHOA let's update this...
        <h1>HELLO WORLD!</h1>
        <h2 className="green">We are Webpacking!</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, APP_NODE)
