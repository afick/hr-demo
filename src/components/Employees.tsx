
import { LinkedinOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { Department, Employee } from 'API'
import { Query } from 'class/Query'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { DEFAULT_DATE_FORMAT } from 'utils/Constants'
import { isMobile } from 'react-device-detect'


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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    employees?.map((employee: Employee, i: number) => {
                        let actions = []
                        if (employee.linkedInUrl !== null && employee.linkedInUrl !== undefined) {
                            actions.push(<a href={employee.linkedInUrl ?? ''} target="_blank" rel="noreferrer"><LinkedinOutlined key="linkedIn" /></a>)
                        }
                        const hireDateDisplay = employee.hireDate !== null && employee.hireDate !== undefined ? `Hired on ${dayjs(employee.hireDate).format(DEFAULT_DATE_FORMAT)}` : ''
                        return (
                            <Col span={(4)} key={i}>
                                <Card key={i}
                                    actions={actions}
                                    hoverable
                                    style={{ width: isMobile ? 100 : 240 }}
                                    cover={<img alt={`${employee.firstName} ${employee.lastName}`} src={employee.headshot ?? ''} />}
                                >
                                    <Meta title={`${employee.firstName} ${employee.lastName}`} description={`${employee.title}`}>
                                    </Meta>
                                    <div className="ant-card-meta-description">
                                        {hireDateDisplay}
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
            {employees.length === 0 && (
                <div>
                    No records found
                </div>
            )}

        </div>
    )
}


export default Employees
