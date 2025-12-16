import '../styles/header.css';

import logo from '../assets/logo.svg';

function Header() {
	return (
		<header>
			<div className="container">
				<div className="logo-wrapper">
					<img src={logo} alt={"company-logo"} />
					<span>Zarrin</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
