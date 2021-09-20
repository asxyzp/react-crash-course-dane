import React, {useState, useEffect} from 'react';

const CountButton = (props) =>{

    //Sets the state of count value
    const [currentCount, setCurrentCount] = useState(0); 

    //Gets executed when any state changes
    useEffect(() =>{
        console.log("GETS EXECUTED WHEN ANY STATE CHANGES IT'S VALUES.");
    });

    //Gets executed only when the component is mounted
    useEffect(() =>{
        console.log("GETS EXECUTED ONLY WHEN THE COMPONENT IS MOUNTED.");
    }, []);

    //Gets executed only when the currentCount value changes
    useEffect(() =>{
        console.log("GETS EXECUTED WHEN THE COMPONENT IS MOUNTED OR THE VALUE OF currentCount STATE CHANGES.");
        if(currentCount===props.incrementBy*10)
            setCurrentCount(0);
    }, [props.incrementBy,currentCount]);

    //Increasing count value when clicked
    let handleClick = () =>{
        setCurrentCount(currentCount+props.incrementBy);
    };

    //Using props to style the element
    let buttonStyle ={
        color: props.color,
        backgroundColor: props.backgroundColor, 
    }
    //Returning JSX element
    return (<div className="d-flex border align-items-center m-3 w-md-50 w-75 p-2 bg-light rounded shadow mx-auto">
                <button style={buttonStyle} onClick={handleClick} className="btn w-100">Increment count by {props.incrementBy}</button>
                <div className="fw-bold p-3">{currentCount}</div>
            </div>);
}

export default CountButton;