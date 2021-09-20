import React from 'react'
import SupportCard from '../Components/SupportCard'
// import Team from '../Components/Team'
import { DefaultEffects, IconButton, IIconProps, PrimaryButton } from '@fluentui/react';
import "./Creator.css"
import PostCard from '../Components/PostCard';

const twitterIcon: IIconProps = { iconName: 'twitter' };
const facebookIcon: IIconProps = { iconName: 'facebook' };
const instagramIcon: IIconProps = { iconName: 'instagram' };
const youtubeIcon: IIconProps = { iconName: 'youtube' };

const Creator: React.FC = () => {
    return (
        <div className="creator-page-wrapper">
           <div className="cover-img-wrapper">
               <img src="https://c10.patreonusercontent.com/3/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/patreon-media/p/campaign/1229175/fd4f2001b1b64fb1a47287fee5a23918/2.png?token-time=1633305600&token-hash=yB8o47w0KHqMqnQFb8hWu6SmQWI2LxbmGsdqZTjCkk4%3D" alt="creator-cover" />
           </div>
           <section className="creator-profile-area">
                    <div className="creator-profile-content-wrapper">
                            <div className="profile-img-wrapper">
                                    <img src="https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/1229175/072be813c14a4167997660579600b432/1.jpg?token-time=2145916800&token-hash=tgp9YcLct0_21hOKA7snJ1qxAb9SckO9k3Ilodz8MT8%3D" alt="creatoe-profile" />
                            </div>
                            <div className="creator-profile-right-wrapper">
                                <div className="creator-profile-text-wrapper">
                                    <h1>SuperMega</h1>
                                    <p>is creating comedy videos, podcasts, and more!</p>
                                </div>
                                <div className="creator-follow-btn-wrapper">
                                    <PrimaryButton text="Follow" className="creator-follow-btn" allowDisabledFocus />
                                </div>
                            </div>
                    </div>
           </section>
           <section className="creator-info-wrapper">
               <div className="creator-info-items-wrapper">
                    <h4>Suppporters</h4>
                    <p>281</p>
               </div>
             
               <div className="creator-info-items-wrapper">
                    <h4>Per month</h4>
                    <p>$3,490</p>
               </div>
               <div className="creator-info-items-wrapper">
                    <h4>Raised total</h4>
                    <p>$29,250</p>
               </div>
               <div className="creator-info-items-wrapper">
                    <h4>Expires</h4>
                    <p>June 13, 2020</p>
               </div>
           </section>
           <section className="creator-bottom-content">
               <div className="creator-left-content-wrapper">
               <section className="creator-about-wrapper">
               <h1>About</h1>
                <p>SuperMega is a variety YouTube channel, delivering weekly let's plays, podcasts, and live action videos.</p>
               <p>By becoming a patron, you're helping us to create and that means the world to us.
                    We'd be nothing without you guys, and the love and support you guys pour out keeps us going.
                    You're helping us to pay the bills and continue to get better at what we do by perfecting our craft and affording new equipment. 
                    Even if you aren't a patron, from the bottom of our hearts we say thank you!</p>
           </section>

            <section className="creator-goals-wrapper">
                <h1>Goals</h1>
                <div className="goal-card" style={{ boxShadow: DefaultEffects.elevation8 }}>
                    <p>Matt and Ryan get to use Patreon money to
                     get a $20 gift card of their choice! Applebee's? Facebook Game Credits? The possibilities are endless.</p> 
                    
                    <p><strong>$1440 raised of $2,500 monthly goal</strong></p>
                </div>
                <div className="goal-card" style={{ boxShadow: DefaultEffects.elevation8 }}>
                    <p>Matt buys Jackson a <strong>Prowler</strong>  and matching trailer.
                    Note, that this goal MUST be completed before the end of 2020!</p> 
                    
                    <p><strong>$1440 raised of $5,200 monthly goal</strong></p>
                </div>
            </section>

            <section className="creator-post-section">
                <h1>Recent Posts by SuperMega</h1>
                <PostCard />
            </section>
               </div>
           
            <section className="creator-right-content">
            <div className="creator-content-wrapper">
                <div className="support-group-wrapper">
                    <SupportCard />
                    <SupportCard />
                    <SupportCard />
                <div className="share-links">
                    <h4>Share this fundraiser</h4>
                        <IconButton iconProps={twitterIcon}  className="social" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={facebookIcon}  className="social" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={instagramIcon}  className="social" title="Emoji" ariaLabel="Emoji"   />
                        <IconButton iconProps={youtubeIcon}  className="social" title="Emoji" ariaLabel="Emoji"   />
                </div>
               
            </div>
            </div>
            </section>
           </section>
         
           
        </div>
    )
}

export default Creator
