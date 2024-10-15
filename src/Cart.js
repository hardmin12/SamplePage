import { useSelector, useDispatch } from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item});
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <button onClick={() => addToCart({ name: "Item 1" })}>Add Item 1</button>
            <button onClick={() => addToCart({ name: "Item 2"})}>Add Item 2</button>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;