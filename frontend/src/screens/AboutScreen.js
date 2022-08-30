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
					Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Commodi accusantium sequi quos
					consequatur voluptas aliquid asperiores nobis
					voluptatem, voluptates ea molestiae adipisci
					assumenda eaque incidunt culpa dicta fugiat quae
					nam eveniet est. Eaque rem molestiae eos
					reprehenderit, tempora, sint mollitia natus
					incidunt doloribus commodi accusamus minima
					sapiente saepe iusto dignissimos?
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Vero, ipsa sunt consequuntur
					doloremque officia porro eum odit numquam
					aspernatur alias facilis enim est cum rem aperiam
					commodi autem fugiat laborum ipsam molestias?
					Iure, quod non animi, sed dignissimos enim aperiam
					distinctio consequuntur eius voluptatibus ratione
					in illo, molestiae vel similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Magnam, aliquid voluptatem corporis delectus
					praesentium quod. Facilis atque fuga repudiandae
					pariatur et architecto alias quis vero rem esse
					veritatis impedit culpa omnis a necessitatibus
					corrupti fugiat, expedita ad dolores provident
					sequi adipisci laudantium. Cumque dolorem aperiam
					ratione pariatur laboriosam. Vero, reiciendis.
				</p>
				<p>
					Let's keep in touch on my social media channels.
				</p>
				<div className="social-icons">
					<a href="/">
						<i class="fab fa-facebook"></i>
					</a>
					<a href="/">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="/">
						<i class="fab fa-linkedin"></i>
					</a>
					<a href="/">
						<i class="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutScreen;
