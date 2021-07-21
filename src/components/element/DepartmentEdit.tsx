
import { Button, Form, Input, message, Select } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

import { Query } from 'class/Query'
import { useState } from 'react'
import { hasStringValue } from 'utils/Constants'
import * as AntdIcons from '@ant-design/icons'
import CustomIcon from './CustomIcon'

interface DepartmentEditInterface {
    onOk?: () => void | null
    existingDepartments?: (string | undefined)[] | any
}

const DepartmentEdit = (props: DepartmentEditInterface) => {
    const allIcons: {
        [key: string]: any
    } = AntdIcons,
        { Option } = Select

    const onFinish = (values: any) => {
        setMessageValidation('')
        if (!hasStringValue(values.dept.departmentName)) {
            setMessageValidation('!Department Name is required')
            return
        }
        if (props.existingDepartments.find((dept: string) => dept.toLocaleLowerCase() === values.dept.departmentName.toLocaleLowerCase()) !== undefined) {
            setMessageValidation('!Department Name already exists')
            return
        }
        new Query().saveDepartment({ DepartmentName: values.dept.departmentName, DepartmentIcon: values.dept.departmentIcon }).then(() => {
            message.success('Successfully saved')
            if (props.onOk !== null && props.onOk !== undefined) {
                props.onOk()
            }
        }).catch(() => message.error('failed to save'))
    },
        [form] = Form.useForm(),
        clearModal = () => {
            form.resetFields()
            setMessageValidation('')
            if (props.onOk !== null && props.onOk !== undefined) {
                props.onOk()
            }
        },
        [messageValidation, setMessageValidation] = useState('')

    return (
        <>
            <Form form={form}
                id="departmentUpdate"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onFinish}
                layout="horizontal"
                size={'medium' as SizeType}
            >
                <Form.Item id="departmentName" name={['dept', 'departmentName']} >
                    <Input placeholder="Department Name" />
                </Form.Item>
                <Form.Item id="departmentIcon" name={['dept', 'departmentIcon']} >
                    <Select>
                        {
                            Object.keys(allIcons).filter((item) => item.indexOf('Filled') > -1).map((item: any, i: number) => {
                                return (
                                    <Option key={i} value={item}>
                                        <CustomIcon iconName={item} allIcons={allIcons} /> {item}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                {messageValidation}
                <Form.Item label="">
                    <Button type="primary" htmlType="submit"  >Save</Button> <Button type="text" htmlType="submit" onClick={clearModal}  >cancel</Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default DepartmentEdit
