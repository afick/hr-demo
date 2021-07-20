

import { QuestionOutlined } from '@ant-design/icons'

const CustomIcon = (props: any) => {
    const iconName = props.iconName ?? 'QuestionCircle'
    const Component = props.allIcons[iconName]
    if (Component !== null && Component !== undefined) {
        return (
            <Component />
        )
    }
    return (
        <QuestionOutlined />
    )

}

export default CustomIcon
