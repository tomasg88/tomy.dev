import React from "react";

export const Hamburger = ({ isOpen, handleClick }) => (
	<label className="menu-button">
		<input type="checkbox" checked={isOpen} onClick={handleClick} />
		<div>
			<span></span>
			<span></span>
		</div>
	</label>
);
