import React, { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {

	const [count, setCounter] = useState<number>(0);
	
	const increment = () => setCounter(count+1);
	return (
		<div>
			<div>Counter:{count}</div>
			<button className={classes.button} onClick={increment}>Increment1</button>
		</div>
  	)
}