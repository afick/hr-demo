import { QuestionOutlined } from '@ant-design/icons'

interface CustomIconProps {
    iconName: string | null | undefined | never
    allIcons: any
}

const CustomIcon = (props: CustomIconProps) => {
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
