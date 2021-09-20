
import ReactDOM from "react-dom";
import App from "./components/App";

//Rendering react component
try{ReactDOM.render(<App/>, document.getElementById("root"));}
catch(err){
    console.error("ERROR FOR RENDERING COMPONENT");
    console.error(err);
}