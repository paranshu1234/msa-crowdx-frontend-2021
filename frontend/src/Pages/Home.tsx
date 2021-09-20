import React from 'react'
import { useGetProjects } from '../hooks/projects/useGetProjects'
import { IIconProps } from '@fluentui/react';
import { DefaultButton, IconButton, PrimaryButton } from '@fluentui/react/lib/Button';
import {
    Link
  } from "react-router-dom";
  
import "./Home.css"

const twitterIcon: IIconProps = { iconName: 'twitter' };
const facebookIcon: IIconProps = { iconName: 'facebook' };
const instagramIcon: IIconProps = { iconName: 'instagram' };
const youtubeIcon: IIconProps = { iconName: 'youtube' };

const Home: React.FC = () => {
    const projects = useGetProjects();
    console.log(projects)


    return (
        <div className="home-page-wrapper">

            <section className="hero">
                <div className="hero-text-wrapper">
                    <div className="hero-header-wrapper">
                        <h1>Change the way art is valued</h1>
                         <p>Let your most passionate fans support your creative work via monthly membership</p>
                    </div>
                    <Link to="/signup" ><DefaultButton text="Get Started" className="hero-btn"/></Link>
                </div>

                <div className="hero-gif-wrapper">
                    <section className="hero-gif"></section>
                </div>
            </section>
            <section className="search-creators">
                <h1>Search the 100,000+ creators on Crowdx</h1>
                <Link to="/creator" ><PrimaryButton text="Find a creator you love" className="find-creator-btn"/></Link>
            </section>
            <section className="crowdx-introduction">
                <div className="intro-contentwrapper">
                    <h1>What's Crowdx?</h1>
                    <p>On Patreon, you can let your fans become active participants in the
                         work they love by offering them a monthly membership. You give them access to exclusive content,
                         community and insight into your creative process. 
                         In exchange, you get the freedom to do your best work and the stability you need 
                         to build an independent creative career.</p>
                </div>         
            </section>
            <section className="testimonials">
                <div className="testimonials-wrapper">
                    <div className="testimonial">
                        <div className="testimonial-description">
                            <h1>Develop a recurring stream income</h1>
                            <p>Stop rolling the dice of ad revenue and per-stream payouts. Get recurring income through monthly payments from your suppoerters.</p>
                        </div>
                        <div className="tesimonial-right">
                        <div className="testimonial-images">
                            <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/mikki_kendallhomepageactual-6.png" alt="images-testimonials"/>
                        </div>
                        <div className="testimonial-name">
                            <h2>Mikki Kendall</h2>
                            <p>writer</p>
                        </div>
                        <div className="testimonial-content">
                            <p>"The reliable monthly income has made it possible for me to spend less time chasing checks and more time creating."</p>
                        </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-left">
                            <div className="testimonial-images">
                                <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/kevonstage.png" alt="images-testimonials"/>
                            </div>
                            <div className="testimonial-name">
                                <h2>KevOnStage</h2>
                                <p>comedian</p>
                            </div>
                            <div className="testimonial-content">
                                <p>“Creative independence means I don’t have to wait for any person or platforms approval to make what I want to make. I create what I want and my audience supports me. There is no middle man.”</p>
                            </div>
                        </div>
                        <div className="testimonial-description">
                            <h1>Take back creative control</h1>
                            <p>Create what you want and what your audience loves. You don’t have to conform to popular taste or the constraints of ad-based monetisation models.</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-description">
                            <h1>Build a direct, meaningful connection with your audience</h1>
                            <p>No ads, no trolls, no algorithms. Enjoy direct access and deeper conversations with the people who matter the most.</p>
                        </div>
                        <div className="testimonial-images">
                            <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/2021-HomepagePhoto-Bexey.png" alt="images-testimonials"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="use-case">
                <h1>Who uses Crowdx?</h1>
                <p>If you’re ready to take your work to the next level and willing to open your heart to your audience, Crowdx is for you.</p>
            </section> */}
            <section className="page-description">
                <h1>It's easier than you think</h1>
                <p>There are many ways to delight your fans and every creator does this in their own way.</p>
                <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2021/01/correcttestcarlos.jpeg" alt="creator" />
            </section>
            <section className="blogs">
                <h1 className="blogs-heading">See how other creators use Crowdx</h1>
                <div className="blog-card-wrapper">
                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/is-patreon-right-for-you_2x.jpg" alt="blog" />
                        </div>
                        <div className="blog-card-title">
                            <h1>Is Crowdx Right For You And Your Business?</h1>
                        </div>
                        <div className="blog-card-description">
                            <p>In this article, we want to introduce you to the membership model—an effective, field-tested way for independent creators...</p>
                        </div>
                        <div className="blog-link">
                            <Link to="/" className="item"><p>Link</p></Link>
                        </div>
                    </div>    
                    
                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/6-membership-based-business_2x.jpg" alt="blog" />
                        </div>
                        <div className="blog-card-title">
                            <h1>6 Membership-based Business Models You Can Use On Patreon Today</h1>
                        </div>
                        <div className="blog-card-description">
                            <p>In this article, we want to introduce you to the membership model—an effective, field-tested way for independent creators...</p>
                        </div>
                        <div className="blog-link">
                            <Link to="/" className="item"><p>Link</p></Link>
                        </div>
                    </div>     
                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/20-most-useful_2x.jpg" alt="blog" />
                        </div>
                        <div className="blog-card-title">
                            <h1>The 20 Most Useful Patreon Features & Integrations</h1>
                        </div>
                        <div className="blog-card-description">
                            <p>In this article, we want to introduce you to the membership model—an effective, field-tested way for independent creators...</p>
                        </div>
                        <div className="blog-link">
                            <Link to="/" className="item"><p>Link</p></Link>
                        </div>
                    </div>     
                </div>
            </section>
            <section className="cta-bottom">
                <h1>Are you ready to take back control?</h1>
                <Link to="/signup" ><PrimaryButton text="Get started" className="cta-btn"/></Link>
            </section>
            <footer className="footer-wrapper">
                <div className="footer-logo-wrapper">
                    <h1>Crowdx</h1>
                    <span><small>&copy; Crowdx</small></span>
                    <small>Sitemap</small>
                    <div className="social-links">
                        <IconButton iconProps={twitterIcon}  className="social-links" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={facebookIcon}  className="social-links" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={instagramIcon}  className="social-links" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={youtubeIcon}  className="social-links" title="Emoji" ariaLabel="Emoji"   />
                    </div>
                    <div className="para-wrapper">
                        <p>600 Townsend Street, Suite 500
                        San Francisco, CA 94103
                        USA
                        Phone: +1 (833) 972-8766</p>
                    </div>
                   
                </div>
                <div className="footer-link-wrapper">
                    <div className="product-category-wrapper category">
                        <h3>Product</h3>
                        <p>Lite</p>
                        <p>Pro</p>
                        <p>Pricing</p>
                    </div>
                
                <div className="for-creator-category-wrapper category">
                        <h3>Creator</h3>
                        <p>Podcasters</p>
                        <p>Video Creators</p>
                        <p>Musicians</p>
                        <p>Visual Artists</p>
                        <p>Gaming Creators</p>
                        <p>Local Businesses</p>
                    </div>

                
                    <div className="Resources-wrapper category">
                        <h3>Resources</h3>
                        <p>Blog</p>
                        <p>App Directory</p>
                    </div>
                
                    <div className="company-wrapper category">
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Press</p>
                        <p>Careers</p>
                        <p>Privacy</p>
                        <p>Policy & Terms</p>
                    </div>

                </div>
               
            </footer>
        </div>
    )
}

export default Home
