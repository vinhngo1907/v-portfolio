import VNetwork from "../images/projects/VNetwork.png"
import MusicStream from "../images/projects/MusicStream.png"
import VchatApp from "../images/projects/VchatApp.png"
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import {useState} from "react";

export default function Work() {

    const [projects, setProjects] = useState([
        {
            name: "V Network",
            description: `An interactive social media web application designed to connect users through real-time communication and engaging content. The platform allows users to sign in via basic login or OAuth2 (Facebook, Google, SMS), create and share posts, react with likes, comments, and emojis, and communicate via real-time chat, voice, and video calls. With features like user search, notifications, group chats, 24-hour stories, nearby people, and boosted posts for advertisements, the app offers a comprehensive and modern social media experience.`,
            tags: ["NodeJS", "Express", "MongoDB", "React", "Bootstrap"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/mern-v-social-media", 
                "fas fa-external-link": "#"
            },
            image: VNetwork
        },
        {
            name: "V Music Stream – Listen & Chill",
            description: "A web application designed for streaming and managing music seamlessly. Users can browse, play, and organize their favorite tracks with an intuitive interface. The platform supports real-time playback, playlist management, audio uploads, and user interaction features such as likes and dislikes. Built with scalability and user experience in mind, V Music Stream offers a responsive design and smooth audio streaming for both desktop and mobile users.",  
            tags: ["NodeJS", "Express","HTML", "Javascript", "CSS", "Mongo"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/v-music-stream", 
                "fas fa-external-link": "https://v-music-stream.onrender.com"
            },
            image: MusicStream
        },
        {
            name: "Chat  - Realtime chat app",
            description: "A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) with potential features such as private messaging, group chat, and presence indicators.",
            tags: ["React", "NodeJS", "Cloud Dinary", "Bootstrap", "Mongo"],
            links: {"fab fa-github": "https://github.com/vinhngo1907/mern-v-chat-app",
            "fas fa-external-link": "https://mern-v-chat-app.netlify.app/"},
            image: VchatApp
        }
    ])

    return (
        <>
            <div className={"flex flex-col items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>03.</span><h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>Some Things I've Built</h3>
                </div>
                {
                    projects.map((p, i) => {
                        return <FeaturedProject
                            image={p.image}
                            title={p.name}
                            description={p.description}
                            tags={p.tags}
                            links={p.links}
                            orientation={!(i % 2)}
                        />
                    })
                }
            </div>
            <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
                <div className={"flex flex-col items-center justify-center w-full pb-16"}>
                    <h3 className={"text-2xl slate mb-[10px] font-[600]"}>Other Noteworthy Projects</h3>
                    <a href={"https://github.com/vinhngo1907"} className={"accent text-sm font-monospace"}>view the archive</a>
                </div>
                <div className={"grid md:grid-cols-3 gap-4 w-full"}>
                    <Project
                        title={"Course Manager"}
                        description={"V-Course system which allows you manage your courses"}
                        links={{"fab fa-github": "https://github.com/vinhngo1907/v-course-manager"}}
                        tags={["Nextjs", "Nestjs", "Postgres", "MinIO", "Prisma"]}
                    />
                    <Project
                        title={"Cursor - V cusor application"}
                        description={"A small chat system based on a microservices architecture"}
                        links={{"fab fa-github": "https://github.com/vinhngo1907/v-cursor"}}
                        tags={["Vue", "NestJS", "MongoDB", "Kafka", "Python"]}
                    />
                    <Project
                        title={"Apple Airpods Website Clone"}
                        description={"An attempt to clone Apple's airpods animation by applying lottie animation on a custom a 3D phone model."}
                        links={{"fab fa-github": "https://github.com/vinhngo1907/lottie-animation", "fas fa-external-link": "https://vinhngo1907.github.io/lottie-animation"}}
                        tags={["Lottie Animation", "Javascript", "CSS"]}
                    />
                </div>
            </div>
        </>

    )
}
