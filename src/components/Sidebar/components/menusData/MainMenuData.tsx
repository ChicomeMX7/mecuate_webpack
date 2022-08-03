import React from 'react';
import {Icon} from '@/components/Icon'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <Icon size={'small'} icon={'home'} />,
    iconClosed: <Icon size={'small'} icon={'arrow-drop-down'} />,
    iconOpened: <Icon size={'small'} icon={'arrow-drop-up'} />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <Icon size={'small'} icon={'person'} />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <Icon size={'small'} icon={'coin'} />,
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <Icon size={'small'} icon={'terminal'} />,
    iconClosed: <Icon size={'small'} icon={'arrow-drop-down'} />,
    iconOpened: <Icon size={'small'} icon={'arrow-drop-up'} />,

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
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Icon size={'small'} icon={'plant-pot'} />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <Icon size={'small'} icon={'group'} />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon size={'small'} icon={'chat'} />,

    iconClosed: <Icon size={'small'} icon={'arrow-drop-down'} />,
    iconOpened: <Icon size={'small'} icon={'arrow-drop-up'} />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <Icon size={'small'} icon={'mail'} />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <Icon size={'small'} icon={'chat'} />,
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Icon size={'small'} icon={'warning'} />,
  }
];