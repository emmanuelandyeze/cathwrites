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
					  <img src="/blog/2.jpeg" alt="" />
					  {/* <h4>Uneasy lies ahead</h4> */}
					  <p>
						  To think of words as shapes, and feelings as lines. Or better still, to swap the both. So here I go, first it's cursive; with a smooth uninterrupted flow, displaying the thousand beauties of good penmanship. And then it's zigzag, like the unsettled heartbeats of a man in trouble. So scattered, disheveled and done in great haste. And then it is a square, being tried to fit in a round hole. And then it's the sides of a trapezium, I remember the formula ½(a+b)h?

And then it is sinusoidal as a little rhythm seems to be added. A little bit of consistency, and uninterrupted flow again. And back to the zigzag, with truncated triangles of patterned randomness. To live like a triangle they say, a triangle enmeshed in sinusoidal lines. A triangle wrapped in zigzags. A cursive interjected by zigzags. To flow with a rhythm, and have no pattern still. To be as beautiful as a cursive, but as irregular as a zigzag and inconsistently so. To be round like a circle, yet a bit boring like a triangle. To move in a vacuum, as no space seems to be occupied. To be like the wind, felt but never held. To never be a tree, rooted and always found in a spot. To stare at the roof, wondering how on earth I thought lines and shapes could ever replace words and feelings. (A snippet from: Igloo,in my hood)
					  </p>
				  </div>
				  <div className="blog-card">
					  <img src="/blog/11.jpeg" alt="" />
					  <p>
						  Again, the tale that has no end. Intentions long discarded, motions borne of necessity. To live without a soul, like a shoe with no sole, trudging through the mud, and having feet soggy with undesirable layers of clay. Speed slowed, deceleration so long lasting no measurements are taken. If the mind had a name, it would be the home of intentions. Intentions so deep, words long sought, yet unfound and never to be found. 
Again, intentions long discarded, left are motions, motions in circles, in squares, in rectangles,trapeziums, and often like the zigzag motion of the mad man who has no soul. 
Words must never have a definite meaning, as meanings can be found in gestures like a nod of the head, an eyebrow raised, or the cloak of silence that speaks louder than words of a thousand misunderstood intents. To live like a hermit, deep in the cave of self isolation,reflections so often revisited and rumpled with ratiocination, wearied like the leaves of a wind battered tree,cascading down in form of tears,as the mind has reached its climax,and as always,words cannot suffice so tears do.
(Snippet from Igloo:In my hood)
					  </p>
				  </div>
			  </div>
		  </div>

		  <div className="blog-post">
			  <div className="blog-cards">
				  
				  <div className="blog-card">
					  <img src="/blog/12.jpeg" alt="" />
					  {/* <h4>Uneasy lies ahead</h4> */}
					  <p>
						  And She whispered to my raging heart 
"Just like the palm tree,
 Grow so tall and farther away from uncertainties. 
Take your roots deeper,
 Take your branches higher, 
Though they may whither with the most unfavourable weathers,
 Still spread them. 
This heart was made for the wild,
So grab it, with every single strength you have left. 
You dreamt of the stars?
 Go get them! 
You envisaged the sweet carcass of the whirlwind? 
Then let it blow those withered branches off. 
Grow Young heart. 
Grow into the blue sky. 
Though you stand alone,
 Remember that alone is not always ab-norm. 
You were made to grow, so grow." 
 
And I replied
 "Your words are the igloos I ever found the safest warmth.
 I'll soak in them,
Till my cold nerves shiver no more.
 I love your warmth. 
It's the place of my tranquillity.
Again I said,
 "I'll soak in your words".
					  </p>
				  </div>
				  <div className="blog-card">
					  <img src="/blog/13.jpeg" alt="" />
					  {/* <h4>Uneasy lies the head</h4> */}
					  <p>
						  And if my heart be troubled, in need of some temporal calm. 
And if my heart be bored, in need for some new scenes 
And if need be that I receive some psychological relief, 
May I find them in the pages of a book. 

May i flip through different scenarios, 
And live in the worlds books afford you. 
The ability to be yet not be,
To smile in a world not yours, and be too many a character you aren't.  

If perhaps I miss my friends 
Reminiscence therefore the very haven of my emotional safety 
May I find solace in the arms of my best reads 
And smile with satisfaction at the companionship of such mentally dogeared pages. 

And perhaps I fall out with my love,
And words cannot be said, and calls not be made. 
May I fall into the arms of my best lines, 
As I think on days when there was no love lost 

If perhaps I need some calm,
Some break from the immediate environ,
May I sit still, and let the breeze remind me
Of a line in a book long read, whose significance is momentarily irrelevant. 

If I miss home, my demised parents, and a childhood long gone. 
May I rest on the wings of the colourful pages of my bedtime stories,
As my mind flips through the pages of the girl who slept on the heap of hay. 
May I smile with fulfilment, I had a good childhood, one filled with books. 

And if I get weary of human interactions, 
Needing some space for 'being' at the time being 
May I find them on the pages of a new read, wrapped in the adventure and discovery it affords  

And perhaps if this poem is ever relatable,
Of the love, relief, emotional attachment books and words have become to me
May it deepen my love for words and quest for knowledge 
And may I find more calm and solace on the pages of a book. 

(Snippet from: Pass me a book,I wanna hibernate)
					  </p>
				  </div>
			  </div>
		  </div>
		</>
	);
}

export default HomeScreen
