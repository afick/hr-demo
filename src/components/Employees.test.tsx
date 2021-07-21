import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Employees from './Employees'
import renderer from 'react-test-renderer'


describe('Employees tests', () => {
    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<Employees />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })
    it('renders snapshot as expected', () => {
        const state = { state: { id: 1 }, hash: '#test' }
        const tree = renderer.create(<Employees location={state} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

})
