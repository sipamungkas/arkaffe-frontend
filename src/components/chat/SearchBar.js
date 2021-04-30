import classes from './SearchBar.module.css'
import React from 'react'

function SearchBar() {
    return (
        <form className={classes["form-group"]}>
            <img className={classes["searchIcon"]} alt="search" src="/assets/icons/icon_search.svg"></img>
            <input
            className={classes["search-bar"]}
            type="text"
            placeholder="Search Chat"
            />
        </form>
    )
}

export default SearchBar
