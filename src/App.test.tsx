import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  <BrowserRouter>
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  </BrowserRouter>
})
