import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import renderer from 'react-test-renderer'

describe('Dashboard tests', () => {
    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<Dashboard />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })
    it('render screen test', () => {
        render(<Dashboard />)
        expect(screen.getByText('Welcome to the Fickersons')).toBeInTheDocument()
    })

    it('renders snapshot as expected', () => {
        const tree = renderer.create(<Dashboard />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
