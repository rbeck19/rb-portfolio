import React from 'react';
import resume from "./resume.pdf"

//import { Document, Page } from 'react-pdf';

//import pdfFile from '../img/ryan-beck-resume.pdf'

// import { pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
	return (
		<>
		<iframe title="Ryan Beck Resume" height="800px" width="100%" src={resume} />
{/* <div className='container'>
			<div className='card'>
				<h2>SKILLS AND LANGUAGES</h2>
				<article class='skills'>
					<section class='skill'> JavaScript </section>
					<section class='skill'>React</section>
					<section class='skill'>NodeJS</section>
					<section class='skill'>MongoDb</section>
					<section class='skill'>Mongoose</section>
					<section class='skill'>Express</section>
					<section class='skill'>Django</section>
					<section class='skill'>Python</section>
					<section class='skill'>HTML5</section>
					<section class='skill'>CSS</section>
				</article>
			</div>
			<div className='card'>
				<h2>PROJECTS</h2>
				<article class='project'>

					<a className='linkProjects' href='https://github.com/rbeck19/slot-machine-project' target='_blank' rel="noopener noreferrer">
						<h4 className='project-title'>Mario Slot Machine</h4>
					</a>
					<p className='projectInfo'> JavaScript | HTML | CSS </p>
					<ul className='info'>
						<li>
						This was a solo project. The program uses an animation to display the slot reel change. 
						It also has a wager system where you can choose between three different bet amounts and 
						different matches return a different win value.
						</li>
					</ul>

					<a className='linkProjects' href='https://github.com/rbeck19/bookshelf-client' target='_blank' rel="noopener noreferrer">
						<h4 className='project-title'>Bookshelf</h4>
					</a>
					<p className='projectInfo'>
						JavaScript | React | MongoDb | Mongoose | Express | HTML | CSS |
						Boostrap | Cors | Bycrpt | Jsonwebtoken | Passport

					</p>
					<ul className='info'>
						<li>
						This was a solo project. Bookshelf is an application where you can have your very own book tracker. 
						You can create an account in order to add books and notes onto your books.
						</li>
					</ul>

					<a className='linkProjects' href='https://github.com/rbeck19/Passport' target='_blank' rel="noopener noreferrer">
						<h4 className='project-title'>Passport</h4>
					</a>
					<p className='projectInfo'>
						JavaScript | React | MongoDb | Mongoose | Express | HTML | CSS |
						Cors | Jsonwebtoken | Passport
					</p>
					<ul className='info'>
						<li>
						This was a group project. Passport is a virtual destination tracker. You can create an account 
						and add your past trip destinations and notes on that trip. My main role during this project was 
						GitHub Manager.
						</li>
					</ul>

					<a className='linkProjects' href='https://github.com/rbeck19/food-forum' target='_blank' rel="noopener noreferrer">
						<h4 className='project-title'>Recipe Food Forum</h4>
					</a>
					<p className='projectInfo'>
						JavaScript | React | Django | Django-auth | PostgresSQL | Python | HTML | CSS
					</p>
					<ul className='info'>
						<li>
						This was a group project. Recipe Food Forum is an application where you can create an 
						account and view recipes people have posted and also create your own for others to see. 
						You can also add an image of your created recipe.
						</li>
					</ul>

				</article>
			</div>

			<div className='card'>
				<h2>EXPERIENCE</h2>
				<article class='experience'>
					<h4>Police Officer | NYPD</h4>
					<p className='experienceInfo'>New York City | July 2017 - August 2022</p>
					<ul className='responsibilities'>
						<li>
						Assigned to patrol community events which included regular interaction with the public and risk mitigation for the safety of our diverse NYC community.
						</li>
						<li>
						Responded to high stress situations, such as disputes, where I routinely reacted quickly, effectively, and empathetically resolved the situation at hand
						</li>
						<li>
						Collaborated with a number of different units and precincts to address hazardous conditions and crime scenes.
						</li>
						<li>
						During COVID, responded to frequent wellness calls, which included delicate interaction with families and ensuring residents had access to emergency healthcare when necessary.
						</li>
					</ul>
					<h4>Plumber Apprentice | Biagio Plumbing & Heating</h4>
					<p className='experienceInfo'>Long Island, NY | 2011 - 2017</p>
					<ul className='responsibilities'>
						<li>
						Replaced and helped maintain boilers, water heaters, new house ruffing, and underground pipe work
						</li>
						<li>
						Kitchen and bathroom remodeling.
						</li>
					</ul>
				</article>
			</div>
			<div className='card'>
				<h2>EDUCATION</h2>
				<article class='education'>
					<h4>General Assembly</h4>
					<p className='educationInfo'>Software Engineering Immersive | Remote | 2023</p>
					<h4>John Jay College of Criminal Justice</h4>
					<p className='educationInfo'>Bachelors of Science Criminal Justice | New York, NY | May 2017</p>
				</article>
			</div>
		</div> */}
		</>
	)
}

export default Resume;
