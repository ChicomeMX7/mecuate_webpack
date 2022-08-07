import React, { ComponentProps } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MenuPannelRoot, CornerName } from './MenuPannel.styles'
import { Sidebar } from '@/components/Sidebar'
import { Text } from '@/components/Text'

type MenuPannelOwnProps = ComponentProps<typeof MenuPannelRoot>
export type MenuPannelProps = MenuPannelOwnProps & {
    _name_?: string
    onChangePage: CallableFunction
}

export const MenuPannel = ({ onChangePage }: MenuPannelProps) => {
    
    
    const handlePage = (page: any) => {
        console.log('page', page)
        if (page === '/') onChangePage(true)
        else onChangePage(false)
        return page
    }

    return (
        <MenuPannelRoot>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/mecuate" element={'mecuate'} />
                    <Route path="/Account" element={'account'} />
                    <Route path="/Academy" element={'academy'} />
                    <Route path="/Services" element={'services'} />
                    <Route path="/DocuWeb" element={'docuweb'} />
                    <Route path="/Projects" element={'projects'} />
                    <Route path="/Publications" element={'publications'} />
                    <Route path="/Contact" element={'contact'} />
                </Routes>
            </Router>
            <CornerName>
                <Text size={'big'} variant={'green'}>
                    mecuate
                </Text>
            </CornerName>
        </MenuPannelRoot>
    )
}
