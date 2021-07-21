import { render, screen } from '@testing-library/react'
import React from 'react'
import '../../matchmedia'
import { BrowserRouter } from 'react-router-dom'
import CustomIcon from './CustomIcon'
import * as AntdIcons from '@ant-design/icons'

describe('custom icon edit tests', () => {

    const allIcons: {
        [key: string]: any
    } = AntdIcons

    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<CustomIcon allIcons={allIcons} iconName="" />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })

    it('render test', () => {
        render(<CustomIcon allIcons={allIcons} iconName="" />)
        expect(screen).toBeTruthy()
    })

})
