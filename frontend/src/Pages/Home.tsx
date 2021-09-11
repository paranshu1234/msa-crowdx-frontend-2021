import React from 'react'
import { useGetProjects } from '../hooks/projects/useGetProjects'
import { IIconProps } from '@fluentui/react';
import { IconButton } from '@fluentui/react/lib/Button';
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

            <h1>Home</h1>
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
