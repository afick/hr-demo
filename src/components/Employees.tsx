
import { Department, Employee } from 'API'
import { Query } from 'class/Query'
import React, { useEffect, useState } from 'react'
import EmployeeCards from './element/EmployeeCards'

const Employees = (props: any) => {
    const hash: string = props.location.hash.replace('#', '')
    const [employees, setEmployees] = useState<Employee[] | any>([])
    useEffect(() => {
        if (props.location.state !== undefined) {
            new Query().getDepartment((props.location.state.id)).then((departments: any) => {
                setEmployees(departments.employees.items)
            })
        }
        else {
            //would refactor this with a better graphQL query
            new Query().getDepartments().then((departments: any) => {
                const dept = departments.filter((item: Department) => item.DepartmentName === hash)
                new Query().getDepartment((dept.id)).then((departments: any) => {
                    setEmployees(departments.employees.items)
                })
            })
        }

    }, [hash, props.location.state])
    return (
        <div style={{ height: '100%', width: '100%', margin: '20px' }}>
            <h1>Department: {hash}</h1>
            <EmployeeCards employees={employees} />
        </div>
    )
}


export default Employees
