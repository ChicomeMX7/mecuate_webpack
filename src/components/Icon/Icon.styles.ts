import { styled } from '@/stitches.conf'
import { ComponentProps } from 'react'

export const IconRoot = styled('svg', {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    flexGrow: 0,

    variants: {
        variant: {
            main: {
                fill: '$main_accent',
            },
        },
        size: {
            small: {
                width: '24px',
                height: '24px',
            },
            medium: {
                width: '32px',
                height: '32px',
            },
            big: {
                width: '40px',
                height: '40px',
            },
        },
    },
})

export type IconProps = ComponentProps<typeof IconRoot>
