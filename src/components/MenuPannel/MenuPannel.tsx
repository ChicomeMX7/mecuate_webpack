import React, { ComponentProps } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MenuPannelRoot } from './MenuPannel.styles'
import { Sidebar } from '@/components/Sidebar'


type MenuPannelOwnProps = ComponentProps<typeof MenuPannelRoot>
export type MenuPannelProps = MenuPannelOwnProps & {
    _name_?: string
}

export const MenuPannel = ({}: MenuPannelProps) => {
    return (
        <MenuPannelRoot>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/reports" element={'Reports'} />
                    <Route path="/reports/reports1" element={'ReportsOne'} />
                    <Route path="/reports/reports2" element={'ReportsTwo'} />
                    <Route path="/reports/reports3" element={'ReportsThree'} />
                    <Route path="/team" element={'Team'} />
                </Routes>
            </Router>
        </MenuPannelRoot>
    )
}
