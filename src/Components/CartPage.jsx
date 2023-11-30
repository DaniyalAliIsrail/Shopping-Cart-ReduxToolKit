import React from 'react'
import "../Components/cartpage.modular.css"
import { useSelector } from 'react-redux'

const CartPage = () => {


  const cart = useSelector((state) => {
    console.log(state.allcarts);
    return state.allcarts;
  });
  const totalQuantity = useSelector((state) => {
    console.log( state.allcarts.totalQuantity);
    return  state.allcarts.totalQuantity;
  });
  const totalPrice = useSelector((state) => {
    console.log(state.allcarts.totalPrice);
    return state.allcarts.totalPrice;
  });
 





  return (
    <>
      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">


              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart items</h5>
                  </div>
                  {cart?.items?.map((item) => (
                    <div key={item.id} className="card-body">

                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light">
                            <img
                              src={item.img}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>
                              {item.title}
                            </strong>
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            title="Remove item"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"


                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value="110"
                                type="number"
                                className="form-control"
                                onChange={() => null}
                              />
                              <label className="form-label" >
                                Quantity
                              </label>
                            </div>

                            <button
                              className="btn btn-primary px-3 ms-2"

                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>
                              Price : {item.price}
                            </strong>
                          </p>
                        </div>
                        <hr className="my-4" />
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* 
summary section */}
              <div className="col-md-4">

                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total Quantity </strong>
                        </div>
                        <span>
                          <strong>
                          { totalQuantity } 
                          </strong>
                        </span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          
                          <strong>Total Price :</strong>
                        </div>
                        <span>
                          <strong>
                          {totalPrice}
                          </strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    </>
  )
}

export default CartPage