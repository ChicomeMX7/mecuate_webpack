import React from 'react'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'

export const SidebarData = [
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Mecuate
            </Text>
        ),
        path: '/mecuate',
        icon: <Icon color={'text_li'} size={'small'} icon={'home'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Account
            </Text>
        ),
        path: '/account',
        icon: <Icon color={'text_li'} size={'small'} icon={'person'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Academia
            </Text>
        ),
        path: '/Academy',
        icon: <Icon color={'text_li'} size={'small'} icon={'abc'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Servicios
            </Text>
        ),
        path: '/Services',
        icon: <Icon color={'text_li'} size={'small'} icon={'recycling'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                DocuWeb
            </Text>
        ),
        path: '/Docuweb',
        icon: <Icon color={'text_li'} size={'small'} icon={'headset'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Proyectos
            </Text>
        ),
        path: '/Projects',
        icon: <Icon color={'text_li'} size={'small'} icon={'bee'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Publicaciones
            </Text>
        ),
        path: '/Publications',
        icon: <Icon color={'text_li'} size={'small'} icon={'quiz'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
    {
        title: (
            <Text size={'mid'} font={'sans'} weight={'bold'}>
                Contacto
            </Text>
        ),
        path: '/Contact',
        icon: <Icon color={'text_li'} size={'small'} icon={'chat'} />,
        iconClosed: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-down'} />,
        iconOpened: <Icon color={'text_li'} size={'small'} icon={'arrow-drop-up'} />,
    },
]

/* 
    subNav: [
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports</Text>,
        path: '/reports/reports1',
        icon: <Icon color={'text_li'}size={'small'} icon={'rain'} />,
        cName: 'sub-nav'
      },
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports 2</Text>,
        path: '/reports/reports2',
        icon: <Icon color={'text_li'}size={'small'} icon={'cloudy'} />,
        cName: 'sub-nav'
      },
      {
        title: <Text size={'mid'} font={'sans'} weight={'bold'}>Reports 3</Text>,
        path: '/reports/reports3',
        icon: <Icon color={'text_li'}size={'small'} icon={'sunny'} />,
      }
    ]
*/
