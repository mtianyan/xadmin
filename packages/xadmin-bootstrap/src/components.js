import React from 'react'
import { Row, Col, Breadcrumb, Card, Nav, Navbar, Container } from 'react-bootstrap'

const MenuItem = ({ eventKey, onSelect, children, icon, title, ...props }) => (
  <Nav.Item {...props} >
    <Nav.Link eventKey={eventKey} onSelect={onSelect}>{icon} {title || children}</Nav.Link>
  </Nav.Item>
)

const Menu = ({ onSelect, children, icon, title, ...props }) => (
  <Nav {...props} >
    {children}
  </Nav>
)

export default {
  Menu,
  'Menu.Item': MenuItem
}
