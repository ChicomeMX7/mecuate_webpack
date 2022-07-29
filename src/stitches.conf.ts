import { createStitches } from '@stitches/react'

import type * as Stitches from '@stitches/react'

export type { VariantProps } from '@stitches/react'

export const { styled, css, theme, config, getCssText, globalCss, keyframes } =
    createStitches({
        theme: {
            colors: {
                c_marron: '#c7522a',
                c_beige: '#e5c185',
                c_crema: '#fbf2c4',
                c_verde: '#74a892',
                c_turquesa: '#008585',
                m_mate: '#f0ead2',
                m_verdi: '#d5e198',
                m_main: '#8da649',
                m_cafe: '#9a7152',
                m_tierra: '#5a3c2a',
                text: '#232627',
                text_li: '#c1cacd',
            },
            fonts: {
                untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
                mono: 'Söhne Mono, menlo, monospace',
            },
            space: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '24px',
                6: '32px',
                7: '48px',
                8: '64px',
                9: '80px',
            },
            sizes: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '24px',
                6: '32px',
                7: '48px',
                8: '64px',
                9: '80px',
            },
            fontSizes: {
                small: '10px',
                normal: '12px',
                regular: '14px',
                big: '16px',
                title: '22px',
                head: '36px',
                bigger: '62px',
            },
            radii: {
                1: '4px',
                2: '6px',
                3: '8px',
                4: '12px',
                round: '50%',
                pill: '9999px',
            },
            zIndices: {
                1: '100',
                2: '200',
                3: '300',
                4: '400',
                max: '999',
            },
        },
        media: {
            bp1: '(min-width: 520px)',
            bp2: '(min-width: 900px)',
            bp3: '(min-width: 1200px)',
            bp4: '(min-width: 1800px)',
            motion: '(prefers-reduced-motion)',
            hover: '(any-hover: hover)',
            dark: '(prefers-color-scheme: dark)',
            light: '(prefers-color-scheme: light)',
        },
        utils: {
            bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
                backgroundColor: value,
            }),
            bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
                boxShadow: value,
            }),
            ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
                overflowX: value,
            }),
            oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
                overflowY: value,
            }),
            pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
                pointerEvents: value,
            }),
            userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
                WebkitUserSelect: value,
                userSelect: value,
            }),
            size: (value: Stitches.PropertyValue<'width'>) => ({
                width: value,
                height: value,
            }),
        },
    })

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        fontSize: '$normal',
    },
    body: {
        margin: 0,
        padding: 0,
        letterSpacing: '0px',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
})

export type CSS = Stitches.CSS<typeof config>
export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
