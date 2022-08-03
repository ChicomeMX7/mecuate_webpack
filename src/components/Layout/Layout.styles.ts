import { styled } from '@/stitches.conf'

export const LayoutContainer = styled('div', {
    margin: 0,
    border: 'none',
    background: '$m_mate',
    width: '100vw',
    height: '100vh',
})

export const CornerName = styled('span', {
    fontFamily: 'fangsong',
    fontSize: '$big',
    color: '$c_verde',
    position: 'absolute',
    left: '$4',
    top: '$4',
    width: '100px',
    height: '80px',
    border: '1px dashed black',
})
