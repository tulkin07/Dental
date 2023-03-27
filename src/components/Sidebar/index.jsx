import React from 'react'
import { Container, Menu, Title, Icons } from './style'
import { NavLink, Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <Container>
      <Title>
        <Link to="/dashboard" >    S31 Admin Panel</Link>
      </Title>
      <Menu>
        <Menu.Item>
          <NavLink to="/dashboard" href="#"> <Icons.Right /> Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/appointmentList"}> <Icons.Right /> Appointment List</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/doctorList"}> <Icons.Right /> Doctor List</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/patientList"}> <Icons.Right /> Patient List</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/transCations"} className='' > <Icons.Right /> Transcations</NavLink>
        </Menu.Item>
      </Menu>
    </Container>
  )
}
