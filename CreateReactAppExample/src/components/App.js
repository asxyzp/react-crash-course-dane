import React, {useState, useEffect} from 'react';
import CountText from "./CountText";
import CountButton from "./CountButton";
import SearchBar from "./SearchBar/SearchBar";
import "../styles/style.css";

//React component is a collection of elements which returns JSX values
const App = (props) =>{ 

    const [productValues, setProductValues] = useState([]);

    useEffect(() =>{
        
        //FETCHING DATA FROM FAKE STORE API
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((products)=>{
            let newProductList = products.map((product) =>{
                return product.title;
            });
            setProductValues(newProductList);
        });
    },[]);

    let hasProducts = productValues.length>0;
    return (<div>
                {hasProducts?<SearchBar items={productValues}/>:<div className="d-block w-md-50 w-75 p-2 text-center rounded mx-auto my-3 fs-2">Loading</div>}
                <CountButton color={"black"} backgroundColor={"lightsalmon"} incrementBy={5}/>
                {/* <CountButton color={"black"} backgroundColor={"lightgreen"} incrementBy={10}/>
                <CountButton color={"black"} backgroundColor={"lightsteelblue"} incrementBy={15}/>
                <CountButton color={"white"} backgroundColor={"black"} incrementBy={20}/> */}
                <CountText/>
           </div>);
}

export default App;