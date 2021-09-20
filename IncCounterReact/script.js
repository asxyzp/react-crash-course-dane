//Root elements: Where react elements will be rendered
const reactContentRoot1 = document.getElementById("root1");
const reactContentRoot2 = document.getElementById("root2");
const reactContentRoot3 = document.getElementById("root3");
const reactContentRoot4 = document.getElementById("root4");

//React element(s)
const myFirstElement = React.createElement("ul",null,[
    React.createElement("li",null,"First Item"),
    React.createElement("li",null,"Second Item"),
    React.createElement("li",null,"Third Item"),
]);

//JSX element(s)
const fourthItem = "Fourth item";
const myFirstJSXElement = <ul className="yellow-bg">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    <li>{fourthItem.toUpperCase()}</li> 
</ul>; //Interpolation is allowed inside JSX

//React component
const App = () =>{
    const fourthItem = "Fourth item";
    return <ul className="yellow-bg">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>{fourthItem.toUpperCase()}</li> 
    </ul>;
}

//Rendering elements using ReactDOM
ReactDOM.render("Hello, World!", reactContentRoot1);
ReactDOM.render(myFirstElement, reactContentRoot2);
ReactDOM.render(myFirstJSXElement, reactContentRoot3);
// try{ReactDOM.render(<App />, reactContentRoot4);}
// catch(err){
//     console.error("ERROR FOR RENDERING COMPONENT");
//     console.error(err);
// }
try{ReactDOM.render(App(), reactContentRoot4);}
catch(err){
    console.error("ERROR FOR RENDERING COMPONENT");
    console.error(err);
}