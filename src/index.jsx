import React, { Component } from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

class App extends Component {
	render() {
		return <p> Hello React!</p>
	}
}

render(<App />, document.getElementById('app'))
