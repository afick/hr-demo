import { Image } from 'antd'

const HeadshotCell = (props: any) => {
    return (
        <div style={{ verticalAlign: 'center' }}>
            <Image title="headshot"
                width={30} src={props.data.headshot} />
        </div>
    )
}

export default HeadshotCell
