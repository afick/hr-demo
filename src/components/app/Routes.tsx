
import Admin from 'components/Admin'
import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Employees from '../Employees'
import Search from '../Search'
const Routes = (_props: any) => (

    <Switch>
        <Route path='/' component={Dashboard} exact  ></Route>
        <Route path='/Employees' component={Employees} exact></Route>
        <Route path='/Search' component={Search} exact></Route>
        <Route path='/Admin' component={Admin} exact></Route>
    </Switch>

)
export default Routes
