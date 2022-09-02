import React from 'react';
import './homescreen.css';

function AboutScreen() {
	return (
		<div className="about">
			<div className="author-image">
				<img src="/cath.jpeg" alt="" />
			</div>
			<div className="author-about">
				<h1>Hi, I am Catherine Idam</h1>
				<p>
					Catherine Idam is a writer of fiction and non-fiction. Born and raised in Nigeria,  she started writing poems at age 8. She is currently a law student in the University of Lagos. She loves to write poems in her leisure, alongside taking pictures of the sky. 
She is the last of three children who loves her family so much. She loves to travel and supports climate action for environmental sustainability.


				</p>
				<p>
					She runs an afrocentric brand named Catriq Fashion. The brand makes a wide range of African-print themed products. 

Catherine is a hardworking young woman, who can never be found idle.
				</p>
				<p>
					Let's keep in touch on my social media channels.
				</p>
				<div className="social-icons">
					<a href="https://www.facebook.com/idam.ugboakucatherine.9">
						<i class="fab fa-facebook"></i>
					</a>
					<a href="https://www.linkedin.com/in/idam-ugboaku-catherine-22573a188">
						<i class="fab fa-linkedin"></i>
					</a>
					<a href="https://www.instagram.com/cathwrites/">
						<i class="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutScreen;
