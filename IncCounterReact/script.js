//ROOT ELEMENTS FOR RENDERING CONTENT
const reactContentRoot1 = document.getElementById("root1");
const reactContentRoot2 = document.getElementById("root2");
const reactContentRoot3 = document.getElementById("root3");
const reactContentRoot4 = document.getElementById("root4");
const reactContentRoot5 = document.getElementById("root5");

// INCREMENT COUNTER COMPONENT
const IncrementCounter = (props) => {
    
    // INCREMENT COUNTER VALUE
    const [counter, setCounter] = React.useState(0);

    // INCREMENTING COUNTER VALUE
    const increment = (event) => {
        setCounter(counter+1);
    };

    return (<div className="d-flex align-items-center">
        <button onClick={increment} className="btn btn-dark">Increment</button>
        <div className="ms-2">{counter}</div>
    </div>);
};

// REACT ELEMENTS
const myFirstElement = React.createElement(
    "ul", 
    null, [
        React.createElement("li", null, "First Item"),
        React.createElement("li", null, "Second Item"),
        React.createElement("li", null, "Third Item"),
    ]
);

//JSX ELEMENTS
const fourthItem = "4th item";
const myFirstJSXElement = (<ul className="">
    
    <li>1ST ITEM</li>
    <li>2ND ITEM</li>
    <li>3RD ITEM</li>

    {/*INTERPOLATION IS ALLOWED IN JSX*/}
    <li>{fourthItem.toUpperCase()}</li> 
</ul>); 

//REACT COMPONENT
const App = () => {
    const fourthItem = "Fourth item";
    return <ul className="">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>{fourthItem.toUpperCase()}</li>
    </ul>;
}

// RENDERING STRING
ReactDOM.render("HELLO, WORLD!", reactContentRoot1);

// REACT REACT ELEMENT
ReactDOM.render(myFirstElement, reactContentRoot2);

// RENDERING REACT ELEMENT USING JSX
ReactDOM.render(myFirstJSXElement, reactContentRoot3);

// RENDERING COMPONENT
try { 
    ReactDOM.render(<App />, reactContentRoot4); 
}
catch (err) {
    console.error("ERROR FOR RENDERING COMPONENT");
    console.error(err);
}

try { 
    ReactDOM.render(<IncrementCounter/>, reactContentRoot5); 
}
catch (err) {
    console.error("ERROR FOR RENDERING COMPONENT");
    console.error(err);
}