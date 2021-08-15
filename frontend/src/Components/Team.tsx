import React from 'react'
import "./Team.css"
import TeamCard from './TeamCard'


const Team: React.FC = () => {
    return (
        <div>
            <h1>Meet the team</h1>
            <div className="team-card-wrapper">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    )
}

export default Team
