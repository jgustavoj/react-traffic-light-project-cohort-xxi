import React from "react";

export function TrafficLight() {
	return (
		<div>
			<div className="topPole" />
			<div className="trafficContainer">
				<div className="red light" />
				<div className="yellow light " />
				<div className="green light" />
			</div>
		</div>
	);
}
