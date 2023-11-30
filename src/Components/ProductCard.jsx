import React from 'react'
import {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImage,
        MDBBtn,
        MDBRipple,
        MDBContainer,
        MDBRow,
        MDBCol
} from 'mdb-react-ui-kit';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = () => {
        const items = useSelector((state) => {
                console.log(state.allcarts.items);
                console.log(state.allcarts);
        
                return state.allcarts.items;
            });
        const dispatch = useDispatch()    
            

        return (

                <MDBContainer>
                        <MDBRow className='mb-3 pt-5' >
                                {
                                        items.map((item , i)=>(
                                                <MDBCol size='4' key={item.id}>
                                                <MDBCard>
                                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                                <MDBCardImage src={item.img} fluid alt='...' />
                                                                <a>
                                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                                </a>
                                                        </MDBRipple>
                                                        <MDBCardBody>
                                                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                                                <MDBCardText>
                                                                        Price : {item.price}
                                                                </MDBCardText>
                                                                <MDBBtn href='#' onClick={()=> dispatch(addToCart(item))}>
                                                                        ADD TO CART
                                                                </MDBBtn>
                                                        </MDBCardBody>
                                                </MDBCard>
                                        </MDBCol>
                                        ))
                                }
                                         
                        </MDBRow>
                </MDBContainer>
        )
}

export default ProductCard