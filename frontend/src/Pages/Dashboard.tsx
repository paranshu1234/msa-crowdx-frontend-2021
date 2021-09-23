import { PrimaryButton } from '@fluentui/react/lib/Button'
import { DefaultEffects } from '@fluentui/react/lib/Styling'
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { Separator } from '@fluentui/react/lib/Separator';
import "./Dashboard.css"


const examplePersona: IPersonaSharedProps = {
    imageUrl: 'https://lh3.googleusercontent.com/ogw/ADea4I4m4w-wrbRDy9TnlII-tgvmmTlRA64wqYHe_MklEQ=s128-c-mo',
    imageInitials: 'AL',
  };

  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
  };

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-page-wrapper">
            <div className="dashboard-content-wrapper">
                <div className="dashboard-profile-card dashboard-items" style={{ boxShadow: DefaultEffects.elevation8 }}>
                    <div className="dashboard-profile-card-header">
                        <Persona
                            {...examplePersona}
                            size={PersonaSize.size100}
                            presence={PersonaPresence.none}
                            hidePersonaDetails={true}
                            imageAlt="Creator-card-img"
                        />
                        <h4>Paranshu Makwana</h4>
                    </div>
                   <div className="dashboard-profile-card-text">
                       <Separator />
                        <h4>SUPPORTING</h4>

                       <p>You aren’t supporting any creators yet.</p>
                   </div>
                </div>
                <div className="dashboard-posts dashboard-items" style={{ boxShadow: DefaultEffects.elevation8 }}>
                        <Pivot aria-label="Basic Pivot Example">
                            <PivotItem
                                headerText="All posts"
                                headerButtonProps={{
                                'data-order': 1,
                                'data-title': 'My Files Title',
                                }}
                            >
                                <Label styles={labelStyles}>You don't have any posts yet.</Label>
                            </PivotItem>
                            <PivotItem headerText="Crowdx-only posts">
                                <Label styles={labelStyles}>You don't have any posts yet.</Label>
                            </PivotItem>
                         </Pivot>
                         <div className="no-posts-display-wrapper">
                             <p className="no-posts-item"><strong>Support</strong>  or <strong>follow</strong> creators to see posts in your feed.</p>
                             <Link to="/creator">
                                <PrimaryButton text="Find creators you love" className="dashboard-no-posts-btn no-posts-item"  allowDisabledFocus />
                             </Link>
                            <div className="dashboard-posts-image-wrapper no-posts-item">
                                <img src="https://c5.patreon.com/external/home/empty-stream-illustration.png" alt="illustration" />
                            </div>
                         </div>
                    
                </div>
                <div className="dashboard-creators dashboard-items">
                    <div className="creator-card" style={{ boxShadow: DefaultEffects.elevation8 }}>
                        <h4>BECOME A CREATOR</h4>
                        <Separator />
                        <p>You're almost there! Start your page and take it live.</p>
                        <Link to="/dashboard">
                            <PrimaryButton text="Become a creator" className="creator-card-btn"  allowDisabledFocus />
                        </Link>
                    </div>
                    <div className="creator-card" style={{ boxShadow: DefaultEffects.elevation8 }}>
                        <h4>FIND CREATORS YOU LOVE</h4>
                        <Separator />
                        <p>The creators you already love may be on Crowdx – connect your social media to find them.</p>
                        <Link to="/creator">
                            <PrimaryButton text="Find creators" className="creator-card-btn"  allowDisabledFocus />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
