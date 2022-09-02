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
		  </div>
		</>
	);
}

export default HomeScreen
