import { Department } from 'API'
import { Query } from 'class/Query'
import { useEffect, useState } from 'react'

const DepartmentCell = (props: any) => {
    const [departmentName, setDepartmentName] = useState<string | undefined>('')
    useEffect(() => {
        new Query().getDepartment(props.data.departmentId).then((dept: Department) => setDepartmentName(dept.DepartmentName))
    })
    return (
        <span data-departmentid={props.data.departmentId}>
            {departmentName}
        </span>
    )
}

export default DepartmentCell
