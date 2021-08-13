import React from 'react'
import SupportCard from '../Components/SupportCard'
import Team from '../Components/Team'

const Creator: React.FC = () => {
    return (
        <div className="creator-page-wrapper">
           <div className="cover-img-wrapper"></div>
            <div className="profile-img"></div>
            <div className="support-group-wrapper">
                <SupportCard />
                <SupportCard />
                <SupportCard />
                <Team />
            </div>
        </div>
    )
}

export default Creator
