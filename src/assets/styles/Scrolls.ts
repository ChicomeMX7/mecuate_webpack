import { globalCss } from '@/stitches.conf'

export const scrollStyles = globalCss({
    '*': {
        'scrollbar-width': 'thin',
        'scrollbar-height': 'thin',
        'scrollbar-color': '#fbf2c4 #008585',
    },
    '*::-webkit-scrollbar': {
        width: '3px',
        height: '3px',
    },

    '*::-webkit-scrollbar-track': {
        background: '$c_crema',
        width: '3px',
        height: '3px',
    },
    '*::-webkit-scrollbar-thumb': {
        background: '$c_turquesa',
        borderRadius: '2px',
        width: '3px',
        height: '3px',
    },
})
