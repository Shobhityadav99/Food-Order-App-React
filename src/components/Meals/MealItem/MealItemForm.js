import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemform.module.css";

const MealItemForm = props => {
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmont = amountInputRef.current.value;
        const enteredAmontNumber = +enteredAmont;

        if (enteredAmont.trim().length === 0 || enteredAmontNumber < 1 || enteredAmontNumber > 5) {
            return;
        }
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
    </form>
}

export default MealItemForm;