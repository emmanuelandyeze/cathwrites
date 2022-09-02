import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import './homescreen.css'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
		<>
			<Meta />
			<div
				className="landing"
				style={{ fontFamily: 'Open Sans' }}
			>
				<div className="landing-text">
					<p
						style={{ color: '#fff', fontWeight: '600' }}
					>
						Latest release
					</p>
					<div className="mobile-landing-image">
						<img src="/book.png" alt="book image" />
					</div>
					<h1>When Love Howls</h1>
					<p
						style={{
							textTransform: 'none',
							fontWeight: '500',
							fontSize: '.8rem',
							fontFamily: 'Open Sans',
						}}
					>
						Michelle Castone discovers some mysteries about
						her secret boyfriend. When her boss asks her to
						join a mission- she joins out of honour, but
						will her secret love survive the turbulence of
						it all? Will Michelle follow her heart or will
						reason win when she finds more than she expects?
						When Love Howls is a story of love, secrets,
						hard decisions and werewolves.
					</p>
					
					<a
						href="/product/630df9ffdfc91d2f24e8a308"
						className="btn btn-primary"
						style={{
							
							borderRadius: '10px',
							color: '#5B2F68',
							backgroundColor: '#fff',
							border: '1px solid #5B2F68',
							marginRight: '1rem',
						}}
					>
						<i className="fas fa-shopping-cart"></i> Get
						Hard Copy
					</a>
					<a
						href="https://www.amazon.com/When-Love-Howls-Idam-Ugboaku-ebook/dp/B0BCKJL8BG/ref=mp_s_a_1_1?crid=3REEAPILONJIZ&keywords=When+Love+Howls&qid=1662105130&sprefix=when+love+howls%2Caps%2C335&sr=8-1"
						className="btn btn-primary-outline"
						style={{
							borderRadius: '10px',
							color: '#fff',
							backgroundColor: '#5B2F68',
							
							border: '1px solid #fff'
						}}
						target="_blank"
					>
						<i className="fas fa-shopping-cart"></i> Buy on
						Amazon
					</a>
				</div>
				<div className="landing-image">
					<img src="/book.png" alt="book image" />
				</div>
		  </div>
		  <div className="about-book">
			  <video src="/cathvideo.mp4" controls></video>
			  <div className='about-text'>
				  <p>
					  This is one book that managed to hold my attention till the end despite the fact it belongs to the fantasy Genre , which I have honestly never been a fan of. It completely blew my mind. It managed to surpass my high expectations AND be nothing at all like I expected.

This is Catherine’s  first novel, but she has complete control of her story and her style.
She paints on a grand canvas, boldly and confidently… This is a very funny, warm , soul-gripping and moving book. The cast of characters are excellent. We all want a Ransel now (wink wink) , after all “when Love Howls , One has to answer!”

Looking forward to reading more of her works.
				  </p>
				  <p>Dumebi Onyetube</p>
			  </div>
		  </div>
		  <div className="blog-post">
			  <div className="blog-cards">
				  <div className="blog-card">
					  <img src="/blog/3.jpeg" alt="" />
					  <h4>Uneasy lies ahead</h4>
					  <p>
						  I no lie gv u, tru tru, I no go skul. I begin dey go de 1 wey dey my area, buh de tin tire me n I Kum stopam. 4 klass, al de smal smal pikin dem dey cal me PapaLohloh, some dey cal mi Itiboribo. How my mama go tell me wey dey 9 years, make I stay for primary 1? bcuz wen I bin sopoz dey dat klas, my papa cum dey weak 4 em bodi, n I no fit go skul agen. 

Na 19 wey I dey nw. I no fit enter Js1. I no dey pas de ekzam wey go gree mi make I entaram. Dem dey call am komon entranz, buh na lie, e no komon at al. De tin hard mi die. 

Dis weebarro wey I dey push for market, na em I laik pass. I fit make 3500 if maket dey. 2dey maket no de, na Sonday, n pipo no kom buy plenti plenti tins. 

Wen I dey praimari 3, our tisha tuk say "Uneazi lies de head dat wheres de krown". She tuk say pesin wey dey do boss, no dey res. 
Buh I no be king, I no get any krown. Na mi dey oganiz al de boiz wey dey push weebarro 4 dis aria. True tuk, my head no dey res. Honga dey kash me, my head dey pain mi. Upon tuk say na be be boss for dis aria I no go lie giv u, hozul 4 dis strit dey had. Ahlis de head wey my english tisha tuk geh crown, e fit sell am geh money. I no geh any1, I no evn geh moni bahba head wey de krown go dey on top. Hunga dey wire mi walai.
(Snippets from Blakboi:Lord of the streets. Muse:Reverbbeats)
					  </p>
				  </div>
				  <div className="blog-card">
					  <img src="/blog/2.jpeg" alt="" />
					  {/* <h4>Uneasy lies ahead</h4> */}
					  <p>
						  An optical illusion. It's there but not there. Delusion and little bright hallucinations! Then seizures, sending rapid sensations down my spine. Then the colour wheel... who invented such stereotypes? Why can't orange be a primary colour? Unnecessary standards put in place by someone who is probably dead. Physics and quantum leaps. Chemistry and the unbalanceable emotions of a young girl in love,who is in a hurry to be under the melina tree. 

The old man and his tired stick. The mad woman who never stops soliloquising. Cars moving too fast.

 Children who never get tired of playing. Then the blue sky, acting like mother nature. 

Our ever present canopy..... smile on me blue sky! I'm tired, and in dire need of bottled water🤦🏼‍♀🤦🏼‍♀🤦🏼‍♀
					  </p>
				  </div>
			  </div>
		  </div>
		</>
	);
}

export default HomeScreen
