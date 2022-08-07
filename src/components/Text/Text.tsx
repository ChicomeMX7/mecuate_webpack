import {ComponentProps} from 'react'
import { styled } from '@/stitches.conf'

export const Text = styled('span',{
    color: '$text',
    fontFamily: '$sans',

    variants:{
        font:{
            sans:{
                fontFamily: '$sans',
            },
            serif:{
                fontFamily: '$serif',
            }
        },
        size:{
            small:{
                fontSize: '$small'
            },
            regular:{
                fontSize: '$regular'
            },
            normal:{
                fontSize: '$normal'
            },
            mid:{
                fontSize: '$middle'
            },
            header:{
                fontSize: '$head'
            },
            big:{
                fontSize: '$big'
            },
            title:{
                fontSize: '$title'
            },
            max:{
                fontSize: '$bigger'
            }
        },
        weight:{
            thin:{
                fontWeight: '100'
            },
            200:{
                fontWeight: '200'
            },
            mid:{
                fontWeight: '300'
            },
            regular:{
                fontWeight: '400'
            },
            bold:{
                fontWeight: '600'
            },
            fat:{
                fontWeight: '800'
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
    },

    defaultVariants:{
        size: 'regular',
        font: 'sans'
    }
})

Text.displayName = 'Text'

export type TextProps = ComponentProps<typeof Text>
