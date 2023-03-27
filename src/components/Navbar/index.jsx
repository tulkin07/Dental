import React from 'react'
import { Box, Container, Filter, Icons, Search, Select, User, Role } from './style'
import user from '../../assets/images/user.jpg'
export default function Navbar() {
  return (
    <Container>
      <Container.Left>
        <Icons.Bars />
        <Filter>
          <Select>
            <option value="..">All Categories</option>
            <option value="..">All Categories 2</option>
            <option value="..">All Categories 3</option>
          </Select>
          <Search placeholder='Search anything...' />
          <Search.Icon>
            <Icons.Search />
          </Search.Icon>
        </Filter>
      </Container.Left>
      <Container.Right>
        <Box>
          <Box.Pill color="#ffa330">1</Box.Pill>
          <Icons.Ball />
        </Box>
        <Box>
          <Box.Pill color="rgb(58 183 100)">1</Box.Pill>
          <Icons.List />
        </Box>
        <Box>
          <Box.Pill color="#555">1</Box.Pill>
          <Icons.Message />
        </Box>
        <User>
          <User.Img src={user} />
          <div>
            <User.Name>
              Dr.Rashed Seth fwfewfewfwfwfwfwf
            </User.Name>
            <Role>
              <option >Admin</option>
            </Role>
          </div>
        </User>
      </Container.Right>
    </Container>
  )
}
