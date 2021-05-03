import React from 'react'
import classes from './BreadCrumb.module.css'

function BreadCrumb(props) {
    const path = props.match.path
    const patharr = path.split("/")
    return (
        <div>
            <p className={classes.breadcrumb}>{patharr[1]}{' > '}{patharr[2]}</p>
        </div>
    )
}

export default BreadCrumb
