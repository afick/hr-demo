import { LinkedinOutlined } from '@ant-design/icons'
import { hasStringValue } from 'utils/Constants'

const LinkedInCell = (props: any) => {
    if (hasStringValue(props.data.linkedInUrl)) {
        return (
            <a href={props.data.linkedInUrl} target="_blank" rel="noreferrer" ><LinkedinOutlined /></a>
        )
    }
    return (
        <span>

        </span>
    )
}

export default LinkedInCell
