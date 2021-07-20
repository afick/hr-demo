import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { Header } from 'antd/lib/layout/layout'
export const HeaderComp = (props: any) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(props.collapsedMenu ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.onCollapse,
      })}
    </Header>
  )
}
