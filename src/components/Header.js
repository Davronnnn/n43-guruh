import Button from './Button';
const Header = () => {
	return (
		<header className=' d-flex justify-content-between align-items-center py-5 bg-secondary'>
			<img
				src='https://seeklogo.com/images/W/web-icon-logo-A6B586D114-seeklogo.com.png'
				alt='logo'
				width={30}
				height={30}
			/>
			<Button text='Boshqa qiymat' />
			<nav>
				<ul className='d-flex gap-5 list-unstyled'>
					<li>home</li>
					<li>home</li>
					<li>home</li>
				</ul>
			</nav>
			<Button text='Button' />
		</header>
	);
};

export default Header;
