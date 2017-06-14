const e = React.createElement
const APP_NODE = document.getElementById('app')

class App extends React.Component {
  render() {
    return e('div', { className: 'container' }, `Hello World!`)
  }
}

ReactDOM.render(e(App, {}, null), APP_NODE)
