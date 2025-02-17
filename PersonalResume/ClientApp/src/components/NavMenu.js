import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Jobs } from './Jobs';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Carlos Valeriano</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <NavItem>
                                <ul className="navbar-nav flex-grow">
                                    <NavLink tag={Link} className="text-dark" to="/projects"><i class="fas fa-briefcase icons"></i>Projects</NavLink>
                                </ul>
                            </NavItem>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

/*
 * 
 * 
 * 
                               
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/jobs"><i class="fas fa-user-tie icons"></i>Jobs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/education"><i class="fas fa-school icons"></i>Education</NavLink>
                                </NavItem>
                           
                            */