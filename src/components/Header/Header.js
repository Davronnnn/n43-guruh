import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

const Header = () => {
	const { todosLength } = useContext(TodoContext);

	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light bg-white p-5'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarExample01'
						aria-controls='navbarExample01'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars'></i>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarExample01'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item active'>
								<a
									className='nav-link'
									aria-current='page'
									href='/'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Features
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Pricing
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
				<button className='btn btn-primary'>
					Number:{todosLength}
				</button>
			</nav>
		</header>
	);
};

export default Header;
