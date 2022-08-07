import React, { ComponentProps } from 'react'
import { IconRoot } from './Icon.styles'
import { IconNames } from './IconNames'

type IconOwnProps = ComponentProps<typeof IconRoot>
export type IconProps = IconOwnProps & {
    _name_?: string
    icon: IconNames
    label?: string
    color?: string
    css?: string
    size?: string
}

export const Icon = ({ icon, label, color, css, size }: IconProps) => {
    return (
        <IconRoot
            css={{
                fill: color ? `$${color}` : '$m_main',
                ...(css as any),
            }}
            role={label ? 'img' : 'presentation'}
            size={size ? size : 'small'}
            viewBox={'0 0 48 48'}
        >
            {label && <title>{label}</title>}
            <use xlinkHref={`/src/assets/icons/icon-sprite.svg#${icon}`}></use>
        </IconRoot>
    )
}
