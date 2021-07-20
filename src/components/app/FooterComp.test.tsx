import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FooterComp } from './FooterComp'
import { render } from '@testing-library/react'
describe('footer comp tests', () => {
  it('renders footer without crashing', () => {
    <BrowserRouter>
      const div = document.createElement('div')
      ReactDOM.render(<FooterComp />, div)
      ReactDOM.unmountComponentAtNode(div)
    </BrowserRouter>
  })

})
