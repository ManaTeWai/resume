import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css'
// import { Link } from "react-router-dom";

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect className="navig" expand="lg">
                <Navbar.Brand><Link to="/" className="logo"><h2 className="link">Mana Nedau</h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="NavItems">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav__inner"><Link to="steck" className="link">Заполнить заявку</Link></Nav.Link>
                        <Nav.Link className="nav__inner"><Link to="/request" className="link">Все заявки</Link></Nav.Link>
                    </Nav>  
                    <Nav className="buttons">                     
                        <Button variant="light" className="nav__inner nav__button"><Link to="/wip" className="nav_link">Регистрация</Link></Button>
                        <Button variant="light" className="nav__inner nav__button"><Link to="/sign_in" className="nav_link">Вход</Link></Button>
                    </Nav>
                </Navbar.Collapse>             
            </Navbar>
        </>
    );
}