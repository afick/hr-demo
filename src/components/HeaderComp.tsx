import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Header } from 'antd/lib/layout/layout'

interface HeaderCompProps {
  collapsedMenu: boolean
  onCollapse: () => void
}

export const HeaderComp = (props: HeaderCompProps) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {/* this will show open and close on the menu */}
      {React.createElement(props.collapsedMenu ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.onCollapse,
      })}
    </Header>
  )
}
