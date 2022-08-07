import React, { ComponentProps, useState } from 'react'
import { LayoutContainer } from './Layout.styles'
import { MenuPannel } from '@/components/MenuPannel'
import { LandingPage } from '@/components/LandingPage'

type LayoutOwnProps = ComponentProps<typeof LayoutContainer>
export type LayoutProps = LayoutOwnProps & {
    _name_?: string
}

export const Layout = ({}: LayoutProps) => {
    const [displayLanding, setDisplayLanding] = useState(true)

    return (
        <>
            {displayLanding && <LandingPage />}
            <MenuPannel onChangePage={setDisplayLanding} />
        </>
    )
}
