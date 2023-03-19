import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
	return (
		<div className='headerContainer'>
			<Link className='headerTitle' to='/'>
				<p>
					Ryan Beck
					<span className='title'>
						<br /> Full Stack Web Developer
					</span>
				</p>
			</Link>
			<nav className='headerLinks'>
				<NavLink className='styledLink projects' to='/'>
					Home
				</NavLink>
				<NavLink className='styledLink resume' to='/resume'>
					Resume
				</NavLink>
				<NavLink className='styledLink contact' to='/about'>
					About
				</NavLink>
				<NavLink className='styledLink contact' to='/contact'>
					Contact
				</NavLink>
			</nav>
			<div className='social'>
				<div>
					<a className='item-header' href='https://github.com/rbeck19' target='_blank' rel="noopener noreferrer">
						<i className='fab fa-github-square' />
					</a>
				</div>
				<div>
					<a className='item-header' href='https://www.linkedin.com/in/beck-ryan/' target='_blank' rel="noopener noreferrer">
						<i className='fab fa-linkedin' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
