import React, { ComponentProps } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { LayoutContainer, CornerName } from './Layout.styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/LandingPage'

type LayoutOwnProps = ComponentProps<typeof LayoutContainer>
export type LayoutProps = LayoutOwnProps & {
    _name_?: string
}

export const Layout = ({}: LayoutProps) => {
    return (
        <>
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
            <CornerName />
        </>
    )
}
