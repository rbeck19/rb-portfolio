import React from 'react';


import recipeFoodForumMain from '../img/recipe-forum.png';
import passportMain from '../img/passport-main.png';
import bookshelfMain from "../img/bookshelf-main.png";
import slotMachine from "../img/slot-machine.png";



const Projects = () => {
	return (
		<div>
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
						Collaborated with a team of 5 and functioned as a Fullstack Developer using React, MongoDb,
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
						Collaborated with a team of 5 and functioned as a Fullstack Developer using React, MongoDb,
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
