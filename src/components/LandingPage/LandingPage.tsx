import React from 'react'
import { LandingPageRoot } from './LandingPage.styles'
import { Image } from '@/components/Image'

export const LandingPage = ({}) => {
    return (
        <LandingPageRoot>
            <Image src={'landing:landingPage.poster'} />            
        </LandingPageRoot>
    )
}
