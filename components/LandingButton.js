import React from "react";
import useDynamicMousePushing from "../hooks/useDynamicMousePushing";

export default function LandingButton({ name }) {
    const refElement = useDynamicMousePushing();
    
	return (
		<div
			ref={refElement}
			id={name.toLowerCase()}
			className="big-button flex flex-jc-c flex-ai-c"
		>
			{name}
		</div>
	);
}
