import * as React from "react";

export interface IProjects {
    id: string,
    title: string,
    cover: string,
    images: string[] | undefined,
    description: string,
    technologies: string[],
    link: string,
    repo: string,
}

export default function useFetch() {
    const [data, setData] = React.useState<IProjects[] | undefined>()

    React.useEffect(() => {
        const url =  "/utils/projects.json"

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setData(data)

        console.log(data)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData();
        },
        [])

    return [data]
}