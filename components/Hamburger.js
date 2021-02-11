import React, { useCallback } from 'react'

export default function Hamburger({isOpen, setIsOpen}) {
	return (
		<label className="menu-button">
			<input 
				type="checkbox" 
				value={isOpen} 
				onChange={() => setIsOpen(!isOpen)} 
			/>
			<div>
				<span></span>
				<span></span>
			</div>
		</label>
	)
}
