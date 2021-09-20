import React, { useState } from 'react';

//Creating a tweet-box like component
const CountText = () => {

    //Sets text entered in the textarea.
    let [text, setText] = useState("");

    //Sets length of text typed in the set are.
    let [textLength, setTextLength] = useState(0);

    //Sets the state whether the button is disabled or not.
    let [buttonState, setButtonState] = useState(true);

    //Sets the state of the shadow, which changes upon hovering.
    let [shadowState, setShadowState] = useState("shadow-sm");

    //Sets color of text using bootstrap class.
    let [textColor, setTextColor] = useState("text-dark");

    //Function which changes the value of text & text length when something is entered in the textarea.
    const handleInput = (event) => {

        //Makes the text visible on the screen, same as the one which is typed.
        text = event.target.value;
        setText(text);

        //When textlength
        /**
         * When text length is greater than 280 or is equal to 0:
         * 1. Button is disabled.
         * 2. If text length > 280, then 
         *      a. Text length is set as -ve value WRT 280.
         *      b. Text color changes to red.
         */
        if (text.length > 280 || text.length === 0) {

            //Disabling the button.
            buttonState = true;
            setButtonState(buttonState);
            setTextLength(text.length);

            //Setting text value as -ve WRT 280 & text color as red.
            if (text.length > 280) {
                setTextLength(280 - text.length);
                setTextColor("text-danger");
            }
        }
        /**
         * If text length <= 280, then:
         * 1. Setting button state as enabled.
         * 2. Text color is black.
         * 3. Text length is a +ve value.
         */
        else {
            buttonState = false;
            setButtonState(buttonState);
            setTextColor("text-dark");
            setTextLength(text.length);
        }
    }

    //Increases shadow length
    const increaseShadowSize = () => {
        setShadowState("shadow");
    }

    //Decreases shadow length
    const decreaseShadowSize = () => {
        setShadowState("shadow-sm");
    }

    //JSX element
    return (
        <div onMouseEnter={increaseShadowSize} onMouseLeave={decreaseShadowSize} className={"tweet-block d-block w-md-50 w-75 p-2 rounded mx-auto my-3 " + shadowState}>
            <textarea value={text} onInput={handleInput} placeholder="Enter some text here" className="form-control small border border-0 p-2"></textarea>
            <div className="small">
                TEXT LENGTH: <span className={textColor}>{textLength}</span>
            </div>
            <button className="btn btn-dark" disabled={buttonState}>
                <i className="bi bi-stars text-warning"></i> SEND MESSAGE
            </button>
        </div>
    );
};

export default CountText;