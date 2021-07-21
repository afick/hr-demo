import React from 'react'
import HeadshotCell from './HeadshotCell'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
    <BrowserRouter>
        const div = document.createElement('div')
        ReactDOM.render(<HeadshotCell />, div)
        ReactDOM.unmountComponentAtNode(div)
    </BrowserRouter>
})

it('renders correct data', () => {
    const testObject = {
        headshot: 'test.jpg'
    }
    const { queryByTitle } = render(
        <HeadshotCell data={testObject} />,
    )
    const img = queryByTitle("headshot")
    expect(img).toBeTruthy()
})
