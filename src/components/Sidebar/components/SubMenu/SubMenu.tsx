import React, { ComponentProps, useState } from 'react'
import { SidebarLink, SidebarLabel, DropdownLink } from './SubMenu.styles'

type SubMenuOwnProps = ComponentProps<typeof SidebarLink>
export type SubMenuProps = SubMenuOwnProps & {
    _name_?: string
    item: subMenuItem | any
}
export type subMenuItem = {
    title: string
    path: string
    icon: Element
    iconClosed?: Element
    iconOpened?: Element
    subNav?: {
        title: string
        path: string
        icon: Element
        cName: string
    }[]
}

export const SubMenu = ({ item }: SubMenuProps) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <>
                    <div>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </div>
                    <div>
                        {item.subNav && subnav ? item.iconOpened : (item.subNav ? item.iconClosed : null)}
                    </div>
                </>
            </SidebarLink>
            {item.subNav &&
                subnav &&
                item.subNav.map((_item: subMenuItem, index: number) => {
                    return (
                        <DropdownLink to={_item.path} key={index}>
                            <>
                                {_item.icon}
                                <SidebarLabel>{_item.title}</SidebarLabel>
                            </>
                        </DropdownLink>
                    )
                })}
        </>
    )
}
