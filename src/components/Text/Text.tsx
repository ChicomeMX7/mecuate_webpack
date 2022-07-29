import {ComponentProps} from 'react'
import { styled } from '@/stitches.conf'

export const Text = styled('span',{
    color: '$text',
    fontFamily: '$mono',
    fontSize: '$regular',

    variants:{
        size:{
            small:{
                fontSize: '$small'
            },
            header:{
                fontSize: '$head'
            },
            title:{
                fontSize: '$title'
            },
            max:{
                fontSize: '$bigger'
            }
        },
        variant:{
            default:{
                color: '$text'
            },
            light:{
                color: '$text_li'
            },
            green:{
                color: '$c_verde'
            },
        }
    }
})

Text.displayName = 'Text'

export type TextProps = ComponentProps<typeof Text>
