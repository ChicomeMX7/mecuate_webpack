import { globalCss } from '@stitches/react'

export const gradientStyles = globalCss({
    '*': {
        'scrollbar-width': 'thin',
        'scrollbar-color': 'blue orange',
    },
    '*::-webkit-scrollbar': {
        width: '12px',
    },

    '*::-webkit-scrollbar-track': {
        background: 'orange',
    },
    '*::-webkit-scrollbar-thumb': {
        background: 'blue',
        borderRadius: '20px',
        border: '3px solid orange',
    },
    'grad-greenblue': {
        backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    },
})
