import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './Navbar';

function Navbar() {
return 	<div>
		<Nav>
			<Bars />

			<NavMenu>
				<NavLink to='/home'>
					Home
				</NavLink>
				<NavLink to='/customers'>
					Customers
				</NavLink>
				<NavLink to='/orders'>
					Orders
				</NavLink>
			</NavMenu>

			<NavBtn>
				<NavBtnLink to='/'>Sign Out</NavBtnLink>
			</NavBtn>
		</Nav>
		</div>;
}

export default Navbar;
