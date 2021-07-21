import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Admin from './Admin'

jest.mock('./element/AdminEdit', () => {
    return {
        __esModule: true,
        A: true,
        default: () => {
            return <div>test</div>
        },
    }
})
describe('Admin tests', () => {
    afterEach(cleanup)

    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<Admin />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })

    it('renders view', () => {

        render(<Admin />)

        expect(screen.getByText('test')).toBeInTheDocument()
    })

})
