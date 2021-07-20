
import React from 'react'

const Dashboard = (_props: any) => {


    return (
        <div style={{
            width: '100%', 'textAlign': 'center', marginTop: '10px'
        }}>
            <h1>Welcome to the Fickersons</h1>
            <p>This site was build with React.JS <em>(yarn create react-app my-app)</em>with a Amplify backend. <em>(amplify push)</em></p>
            <p>GraphQL with DynamoDB source</p>
            <p>Ant Design and AG-Grid</p>
            <p>Pardon the design</p>
        </div >

    )

}

export default Dashboard
