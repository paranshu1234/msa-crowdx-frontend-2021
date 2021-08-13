import React from 'react'
import SupportCard from '../Components/SupportCard'

const Creator: React.FC = () => {
    return (
        <div className="creator-page-wrapper">
           <div className="cover-img-wrapper"></div>
            <div className="profile-img"></div>
            <div className="support-group-wrapper">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>
        </div>
    )
}

export default Creator
