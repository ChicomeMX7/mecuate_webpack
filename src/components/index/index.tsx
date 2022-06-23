///<reference  path="../../../src/typings/main.d.ts"/>

import React from 'react'
import ReactDom from 'react-dom'
import '../../styles/main.sass'
import { Sample } from './s'
import { MecuateApiProvider,baseConfig } from '../../api/network'

const target = document.getElementById('root') || document.body

const __a = MecuateApiProvider.patch('h', {
  data: ['hello from frontend', 45, 78],
  accept: baseConfig.accept,
  type: baseConfig.type
} )

// const op = __a

console.log('__a', __a)

ReactDom.render(<Sample />, target)

/* 
TODO:
* https://github.com/mifi/react-lottie-player
*/
