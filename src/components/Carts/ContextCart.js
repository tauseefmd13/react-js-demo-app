import React, { useContext } from 'react';
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import Items from "./Items";

const ContextCart = () => {

    const { item, clearCart, totalAmount, totalItem } = useContext(CartContext);

    return (
        <>
            <div className="container my-3">
                <header>
                    <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                    </div>
            
                    <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                    </div>
                </header>
        
                <section className="main-cart-section">
                    <h1>Shopping Cart</h1>
                    <p className="total-items">
                    you have <span className="total-items-count">{totalItem} </span> items
                    in shopping cart
                    </p>

                    {
                        item.length > 0 ? (
                    
                            <div>
                                <div className="cart-items">
                                    <div className="cart-items-container">
                                        <Scrollbars>
                                        {item.map((curItem) => {
                                            return <Items key={curItem.id} {...curItem} />;
                                        })}
                                        </Scrollbars>
                                    </div>
                                </div>
                    
                                <div className="card-total">
                                    <h3>
                                        Cart Total : <span>₹{totalAmount}</span>
                                    </h3>
                                    <button>checkout</button>
                                    <button className="clear-cart" onClick={clearCart}>
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>

                            </div>
                        )
                    }
                </section>
            </div>
        </>
    );
}

export default ContextCart;
