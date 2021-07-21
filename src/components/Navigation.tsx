import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Sider from 'antd/lib/layout/Sider'
import { useState, useEffect } from 'react'
import { Query } from 'class/Query'
import { Department } from 'API'
import CustomIcon from 'components/element/CustomIcon'
import * as AntdIcons from '@ant-design/icons'

const Navigation = () => {
    const collapseLogo = 'logo_collapse.png',
        logoDefault = 'logo.png',
        { SubMenu } = Menu,
        allIcons: {
            [key: string]: any
        } = AntdIcons,
        [collapsedMenu, setCollapsedMenu] = useState(false),
        [departments, setDepartments] = useState<Department[]>([]),
        [logo, setLogo] = useState(logoDefault),
        onCollapse = (collapser: boolean) => {
            setCollapsedMenu(collapser)
            setLogo(collapser ? collapseLogo : logoDefault)
        }

    useEffect(() => {
        //load departments for navigation
        const loadDepartments = () => {
            new Query().getDepartments().then((departments: Department[]) => setDepartments(departments))
        }
        loadDepartments()
    }, [])

    return (
        <Sider collapsible collapsed={collapsedMenu} onCollapse={onCollapse}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" ><Link to='/' title="Fickersons"><img src={logo} alt="Fickersons" /></Link></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="home" icon={<CustomIcon iconName="HomeOutlined" allIcons={allIcons} />}>
                    <Link to='/' title="home" data-collapsed={collapsedMenu}>Home</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<CustomIcon iconName="TeamOutlined" allIcons={allIcons} />} title="Teams">
                    {departments.map((depart: Department, i: number) => {
                        return <Menu.Item key={i}
                            icon={<CustomIcon iconName={depart.DepartmentIcon ?? 'QuestionOutlined'} allIcons={allIcons} />}
                        ><Link title={depart.DepartmentName} to={{
                            pathname: "/employees",
                            state: { id: depart.id },
                            hash: `#${depart.DepartmentName}`
                        }} >{depart.DepartmentName}</Link></Menu.Item>
                    })}
                </SubMenu>
                <Menu.Item key="search" icon={<CustomIcon iconName="SearchOutlined" allIcons={allIcons} />} >
                    <Link data-collapsed={collapsedMenu} title="search" to={{
                        pathname: "/search",
                        hash: "#Search",
                        state: {}
                    }} >Search</Link>
                </Menu.Item>
                <Menu.Item key="form" icon={<CustomIcon iconName="FormOutlined" allIcons={allIcons} />} >
                    <Link data-collapsed={collapsedMenu} title="admin" to={{
                        pathname: "/admin",
                        state: {}
                    }} >Admin</Link>
                </Menu.Item>
                <Menu.Item key="git" icon={<CustomIcon iconName="GithubOutlined" allIcons={allIcons} />} >
                    <a data-collapsed={collapsedMenu} href="https://github.com/afick/hr-demo" target="_blank" rel="noreferrer" >Git</a>
                </Menu.Item>
            </Menu>

        </Sider>
    )
}
export default Navigation
