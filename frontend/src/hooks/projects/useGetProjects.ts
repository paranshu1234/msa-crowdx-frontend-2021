import { gql, useQuery } from "@apollo/client"

const GET_PROJECTS = gql`
    query {
        projects {
         nodes {
             name
            }
        }
    }
`

export const useGetProjects = () => {
    const { data } = useQuery(GET_PROJECTS)
    return data?.projects?.nodes
}