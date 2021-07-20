import { Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Navigation from 'components/app/Navigation'
import Routes from 'components/app/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css'


const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Content className="site-layout-background" style={{ margin: '24px 16px 0px 16px', padding: '24px 24px 24px 200px', overflow: 'initial', height: '100%' }}>
        <Routes />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Fickersons @2021 Created by Amanda Fick Anderson</Footer>
    </Layout>
  </Router>
)


export default App
