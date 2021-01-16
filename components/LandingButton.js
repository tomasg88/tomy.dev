import React from "react";

export default function LandingButton({ name }) {
	return (
		<div
			id={name.toLowerCase()}
			className="big-button flex flex-jc-c flex-ai-c"
		>
			{name}
		</div>
	);
}
