import React, { ComponentProps } from 'react'

        import { MenuPannelContainer } from './MenuPannel.styles'

type MenuPannelOwnProps = ComponentProps<typeof MenuPannelContainer>
export type MenuPannelProps = MenuPannelOwnProps & {
_name_?: string
}

export const MenuPannel = ({}: MenuPannelProps) => {

	return(
		<MenuPannelContainer>
		</MenuPannelContainer>
	)
}
