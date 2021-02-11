import React, { useState } from 'react'
import Hamburger from './Hamburger'
import LandingButton from './LandingButton'

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="menu">
			<div className="button-container flex">
				<Hamburger 
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</div>
			
			<div className={`menu-content ${isOpen? 'open' : ''}`}>
				<LandingButton name="about" />
				<LandingButton name="projects" />
				<LandingButton name="blog" />
				<LandingButton name="contact" />
			</div>
        </div>
    )
}
