import React, { useEffect } from 'react'
import {
        MDBContainer,
        MDBNavbar,
        MDBNavbarBrand,
        MDBBtn,
        MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { gettotalCart } from '../features/cartSlice';
const Navbar = () => {
        const totalQuantity = useSelector((state) => {
                console.log( state.allcarts.totalQuantity);
                console.log( "totalquantity",state.allcarts.totalQuantity);
                return  state.allcarts.totalQuantity;
              });

        //       const cart = useSelector((state) => {
        //         console.log(state.allcarts);
        //         return state.allcarts.cart;
        //       });

        //       const dispatch = useDispatch();
        //       useEffect(()=>{
        //         dispatch(gettotalCart())
        //       },[cart])

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
                                        
                                        <Link to="/cart">cart:   {totalQuantity}</Link>
                                </MDBBtn>
                        </MDBContainer>
                </MDBNavbar>
        )
}
export default Navbar