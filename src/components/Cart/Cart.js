import classes from "./Cart.module.css";

const Cart = props => {
    const cartItems = <ul className={classes['class-item']}>{[{id: 'c1',name: 'pijja',amount: '2',price: 12.69}]
    .map(item => <li>{item.name}</li>)}</ul>
    return <div>
        {cartItems}
        <div></div>
        <div></div>
    </div>
}

export default Cart;