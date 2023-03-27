import React from 'react'
import { Box, Button, Container, Filter, Icons } from './style'
export default function Header({ title }) {
  return (
    <Container>
      <Container.Category>
        <Container.Title>{title}</Container.Title>
        <Filter>
          <Filter.Input placeholder="Filter..." />
          <Box>
            <Icons.Search />
          </Box>
        </Filter>
      </Container.Category>
      <Button> <Icons.Plus /> Add New Patient</Button>
    </Container>
  )
}
