import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Employee } from 'API'
import { Query } from 'class/Query'
import React, { useEffect, useState } from 'react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const Search = () => {

    const [employees, setEmployees] = useState<Employee[]>([])
    useEffect(() => {
        new Query().getEmployees().then((employees: Employee[]) => setEmployees(employees))
    }, [])
    return (
        <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
                rowData={employees}>
                <AgGridColumn field="firstName" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="lastName" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="title" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="departmentId"></AgGridColumn>
            </AgGridReact>
        </div>
    )
}


export default Search
