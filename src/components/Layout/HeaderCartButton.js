import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon"
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHighLighted,setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currNumber,item)=>{
        return currNumber+item.amount
    },0);

    const btnClass = `${classes.button} ${btnIsHighLighted && classes.bump}`;
    const {items} = cartCtx;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        },300);

        return () => {
            clearTimeout(timer);
        }
    },[items]);

    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton;