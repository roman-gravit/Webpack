import React, { useState } from "react";
import "./app.scss";

export const App = () => {

	const [count, setCounter] = useState(0);
	
	const increment = () => setCounter(count+1);
	return (
		<div>
			<div>Counter:{count}</div>
			<button onClick={increment}>Increment1</button>
		</div>
  	)
}