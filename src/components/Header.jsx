import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const classes = !theme ? 'bg-dark text-white' : 'bg-white text-dark ';
	return (
		<header className={classes}>
			<nav className={classes}>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='/navbarExample01'
						aria-controls='navbarExample01'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars'></i>
					</button>
					{theme ? <p>light</p> : <p>dark</p>}
					<div
						className='collapse navbar-collapse'
						id='navbarExample01'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item active'>
								<NavLink
									aria-current='page'
									style={({ isActive }) =>
										isActive ? { color: 'red' } : undefined
									}
									end
									className={({ isActive }) =>
										isActive
											? 'active nav-link'
											: 'nav-link'
									}
									to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									to='/features'
									style={({ isActive }) =>
										isActive ? { color: 'red' } : undefined
									}>
									Features
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									to='/project'
									style={({ isActive }) =>
										isActive ? { color: 'red' } : undefined
									}>
									project
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									to='/about'
									style={({ isActive }) =>
										isActive ? { color: 'red' } : undefined
									}>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<button className='btn'>Sign in</button>
				<select
					onChange={(e) => {
						const value = e.target.value;
						if (value === 'light') {
							setTheme(true);
						} else {
							setTheme(false);
						}
					}}>
					<option value='light'>light</option>
					<option value='dark'>dark</option>
				</select>
			</nav>
		</header>
	);
};

export default Header;
