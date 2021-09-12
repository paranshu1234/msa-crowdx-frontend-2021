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
            <section className="cta-bottom">
                <h1>Are you ready to take back control?</h1>
                <Link to="/signup" ><PrimaryButton text="Get started" className="cta-btn"/></Link>
            </section>
            <footer>
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
