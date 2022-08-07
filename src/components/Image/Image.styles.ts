import { styled } from '@/stitches.conf'

export const ImageRoot = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})

export const ImageSrc = styled('img', {
    display: 'block',
    position: 'relative',
    transition: 'all 100ms ease-out',
    objectFit: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',

    variants: {
        hover: {
            scales: {
                '&:hover': {
                    transform: 'Scale(1.05)',
                },
            },
            fades: {
                '&:hover': {
                    opacity: '0.95',
                },
            },
        },
    },
})
