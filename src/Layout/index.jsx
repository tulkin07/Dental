import React from 'react'
import {Wrapper} from './style.js'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default function Layout() {
  return (
    <Wrapper>
        <Sidebar/>
        <Main/>
    </Wrapper>
  )
}
