import React from 'react'
import classes from './ButtonGroup.module.css'

function ButtonGroup() {
    return (
        <div className={classes["button-group"]}>
            <button className={classes["btn-cart"]} type="button">Add to Cart</button>
            <button className={classes["btn-ask"]} type="button">Ask a Staff</button>
        </div>
    )
}

export default ButtonGroup
