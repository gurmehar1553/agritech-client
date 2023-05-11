import React, { useContext } from 'react'
import './Product.css'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../../context/StoreContext';
import { useUser } from '../../../context/UserContext';
import CurrencyIconComponent from '../../../assets/widgets/CurrencyIconComponent';
import shoppingCart from '../../../assets/icons/shopping_cart.svg'

function Product(props) {
    const { theme } = useUser()
    const { addToCart } = useContext(StoreContext)
    const navigate = useNavigate()
    const INR = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <>
        {/* <div className='col-10 col-lg-4 row p-2 justify-content-center product-responsive'>
            <div className='col-10 col-sm-4 col-lg-10'>
                <img src={props.product.imgUrl} alt={props.product.title} />
            </div>
            <div className='row col-10 col-sm-8 col-lg-10 flex-column justify-content-center align-items-center'>
                <h5 onClick={() => { navigate("/agristore/product/" + props.product._id) }}>{props.product.title}</h5>
                <span>Price: <CurrencyIconComponent size='30' adjustY={'-10%'} /><span className="price">{INR.format(props.product.price).replace("₹", "KCO ")}</span>/-</span>
                <div className="d-flex justify-content-around flex-column"></div>
                <div>
                    <Button variant="warning m-3" onClick={() => { addToCart(props.product) }}><img src={shoppingCart} alt='' /> Add To Cart</Button>
                    <Button variant="success p-2 m-3">Buy Now</Button>
                </div>
                    <Button variant="outline-success w-100"  onClick={() => { navigate("/agristore/product/" + props.product._id) }}>View Details</Button>
            </div>
        </div> */}
    <div className='col-md-3 col-lg-4'>
        <div className={`product-container col-10 col-md-10 h-100 shadow row flex-column justify-content-center theme-${theme} p-3`}>
            <div className="star-product" hidden={!props.product.recent}>Recently Watched</div>
            <div onClick={() => { navigate("/agristore/product/" + props.product._id) }} style={{ backgroundImage: `url(${props.product.imgUrl})` }} alt={props.product.title} className='product-image' />
            <h5 onClick={() => { navigate("/agristore/product/" + props.product._id) }}>{props.product.title}</h5>
            <hr className='style-two' />
            <span>Price: <CurrencyIconComponent size='30' adjustY={'-10%'} /><span className="price">{INR.format(props.product.price).replace("₹", "KCO ")}</span>/-</span>
            <hr className='style-two' />


            <div  className='overlay-box'>
                <div className='inner d-flex justify-content-center align-items-center'>
                    <div className="d-flex justify-content-around flex-column">
                        <div>
                            <Button variant="warning w-100" onClick={() => { addToCart(props.product) }}><img src={shoppingCart} alt='' /> Add To Cart</Button>
                        </div>
                        <div className='my-4'>
                            <Button variant="success p-2 w-100">Buy Now</Button>
                        </div>
                            <Button variant="outline-success w-100"  onClick={() => { navigate("/agristore/product/" + props.product._id) }}>View Details</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
    )
}

export default Product