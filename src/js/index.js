//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



window.onload = function(){
    let count=0;
    intervalID = window.setInterval(()=>{
        ReactDOM.render(<Home contador={count}/>, document.querySelector("#app"));
        count++;
    }, 1000);
};

//render your react application
