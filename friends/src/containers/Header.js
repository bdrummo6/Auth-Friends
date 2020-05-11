import React, { useState } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container className='header'>
			<Navbar color='faded' light>
				<NavbarBrand className='mr-auto'><Link className='links' to='/'>Home for your Friends</Link></NavbarBrand>
				<NavbarToggler id='toggler' className='.navbar-light span.navbar-toggler-icon' style={{ border: '1px solid silver' }} onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink onClick={toggle}><Link className='links' to='/'>Home</Link></NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={toggle}><Link className='links' to='/login'>Login</Link></NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={toggle}><Link className='links' to='/form'>New Friend Form</Link></NavLink>
						</NavItem>
						<NavItem>
							<NavLink onClick={toggle}><Link className='links' to='/friends'>Friends List</Link></NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
};

export default Header;