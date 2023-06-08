import React from 'react';
import Picture from '../../src/img/IMG_7013.jpg';

const Contact = () => {
	return (
		<div className='contactContainer'>
			<img className='imgContact' src={Picture} alt='' />
			<header className='contactHeader'>
				<h4>Software Engineer</h4>
				<div className='social'>
					<div className='item-contact'>
						<i className='fas fa-phone-square-alt' />
						<span className='span-contact'>631-664-8304</span>
					</div>
					<div className='item-contact'>
						<i className='fas fa-map-marker-alt' />
						<span className='span-contact'>Long Island, NY</span>
					</div>
					<div className='item-contact'>
						<a href='mailto: ryan.beck219@gmail.com'>
							<i className='fas fa-envelope' />
							<span className='span-contact'>ryan.beck219@gmail.com</span>
						</a>
					</div>
					<div className='item-contact'>
						<a href='https://github.com/rbeck19' target='_blank' rel="noopener noreferrer">
							<i className='fab fa-github-square' />
							<span className='span-contact'>github.com/rbeck19</span>
						</a>
					</div>
					<div className='item-contact'>
						<a href='https://www.linkedin.com/in/beck-ryan/' target='_blank' rel="noopener noreferrer">
							<i className='fab fa-linkedin' />
							<span className='span-contact'>linkedin.com/in/beck-ryan/</span>
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Contact;
