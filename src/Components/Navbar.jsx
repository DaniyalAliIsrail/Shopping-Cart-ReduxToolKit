import React from 'react'
import {
        MDBContainer,
        MDBNavbar,
        MDBNavbarBrand,
        MDBBtn,
        MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Navbar = () => {
        return (
                <MDBNavbar light bgColor='light'>
                        <MDBContainer fluid>
                                <div className='d-flex align-items-center'>
                                        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                                        <div>
                                        <Link to="/">ALL PRODUCTS</Link>
                                        </div>
                                </div>

                                <MDBBtn color='dark'>
                                        
                                        <Link to="/cart">cart(0)</Link>
                                </MDBBtn>
                        </MDBContainer>
                </MDBNavbar>
        )
}
export default Navbar