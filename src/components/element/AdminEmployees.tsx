import { Select } from 'antd'
import { Employee } from 'API'

interface AdminEmployeeProps {
    selectedValue: string
    updateEmployeeForm: (item: any) => void
    employees: Employee[]
}

const AdminEmployees = (props: AdminEmployeeProps) => {
    const { Option } = Select
    return (
        <Select value={props.selectedValue} onChange={props.updateEmployeeForm}>
            <Option key="0" value="0">New Employee</Option>
            {
                props.employees.map((item: Employee) => {
                    return (
                        <Option key={item.id} value={item.id ?? ''}>{`${item.firstName} ${item.lastName}`}</Option>
                    )
                })
            }
        </Select>
    )

}


export default AdminEmployees
