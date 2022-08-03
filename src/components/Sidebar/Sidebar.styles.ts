import { styled } from '@/stitches.conf'
import { Link } from 'react-router-dom'


export const SidebarContainer = styled('div', {})

export const Nav = styled('div', {
    background: 'transparent',
    height: '72px',
    width: '72px',
    display: 'flex',
    right:0,
    top:0,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
})

export const NavIcon = styled('a', {
    marginLeft: '2rem',
    fontSize: '2rem',
    height: '80px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
})
const Blur = "blur(7px)"

export const SidebarNav = styled('nav', {
    background: '$main_back_fade4',
    width: '250px',
    height: '100vh',
    display: 'flex',
    border: '1px solid $main_accent_fade4',
    borderTopLeftRadius: '$4',
    borderBottomLeftRadius: '$4',
    boxShadow: '$level4',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    transition: '350ms',
    zIndex: 10,
    variants: {
        panLeft: {
            true: {
                right: 0,
            },
            false: {
                right: '-100%',
            },
        },
        blured:{
            true:{
                backdropFilter: Blur
            }
        }
    },
})

export const SidebarWrap = styled('div', {
    width: '100%',
})
