import { Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Navigation from 'components/Navigation'
import Routes from 'components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css'


const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Content className="site-layout-background" style={{ margin: '5px 16px 0px 16px', padding: '24px 24px 24px 200px' }}>
        <Routes />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Fickersons &copy;{new Date().getFullYear()} Created by Amanda Fick Anderson</Footer>
    </Layout>
  </Router>
)


export default App
