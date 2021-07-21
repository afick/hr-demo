import { BrowserRouter } from 'react-router-dom'
import AdminEmployees from './AdminEmployees'

import renderer from 'react-test-renderer'
describe('custom icon edit tests', () => {

    const defaultFunction = (_item: string) => { }
    it('renders without crashing', () => {
        <BrowserRouter>
            const div = document.createElement('div')
            ReactDOM.render(<AdminEmployees updateEmployeeForm={defaultFunction} employees={[]} selectedValue="" />, div)
            ReactDOM.unmountComponentAtNode(div)
        </BrowserRouter>
    })

    it('renders snapshot as expected', () => {
        const tree = renderer.create(<AdminEmployees updateEmployeeForm={defaultFunction} employees={[]} selectedValue="" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

})
