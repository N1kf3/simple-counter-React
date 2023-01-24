import React from "react";
import Counter from "./Counter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="">
			<Counter contador={props.contador}/>
		</div>
	);
};

export default Home;
