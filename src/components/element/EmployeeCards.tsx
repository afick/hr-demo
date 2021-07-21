
import { LinkedinOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import dayjs from 'dayjs'
import { DEFAULT_DATE_FORMAT } from 'utils/Constants'
import { isMobile } from 'react-device-detect'
import { Employee } from 'API'

interface EmployeeCardsProps {
    employees: Employee[]
}

const EmployeeCards = (props: EmployeeCardsProps) => {
    if (props.employees.length === 0) {
        return (
            <div>
                No records found
            </div>
        )
    }

    return (
        <Row >
            {props.employees?.map((employee: Employee, i: number) => {
                let actions = []
                if (employee.linkedInUrl !== null && employee.linkedInUrl !== undefined) {
                    actions.push(<a href={employee.linkedInUrl ?? ''} target="_blank" rel="noreferrer"><LinkedinOutlined key="linkedIn" /></a>)
                }
                const hireDateDisplay = employee.hireDate !== null && employee.hireDate !== undefined ? `Hired on ${dayjs(employee.hireDate).format(DEFAULT_DATE_FORMAT)}` : ''
                return (
                    <Col span={(4)} key={i} style={{ marginBottom: '10px' }}>
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
            })}
        </Row>
    )
}


export default EmployeeCards
