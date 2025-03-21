import React from 'react';


import recipeFoodForumMain from '../img/recipe-forum.png';
import passportMain from '../img/passport-main.png';
import bookshelfMain from "../img/bookshelf-main.png";
import slotMachine from "../img/slot-machine.png";
import petParent from "../img/pet-parent.png"
import platePilot from "../img/plate-pilot.png"
import xclaimPage from "../img/xclaim-page.png"
import hopeReg from "../img/hope-registration-screen.png"
import hopeMobile from "../img/hope-mobile-screen.png"

const Projects = () => {
	return (
		<div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>NYC Department of Homeless Services</h1>
					<p className='projectStack'> React | React Native</p>
					<p className='projectDesc'>
						Maintained and enhanced a cross-platform application for assisting with homeless data management and assistance, utilizing React, React Native, and .NET Web Api. The application includes an admin dashboard, a user registration portal, and a mobile app for iOS and Android. 
					</p>			
					<div className='keyImages' style={{justifyContent:'space-between', width:'100%', flexWrap:'wrap'}}>
						<img className='projectImages' style={{height:480, minWidth:'auto'}} src={hopeReg} alt='Hope Registration Screen' />
						<img className='projectImages' style={{height:480,width:'auto'}} src={hopeMobile} alt='Hope Mobile Screen' />
						
					</div>
					<div className='keyImages'>
						
					</div>
				</div>
			</div>	
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Xclaim</h1>
					<p className='projectStack'> React | Ruby | SQL | Tailwind</p>
					<a className='buttonLink' href='http://staging.v2.x-claim.com/marketplace' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
					Created a new updated web application for Xclaim through Good Inc. The application is for users to view, buy and sell bankruptcy claims. The application features distinct admin and user views to manage and interact with the claims. Utilized AWS to securely manage and store all user-uploaded documents. 
					</p>					
					<div className='keyImages'>
						<img className='projectImages' src={xclaimPage} alt='Xclaim Marketplace' />
					</div>
				</div>
			</div>			
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Plate Pilot</h1>
					<p className='projectStack'> React | MongoDb | React Native </p>
					<a className='buttonLink' href='https://github.com/lucas-richards/23oct-hackathon-FrontEnd' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://plate-pilot.onrender.com/ ' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						Collaborated with UX designers and developers to create a MERN Stack website.
					</p>
					<p className='projectDesc'>
					The application integrates the Yelp API to enhance the dining decision-making process. Leveraging the power of the Yelp API, the application offers users the ability to make randomized restaurant selections tailored to their preferences through a set of user-defined filters.	
					</p>
					<p className='projectDescWithLink'>
					This application was re-created as a mobile application using React Native with the code available on {' '}
					<a className='link' href='https://github.com/rbeck19/plate-pilot-native' target='_blank' rel="noopener noreferrer">GitHib</a>.
					</p>

					<div className='keyImages'>
						<img className='projectImages' src={platePilot} alt='Main page of pet parent' />
					
					</div>
				</div>
			</div>			
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Pet Parent</h1>
					<p className='projectStack'> React | MongoDb </p>
					<a className='buttonLink' href=' https://github.com/ChelseyReann/nam1_hackathon_frontend' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://musical-mousse-373f3d.netlify.app/' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						Collaborated with UX designers and developers to create a MERN Stack website.
					</p>
					<p className='projectDesc'>
						The platform serves as a pet community, providing users with the opportunity to share their own pet-related content and discover posts from fellow pet enthusiasts. Whether it's  sharing valuable pet care tips, or exchanging heartwarming stories, the website fosters a lively space for all things pet-related. 
					</p>					
					<div className='keyImages'>
						<img className='projectImages' src={petParent} alt='Main page of pet parent' />
					
					</div>
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Recipe Food Forum</h1>
					<p className='projectStack'> React | Django </p>
					<a className='buttonLink' href='https://github.com/rbeck19/food-forum' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://recipe-forum-client.onrender.com/' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						A Recipe-Forum app that is a place meant to give food lovers a place to come together and share their 
						favorite recipes and comment on recipes.
					</p>
					<p className='projectDesc'>
						Collaborated with a team of developers and functioned as a Fullstack Developer using React, Python, Django,
						and implementing all CRUD endpoints (create, read, update, delete) that were received from the server side.
						As well as implementing client-side authentication and authorization routes.
					</p>
					<div className='keyImages'>
						<img className='projectImages' src={recipeFoodForumMain} alt='Main page of recipe food forum' />
					
					</div>
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'>Passport</h1>
					<p className='projectStack'> React | MongoDb | MERN </p>
					<a className='buttonLink' href='https://github.com/rbeck19/Passport' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://passport-7k56.onrender.com/' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						Passport is a travel diary where users can keep track of where they traveled as well as what they did there 
						and the memories associated with that trip.
					</p>
					<p className='projectDesc'>
						Collaborated with a team of developers and functioned as a Fullstack Developer using React, MongoDb,
						and implementing all CRUD endpoints (create, read, update, delete) that were received from the server side.
						As well as implementing client-side authentication and authorization routes.
					</p>
					<div>
						<img className='projectImages' src={passportMain} alt='Main page of project passport' />
					</div>
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'> Bookshelf </h1>
					<p className='projectStack'> Javascript | MongoDb | Express | Bootstrap</p>
					<a
						className='buttonLink'
						href='https://github.com/rbeck19/bookshelf-client' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://rbeck19.github.io/bookshelf-client/' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						Bookshelf is where you can have your very own book tracker. Keep track of what books you have read and add 
						some notes to your book as a reminder of why liked the book or why you didn't.
					</p>
					<p className='projectDesc'>
						This was a solo project where I created a SPA (single page application) using JavaScript, MongoDb, Mongoose, Express, 
						CSS, Boostrap, Cors, Bycrypt, Passport and Jsonwebtoken.
					</p>
					<div>
						<img className='projectImages' src={bookshelfMain} alt='Main page of project Bookshelf' />
					</div>
				</div>
			</div>
			<div className='projectsContainer'>
				<div className='projectsCard'>
					<h1 className='projectsTitle'> Mario Slot Machine</h1>
					<p className='projectStack'> JavaScript | HTML | CSS</p>
					<a className='buttonLink' href='https://github.com/rbeck19/slot-machine-project' target='_blank' rel="noopener noreferrer">
						View Code
					</a>
					<a className='buttonLink' href='https://rbeck19.github.io/slot-machine-project/' target='_blank' rel="noopener noreferrer">
						View Live
					</a>
					<p className='projectDesc'>
						Mario Slot Machine is an application where you can have some fun. Simply add fund and spin away. 
						Place your bet and see if you can win. Different matches offer different rewards.
					</p>
					<p className='projectDesc'>
						This was a solo project where I created slot machine and implemented a wager system
						 using JavaScript, HTML, and CSS.
					</p>
					<div>
						<img className='projectImages' src={slotMachine} alt='Display of Mario themed slot machine' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
