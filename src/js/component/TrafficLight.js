import React, { useState, useEffect } from "react";

export function TrafficLight() {
	const [light, setLight] = useState("");
	//flag variable in this case is light

	// useEffect(
	// 	() => {
	// 		const interval = setInterval(() => {
	// 			//console.log("interval triggered");
	// 			light == "red"
	// 				? setLight("yellow")
	// 				: light == "yellow"
	// 					? setLight("green")
	// 					: setLight("red");
	// 		}, 1000);
	// 		return () => clearInterval(interval);
	// 	},
	// 	[light]
	// );

	const interval = () =>
		setInterval(() => {
			console.log("interval triggered");
			light == "red"
				? setLight("yellow")
				: light == "yellow"
					? setLight("green")
					: setLight("red");
		}, 3000);

	return (
		<div>
			<button onClick={() => interval()}>Start Interval</button>

			<button onClick={clearInterval(interval)}>Stop Interval</button>

			<div className="topPole" />
			<div className="trafficContainer">
				{light == "red" ? (
					<div className="red light selected expanded" />
				) : (
					<div
						className="red light"
						onClick={() => setLight("red")}
					/>
				)}
				{light == "yellow" ? (
					<div className="yellow light selected expanded" />
				) : (
					<div
						className="yellow light "
						onClick={() => setLight("yellow")}
					/>
				)}
				{light == "green" ? (
					<div className="green light selected expanded" />
				) : (
					<div
						className="green light"
						onClick={() => setLight("green")}
					/>
				)}
			</div>
		</div>
	);
}
