import React, { useEffect, useRef } from "react";

export default function useDynamicMousePushing() {
	const element = useRef(null);

	useEffect(() => {
		element.current.addEventListener("mousemove", (ev) => {
			const {
				offsetLeft,
				offsetTop,
				offsetHeight,
				offsetWidth,
			} = ev.target;
			var objCenterX = offsetLeft + offsetWidth / 2;
			var objCenterY = offsetTop + offsetHeight / 2;

			const x = ev.pageX - objCenterX;
			const y = ev.pageY - objCenterY;
			let rotateY = "",
				rotateX = "";
			if (x > 0) {
				rotateY = "rotateY(10deg)";
				rotateX = y < 0 ? "rotateX(10deg)" : "rotateX(-10deg)";
			} else {
				rotateY = "rotateY(-10deg)";
				rotateX = y < 0 ? "rotateX(10deg)" : "rotateX(-10deg)";
			}
			element.current.style.transform = `perspective(600px) ${rotateX} ${rotateY}`;
		});

		element.current.addEventListener("mouseout", () => {
			element.current.style.transform = `perspective(600px) rotateX(0) rotateX(0)`;
		});

		return () => {
			const resetPosition = () =>
                (element.current.style.transform = `perspective(600px) rotateX(0) rotateX(0)`);
            if (element.current) {
                element.current.removeEventListener("mousemove", resetPosition);
                element.current.removeEventListener("mouseout", resetPosition);
            }
		};
	}, []);

	return element;
}
