import React, { useState } from "react";

export function TrafficLight() {
	const [light, setLight] = useState("yellow");

	return (
		<div>
			<div className="topPole" />
			<div className="trafficContainer">
				{light == "red" ? (
					<div className="red light expanded" />
				) : (
					<div
						className="red light"
						onClick={() => setLight("red")}
					/>
				)}
				<div className="yellow light " />
				<div className="green light" />
			</div>
		</div>
	);
}
