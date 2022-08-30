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
						style={{ color: '#5B2F68', fontWeight: '600' }}
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
					<video src="/cathvideo.mp4" controls></video>
					<a
						href="/"
						className="btn btn-primary"
						style={{
							borderRadius: '10px',
							color: '#fff',
							backgroundColor: '#5B2F68',
							marginRight: '1rem',
						}}
					>
						<i className="fas fa-shopping-cart"></i> Buy Now
					</a>
					<a
						href="/about"
						className="btn btn-primary-outline"
						style={{
							borderRadius: '10px',
							color: '#5B2F68',
							backgroundColor: '#fff',
							border: '1px solid #5B2F68',
						}}
					>
						About Catherine
					</a>
				</div>
				<div className="landing-image">
					<img src="/book.png" alt="book image" />
				</div>
			</div>
		</>
	);
}

export default HomeScreen