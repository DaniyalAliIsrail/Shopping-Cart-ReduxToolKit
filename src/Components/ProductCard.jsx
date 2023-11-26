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
const ProductCard = () => {
        return (
                <MDBContainer>
                        <MDBRow className='mb-3 pt-5' >
                        <MDBCol size='4'>
                        <MDBCard>
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                                <a>
                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                </a>
                                        </MDBRipple>
                                        <MDBCardBody>
                                                <MDBCardTitle>Card title</MDBCardTitle>
                                                <MDBCardText>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn href='#'>Button</MDBBtn>
                                        </MDBCardBody>
                                </MDBCard>
        </MDBCol>
        <MDBCol size='4'>
                        <MDBCard>
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                                <a>
                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                </a>
                                        </MDBRipple>
                                        <MDBCardBody>
                                                <MDBCardTitle>Card title</MDBCardTitle>
                                                <MDBCardText>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn href='#'>Button</MDBBtn>
                                        </MDBCardBody>
                                </MDBCard>
        </MDBCol>
        <MDBCol size='4'>
                        <MDBCard>
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                                <a>
                                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                </a>
                                        </MDBRipple>
                                        <MDBCardBody>
                                                <MDBCardTitle>Card title</MDBCardTitle>
                                                <MDBCardText>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn href='#'>Button</MDBBtn>
                                        </MDBCardBody>
                                </MDBCard>
        </MDBCol>
                                
                        </MDBRow>
                </MDBContainer>
        )
}

export default ProductCard