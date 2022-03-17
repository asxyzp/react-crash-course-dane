// IMPORTING MODULES
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//RENDERING REACT COMPONENT
try {
    ReactDOM.render(
        <App />,
        document.getElementById("root"),
        () => { console.log("COMPONENT IS RENDERED"); }
    );
}
catch (err) {
    console.error("ERROR OCCURED WHILE RENDERING COMPONENT");
    console.error(err);
}