import React from 'react'
import { useGetProjects } from '../hooks/projects/useGetProjects'

const Home: React.FC = () => {
    const projects = useGetProjects();
    console.log(projects)


    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
