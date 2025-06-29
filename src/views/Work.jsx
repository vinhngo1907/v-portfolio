import VNetwork from "../images/projects/VNetwork.png"
import MusicStream from "../images/projects/MusicStream.png"
import VchatApp from "../images/projects/VchatApp.png"
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import {useState} from "react";

export default function Work() {

    const [projects] = useState([
        {
            name: "V Network - Social Media",
            description: `An interactive social media web application designed to connect users through real-time communication and engaging content. The platform allows users to sign in via basic login or OAuth2 (Facebook, Google, SMS), create and share posts, react with likes, comments, and emojis, and communicate via real-time chat, voice, and video calls. With features like user search, notifications, group chats, 24-hour stories, nearby people, and boosted posts for advertisements, the app offers a comprehensive and modern social media experience.`,
            tags: ["NodeJS", "Express", "Mongo", "React", "Bootstrap"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/mern-v-social-media", 
                "fas fa-external-link": "#"
            },
            image: VNetwork
        },
        {
            name: "V Music – Listen & Chill",
            description: "A web application designed for streaming and managing music seamlessly. Users can browse, play, and organize their favorite tracks with an intuitive interface. The platform supports real-time playback, playlist management, audio uploads, and user interaction features such as likes and dislikes. Built with scalability and user experience in mind, V Music Stream offers a responsive design and smooth audio streaming for both desktop and mobile users.",  
            tags: ["NodeJS", "Express","HTML", "Javascript", "CSS", "Mongo"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/v-music-stream", 
                "fas fa-external-link": "https://v-music-stream.onrender.com"
            },
            image: MusicStream
        },
        {
            name: "V Talk - Realtime chat",
            description: "a real-time communication platform that supports private conversations, call functionalities (audio/video), and presence tracking, ensuring users can seamlessly connect and see each other’s availability in real time.",
            tags: ["React", "NodeJS", "Cloudinary", "Mongo", "Socket.io", "Redis"],
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
                        tags={["Next", "Nest", "Postgres", "MinIO", "Prisma"]}
                    />
                    <Project
                        title={"V Cursor Application"}
                        description={"A small chat system based on a microservices architecture"}
                        links={{"fab fa-github": "https://github.com/vinhngo1907/v-cursor"}}
                        tags={["Vue", "Nest", "Mongo", "Kafka", "Python"]}
                    />
                    <Project
                        title={"InShare Application"}
                        description={
                            "An app for uploading and sharing files via unique download links."
                        }
                        links={{"fab fa-github": "https://github.com/vinhngo1907/sevn-inshare-app", "fas fa-external-link": "#"}}
                        tags={["Vue", "NodeJS", "Sequelize", "MySQL"]}
                    />
                </div>
            </div>
        </>

    )
}
