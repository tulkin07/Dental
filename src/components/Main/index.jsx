import React from 'react'
import Navbar from '../Navbar'
import { Container } from './style'
import Content from '../Content'

export default function Main() {
    return (
        <Container>
            <Navbar/>
            <Content/>
        </Container>
    )
}
