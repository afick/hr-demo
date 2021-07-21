import { PlusOutlined, RedoOutlined } from '@ant-design/icons'
import { Button, Image, DatePicker, Form, Input, Select, Switch, Popover, message, Modal } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { Department, Employee } from 'API'
import { Query } from 'class/Query'
import dayjs from 'dayjs'
import React, { useState, useEffect } from 'react'
import { hasStringValue } from 'utils/Constants'
import AdminEmployees from './AdminEmployees'
import DepartmentEdit from './DepartmentEdit'

const AdminEdit = () => {
    const
        [form] = Form.useForm(),
        [departments, setDepartments] = useState<Department[]>([]),
        [isModalVisible, setIsModalVisible] = useState(false),
        [employees, setEmployees] = useState<Employee[]>([]),
        [randomUserHeadShots, setRandomUserHeadshots] = useState<React.ReactNode>(null),
        [randomUserHeadShotUrl, setRandomUserHeadshotUrl] = useState(''),
        [showDisabled, setShowDisabled] = useState(true),
        [hideDelete, setHideDelete] = useState(true),
        [updateData, setUpdateData] = useState(true),
        [selectedValue, setSelectedValue] = useState('0'),
        [deleteMessage, setDeleteMessage] = useState(''),
        query = new Query(),
        { Option } = Select,
        /* eslint-disable no-template-curly-in-string */
        validateMessages = {
            required: '${label} is required!'
        },
        /* eslint-disable no-template-curly-in-string */
        onDelete = (value: any) => (setDeleteMessage(value ? '' : '  this user will no longer be active')),
        onFinish = (values: any) => {
            if (deleteMessage.length > 0) {
                query.deleteEmployee(values.user.id).then(() => {
                    message.success('Successfully deleted user')
                    setDeleteMessage('')
                    updateEmployeeForm('0')
                }
                ).catch(() => message.error('failed to save')).finally(() =>
                    setUpdateData(true))
            }
            else {
                saveUser(values.user)
            }
        },
        saveUser = (user: any) => {
            query.saveEmployee(user, randomUserHeadShotUrl).then(() => {
                setUpdateData(true)
                message.success('Successfully saved')
                updateEmployeeForm('0')
            }).catch((ex) => message.error('failed to save' + ex))
        },
        hideModal = () => {
            setIsModalVisible(false)
            setUpdateData(true)
        },
        showModal = () => {
            setIsModalVisible(true)
        },
        getRandomImage = () => {
            setShowDisabled(true)
            fetch('https://randomuser.me/api/').then((json) => json.json()).then((response) => {
                setRandomUserHeadshots(
                    <Image src={response.results[0].picture.large} />
                )
                setShowDisabled(false)
                setRandomUserHeadshotUrl(response.results[0].picture.large)
            })
        },
        updateEmployeeForm = (value: string) => {
            setSelectedValue(value)
            if (value === '0') {
                form.resetFields()
                setHideDelete(true)
            }
            else {
                const employee = employees.find((employeeItem: Employee) => employeeItem.id === value) ?? null
                if (employee !== undefined || employee !== null) {
                    setHideDelete(false)
                    form.setFieldsValue({
                        user: {
                            firstName: employee?.firstName,
                            lastName: employee?.lastName,
                            linkedInUrl: employee?.linkedInUrl,
                            title: employee?.title,
                            hireDate: hasStringValue(employee?.hireDate) ? dayjs(employee?.hireDate) : '',
                            departmentId: employee?.departmentId,
                            id: employee?.id
                        }
                    })
                    if (hasStringValue(employee?.headshot)) {
                        setRandomUserHeadshotUrl(employee?.headshot ?? '')
                        setRandomUserHeadshots(<Image src={employee?.headshot ?? ''} />)
                    }
                }
            }
        }

    useEffect(() => {
        const randomizedImage = () => {
            setShowDisabled(true)
            fetch('https://randomuser.me/api/').then((json) => json.json()).then((response) => {
                setRandomUserHeadshots(
                    <Image src={response.results[0].picture.large} />
                )
                setShowDisabled(false)
                setRandomUserHeadshotUrl(response.results[0].picture.large)
            })
        },
            query = new Query()
        query.getEmployees().then((employees) => {
            setEmployees(employees)
        })
        query.getDepartments().then((departments) => {
            setDepartments(departments)
            randomizedImage()
        })
        setUpdateData(false)
    }, [updateData])

    return (
        <>
            <h1>Admin</h1>
            <Form
                form={form}
                validateMessages={validateMessages}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onFinish}
                layout="horizontal"
                size={'large' as SizeType}
            >
                <Form.Item label="Select">
                    <AdminEmployees updateEmployeeForm={updateEmployeeForm} selectedValue={selectedValue} employees={employees} />
                </Form.Item>
                <p></p>
                <Form.Item label="First Name" id="firstName" name={['user', 'firstName']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" id="lastName" name={['user', 'lastName']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Headshot"  >
                    <Form.Item label="" style={{ display: 'inline-block', width: '150px' }} >{randomUserHeadShots} </Form.Item>
                    <Form.Item label="" style={{ display: 'inline-block', width: '50px', }}>  <Popover content="Load a different headshot"><Button onClick={getRandomImage}><RedoOutlined /></Button>
                    </Popover> </Form.Item>
                </Form.Item>
                <Form.Item label="Title" id="title" name={['user', 'title']} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="LinkedIn Url" id="linkedInUrl" name={['user', 'linkedInUrl']} >
                    <Input />
                </Form.Item>
                <Form.Item label="Department" required={true} style={{ marginBottom: 0 }}  >
                    <Form.Item label="" id="departmentId" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }} name={['user', 'departmentId']} rules={[{ required: true }]}>
                        <Select>
                            {
                                departments.map((item: Department, i: number) => {
                                    return (
                                        <Option key={i} value={item.id ?? ''}>{item.DepartmentName}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Button onClick={showModal}><PlusOutlined /> Add</Button>
                        <Modal
                            title="Add new department"
                            visible={isModalVisible}
                            onOk={hideModal}

                            onCancel={hideModal} footer={null}
                        >
                            <DepartmentEdit onOk={hideModal} existingDepartments={departments.map((dept) => dept.DepartmentName)} />
                        </Modal>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Hire Date" id="hireDate" name={['user', 'hireDate']} rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Still Working Here" name={['status', 'stillHere']} style={{
                    display: (hideDelete) ? 'none' : ''
                }}>
                    <Switch defaultChecked={true} checkedChildren="Yes" unCheckedChildren="No" onClick={onDelete}

                    />
                </Form.Item>
                <Form.Item label="" id="Id" name={['user', 'id']} style={{ height: '0px' }} >
                    <Input hidden={true} />
                </Form.Item>
                <Form.Item label=" " style={{ color: 'transparent' }}>
                    <Button type="primary" htmlType="submit" disabled={showDisabled} >Save</Button>{deleteMessage}
                </Form.Item>
            </Form>
        </>
    )
}


export default AdminEdit
