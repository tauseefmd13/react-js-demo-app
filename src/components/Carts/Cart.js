import React, { createContext, useReducer, useEffect } from 'react';
import './cart.css';
import { products } from './products';
import { reducer } from "./reducer";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

const Cart = () => {

    const initialState = {
        item: products,
        totalAmount: 0,
        totalItem: 0,
    };

    // const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the indv. item from Cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    // clear the cart
    const clearCart = () => {
        return dispatch({ 
            type: "CLEAR_CART" 
        });
    };

    // increment the item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    // decrement the item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    // we will use the useEffect to update the data
    useEffect(() => {
        dispatch({ 
            type: "GET_TOTAL" 
        });
        // console.log(state.item);
    }, [state.item]);

    return (
        <CartContext.Provider 
            value={{ ...state, removeItem, clearCart, increment, decrement }}>
            <ContextCart />
        </CartContext.Provider>
    )
}

export default Cart;
