import React from 'react'
import '../../matchmedia'
import { BrowserRouter } from 'react-router-dom'
import DepartmentEdit from './DepartmentEdit'
describe('department edit tests', () => {

    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<DepartmentEdit />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })
})
