import Button from '../Button';
import { language as languageContent } from '../../Languages/language';
import HeaderStyles, { HeaderButton } from './Header.styled';

const Header = ({ language, setLanguage, setIsModalActive }) => {
	return (
		<HeaderStyles>
			<header className=' d-flex justify-content-between align-items-center py-5 '>
				{/* <HeaderButton onClick={() => console.log('clicked')}>
					header Button
				</HeaderButton> */}
				<img
					src='https://seeklogo.com/images/W/web-icon-logo-A6B586D114-seeklogo.com.png'
					alt='logo'
					width={30}
					height={30}
				/>
				<Button text='Boshqa qiymat' />
				<nav>
					<ul className='d-flex gap-5 list-unstyled'>
						<li>{languageContent[language].header.navItem1}</li>
						<li>home</li>
						<li>
							<select
								onChange={(e) => setLanguage(e.target.value)}
								name=''
								id=''>
								<option value='uz'>Uz</option>
								<option value='ru'>Ru</option>
								<option value='eng'>Eng</option>
							</select>
						</li>
					</ul>
				</nav>
				<Button
					clickHandler={setIsModalActive}
					text={languageContent[language].header.buttonTitle}
				/>
			</header>
		</HeaderStyles>
	);
};

export default Header;
