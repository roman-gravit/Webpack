import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/about";
import AvatarPng from "@/assets/avatar.png";

import AvatarSvg from "@/assets/avatar.svg";
import ArrowSvg from "@/assets/arrow.svg";

export const App = () => {

	const [count, setCounter] = useState<number>(0);
	
	const increment = () => setCounter(count+1);

/*	if (_PLATFORM === "desktop") {
		function _test(value: string): void {
			console.log(value);
		}
		_test("12");
		return <div>DESKTOP PLATFORM</div>
	}

	if (_PLATFORM === "mobile") {
		return <div>MOBILE PLATFORM</div>
	}
*/

	return (
		<div>
			<h1>Platform4={_PLATFORM }</h1>
			<div>PNG: <img width={50} height={50} src={AvatarPng}></img></div>
			<div>SVGloader64: <AvatarSvg  width={64} height ={64} /></div>
			<div>SVGloader32: <ArrowSvg className={classes.arrow} width={32} fill={"red"} height ={32} /></div>
			<Link to={"/shop"}>Shop</Link>
			<br/>
			<Link to={"/about"}>About</Link>
			<div>Counter:{count}</div>
			<button className={classes.button} onClick={increment}>Increment1</button>
			<Outlet/>
			<About />
		</div>
  	)
}