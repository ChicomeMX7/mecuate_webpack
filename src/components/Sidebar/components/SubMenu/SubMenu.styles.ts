import { styled } from '@/stitches.conf'
import { Link } from 'react-router-dom'


export const SidebarLink = styled(Link, {
    display: 'flex',
    color: '$text',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    listStyle: 'none',
    height: '50px',
    textDecoration: 'none',
    fontSize: '18px',

    '&:hover': {
        background: '$main_back2',
        borderRight: '2px solid $main_accent',
        cursor: 'pointer',
    },
})

export const SidebarLabel = styled('span', {
    marginLeft: '16px',
})

export const DropdownLink = styled(Link, {
    background: '$main_back2',
    height: '48px',
    paddingLeft: '3rem',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '$text',
    fontSize: '$normal',

    '&:hover': {
        background: '$main_back3',
        cursor: 'pointer',
    },
})
