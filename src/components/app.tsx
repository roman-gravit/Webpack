import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {

	const [count, setCounter] = useState<number>(0);
	
	const increment = () => setCounter(count+1);
	return (
		<div>
			<Link to={"/shop"}>Shop</Link>
			<br/>
			<Link to={"/about"}>About</Link>
			<div>Counter:{count}</div>
			<button className={classes.button} onClick={increment}>Increment1</button>
			<Outlet/>
		</div>
  	)
}