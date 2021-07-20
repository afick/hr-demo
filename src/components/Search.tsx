import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import { Department, Employee } from 'API'
import { Query } from 'class/Query'
import React, { useEffect, useState } from 'react'
import HeadshotCell from './element/HeadshotCell'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import LinkedInCell from './element/LinkedInCell'
import DepartmentCell from './element/DepartmentCell'
const Search = () => {

    const [departments, setDepartments] = useState<Department[]>([]),
        [employees, setEmployees] = useState<Employee[]>([]),
        constValueGetter = (row: any) => {
            const dept = departments.find((dept) => dept.id === row.data.departmentId)
            return dept?.DepartmentName
        }
    useEffect(() => {
        new Query().getEmployees().then((employees: Employee[]) => setEmployees(employees))
        new Query().getDepartments().then((departments: Department[]) => setDepartments(departments))

    }, [])
    return (
        <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact

                pagination={true}
                paginationPageSize={15}
                frameworkComponents={{
                    'headshotCell': HeadshotCell,
                    'linkedInCell': LinkedInCell,
                    'departmentCell': DepartmentCell
                }}
                rowData={employees}>
                <AgGridColumn field="firstName" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="lastName" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="title" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="linkedinUrl" cellRenderer="linkedInCell" headerName="LinkedIn" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="title" sortable={true} filter={true} cellRenderer="headshotCell">

                </AgGridColumn>
                <AgGridColumn field="hireDate" sortable={true}
                    filter="agDateColumnFilter">
                </AgGridColumn>
                <AgGridColumn field="departmentId" valueGetter={constValueGetter} sortable={true}
                    headerName="Department" filter={true} ></AgGridColumn>
            </AgGridReact>
        </div>
    )
}


export default Search
