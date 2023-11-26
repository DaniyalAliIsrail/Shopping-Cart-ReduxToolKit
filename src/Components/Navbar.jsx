import React from 'react'
import {
        MDBContainer,
        MDBNavbar,
        MDBNavbarBrand,
        MDBBtn,
        MDBInputGroup
} from 'mdb-react-ui-kit';
const Navbar = () => {
        return (
                <MDBNavbar light bgColor='light'>
                        <MDBContainer fluid>
                                <div className='d-flex align-items-center'>
                                        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                                        <div>All Products</div>
                                </div>

                                <MDBBtn color='dark'>
                                        Dark
                                </MDBBtn>
                        </MDBContainer>
                </MDBNavbar>
        )
}
export default Navbar