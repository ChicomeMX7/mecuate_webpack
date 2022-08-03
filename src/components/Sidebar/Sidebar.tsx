import React, { useState, ComponentProps } from 'react'
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './Sidebar.styles'
import { Icon } from '@/components/Icon'
import { SidebarData } from './components/menusData'
import { SubMenu } from './components/SubMenu'

type SidebarOwnProps = ComponentProps<typeof Nav>
export type SidebarProps = SidebarOwnProps & {
    _name_?: string
}


export const Sidebar = ({}: SidebarProps) => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Nav>
                <NavIcon onClick={showSidebar}>
                    <Icon icon={'menu'} />
                </NavIcon>
            </Nav>
            <SidebarNav panLeft={sidebar} blured={true}>
                <SidebarWrap>
                    <NavIcon onClick={showSidebar}>
                        <Icon icon={'close'} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu to={item.path} item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}
