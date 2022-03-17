/**
 * A search bar component to search through the elements
 */

import "./SearchBar.css";
import React, { useState } from 'react';

const SearchBar = (props) => {

    //Passing item array as props to make the component reusable
    const items = props.items;

    // State for storing search value in the input text field
    let [searchValue, setSearchValue] = useState("");

    // State for where the button will be displayed or not
    let [shouldDisplayButton, setShouldDisplayButton] = useState("");

    //When some text is entered in the input field
    const onInputChange = (event) => {
        searchValue = event.target.value;
        setShouldDisplayButton(searchValue.length > 0);
        setSearchValue(searchValue);
    };

    //When clear button is clicked
    const clearInputValue = (event) => {
        setSearchValue("");
        setShouldDisplayButton(false);
    };

    //JSX element
    return (<div className="mx-auto w-md-50 w-75 my-2">
        <form className="d-block">
            <input type="text" value={searchValue} onChange={onInputChange} className="form-control mb-2 p-2 fs-4 fw-bold" placeholder="Search something" />
            {shouldDisplayButton && <input type="reset" onClick={clearInputValue} className="btn btn-dark p-2 w-100" value={"CLEAR"} />}
        </form>
        <ol className="mt-2">{items.map((item, index, array) => {
            return item.includes(searchValue) && <li key={item}>{item}</li>;
        })}</ol>
    </div>);
};

export default SearchBar;