import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const app = document.getElementById('app')
console.info('app', App)
ReactDOM.render(<App />, app)
