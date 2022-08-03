import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { gradientStyles } from '@/assets/styles/Gradients'

const c = {
    c_marron: '#c7522a',
    c_beige: '#e5c185',
    c_crema: '#fbf2c4',
    c_verde: '#74a892',
    c_turquesa: '#008585',
    m_mate: '#f0ead2',
    m_verdi: '#d5e198',
    m_main: '#54a707',
    m_cafe: '#9a7152',
    m_tierra: '#5a3c2a',
    text: '#232627',
    text_li: '#c1cacd',

    main_back: '#f3edea',
    main_back_fade4: '#f3edea38',
    main_accent: '#74a892',
    main_accent_fade2: '#74a89220',
    main_accent_fade4: '#74a89240',
    main_accent_fade6: '#74a89260',
    shadow_color: '#52606047',
}

export const { styled, css, theme, config, getCssText, globalCss, keyframes } =
    createStitches({
        theme: {
            colors: {
                ...c,
            },
            fonts: {
                untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
                mono: 'Söhne Mono, menlo, monospace',
            },
            shadows: {
                level1: `0px 2px 16px 0px ${c.shadow_color}`,
                level2: `0px 5px 24px 3px ${c.shadow_color}`,
                level3: `0px 10px 32px 4px ${c.shadow_color}`,
                level4: `0px 10px 32px 4px ${c.shadow_color}`,
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

export const gradients = gradientStyles

export const globalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Catamaran, sans-serif',
            src: 'url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;600;800&display=swap")',
        },
    ],
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        fontSize: '$normal',
        fontFamily: 'Catamaran, sans-serif',
        color: '$text'
    },
    body: {
        margin: 0,
        padding: 0,
        letterSpacing: '0px',
        background: '$main_back',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
})

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>
export type ColorTokens = keyof typeof theme.colors
export type SizeTokens = keyof typeof theme.sizes
export type SpaceTokens = keyof typeof theme.space
