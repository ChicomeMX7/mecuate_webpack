import React from 'react';
import {Icon} from '@/components/Icon'

export const SidebarData = [
  {
    title: 'Mecuate',
    path: '/home',
    icon: <Icon size={'small'} icon={'home'} />,
    iconClosed: <Icon size={'small'} icon={'arrow-drop-down'} />,
    iconOpened: <Icon size={'small'} icon={'arrow-drop-up'} />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <Icon size={'small'} icon={'terminal'} />,
    iconClosed: <Icon size={'small'} icon={'arrow-drop-down'} />,
    iconOpened: <Icon size={'small'} icon={'arrow-drop-up'} />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Icon size={'small'} icon={'plant-pot'} />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Icon size={'small'} icon={'warning'} />,
  }
];

/* 
    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <Icon size={'small'} icon={'rain'} />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <Icon size={'small'} icon={'cloudy'} />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <Icon size={'small'} icon={'sunny'} />,
      }
    ]
*/