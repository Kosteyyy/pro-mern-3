import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Navbar, Nav, NavItem, NavDropdown,
	MenuItem, Glyphicon, Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import IssueAddNavItem from './IssueAddNavItem.jsx';

import Contents from './Contents.jsx';

function NavBar() {
	return (
		<Navbar fluid>
			<Navbar.Header>
				<Navbar.Brand>Issue Tracker</Navbar.Brand>
			</Navbar.Header>
			<Nav>
				<LinkContainer exact to="/">
					<NavItem>Home</NavItem>
				</LinkContainer>
				<LinkContainer to="/issues">
					<NavItem>Issue List</NavItem>
				</LinkContainer>
				<LinkContainer exact to="/report">
					<NavItem>Report</NavItem>
				</LinkContainer>
			</Nav>
			<Nav pullRight>
				<IssueAddNavItem />
        <NavDropdown
        	id="user-dropdown"
        	title={<Glyphicon glyph="option-vertical" />}
        	noCaret
        >
	        <MenuItem>About</MenuItem>
        </NavDropdown>
			</Nav>
		</Navbar>
	);
}

function Footer() {
	return (
		<small>
		<hr />
			<p className="text-center">
				Full source code available at this
				{' '}
				<a href="https://github.com/Kosteyyy/pro-mern-3">
					GitHub repository
				</a>
			</p>
		</small>
	);
}

export default function Page() {
	return (
		<div>
			<NavBar />
			<Grid fluid>
				<Contents />
			</Grid>
			<Footer />
		</div>
	);
}