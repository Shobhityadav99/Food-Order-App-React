import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemform.module.css";

const MealItemForm = props => {
    const [amountisValid,setAmountIsValid] =useState(false);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmont = amountInputRef.current.value;
        const enteredAmontNumber = +enteredAmont;

        if (enteredAmont.trim().length === 0 || enteredAmontNumber < 1 || enteredAmontNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddtoCart(enteredAmontNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
        {!amountisValid && <p>Please Enter a valid amount(1-5)!!</p>}
    </form>
}

export default MealItemForm;