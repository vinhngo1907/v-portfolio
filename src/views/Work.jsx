import VNetwork from "../images/projects/VNetwork.png"
import MusicStream from "../images/projects/MusicStream.png"
// import VchatApp from "../images/projects/VchatApp.png"
import HasuFarm from "../images/projects/HasuFarm.png"
import FmCMS from "../images/projects/FMCMS.png"
import XKA from "../images/projects/XKA.png";
import NguyenVuStore from "../images/projects/NguyenVu.png";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import { useState } from "react";

export default function Work() {

    const [projects] = useState([
        {
            name: "V Network - Social Media",
            description: "An interactive social media platform with real-time messaging, voice/video calls, post creation, reactions, user search, notifications, group chats, stories, nearby people, and boosted ads. Supports basic login and OAuth2.",
            tags: ["NodeJS", "Google", "Facebook", "Twilio", "Mongo", "Socket.io", "Redis", "Cloudinary", "React"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/mern-v-social-media",
                "fas fa-external-link": "#"
            },
            image: VNetwork
        },
        {
            name: "FM - CMS",
            description: "This website enables remote control of local speakers. It also provides customers with user access management and allows them to easily monitor and manage connected devices in real time across different areas.",
            tags: ["Nest", "Mongo", "Socket.io", "PosgreSQL", "Next", "Prisma", "Strapi", "Grafana"],
            links: { "fab fa-github": "#", "fas fa-external-link": "https://dev-fe.hoangthelongtto.vn/" },
            image: FmCMS
        },
        {
            name: "V Music – Listen & Chill",
            description: "A web application for seamless music streaming and management. Users can browse, play, and organize tracks, manage playlists, and react with likes or dislikes.",
            tags: ["NodeJS", "Express", "YouTube Data API", "Mongo"],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/v-music-stream",
                "fas fa-external-link": "https://v-music-stream.onrender.com"
            },
            image: MusicStream
        },
        {
            name: "Hasu Farm",
            description: "HASU Farm is a smart agriculture platform that monitors and manages IoT farm data such as temperature, humidity, and lighting in real time. The system collects sensor data, processes it through a scalable backend, and provides farmers with an intuitive dashboard for tracking and controlling their farm environment efficiently.",
            tags: ["NodeJS", "Express", "Mongo", "MQTT", "React", "Arduino"],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "http://hasufarm.com"
            },
            image: HasuFarm
        },
        {
            name: "XKA - ECommerce Website",
            description: "An e-commerce platform designed to help small and local sports equipment shops easily transition to online business.",
            tags: ["Wordpress", "Next", "Cloudinary", "MySQL", "Docker", "Traefik"],
            links: { "fab fa-github": "#", "fas fa-external-link": "https://xka.vn/" },
            image: XKA
        },
        {
            name: "Nguyen Vu Store",
            description: "Nguyen Vu Store's e-commerce website for online sales provides all the basic functions of an e-commerce website, including online payment.",
            tags: ["Wordpress", "Next", "Cloudinary", "MySQL", "Docker", "Traefik"],
            links: { "fab fa-github": "#", "fas fa-external-link": "https://nguyenvu.store" },
            image: NguyenVuStore
        }
    ])

    return (
        <>
            <div className={"flex flex-col items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>03.</span>
                    <h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>Some Things I've Built</h3>
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
                        title={" V Note App"}
                        description={"Take notes and organize them in folders with real-time updates."}
                        links={{
                            "fab fa-github": "#",
                            "fas fa-external-link": "https://v-note-app.netlify.app"
                        }}
                        tags={["Apollo GraphQL", "NodeJS", "Mongo", "React", "Firebase"]}
                    />
                    <Project
                        title={"Chat Application"}
                        description={"A real-time platform for private chat, calls, and live presence."}
                        links={{
                            "fab fa-github": "https://github.com/vinhngo1907/mern-v-chat-app",
                            "fas fa-external-link": "https://mern-v-chat-app.netlify.app/"
                        }}
                        tags={["NodeJS", "Mongo", "Cloudinary", "Socket", "Redis", "React"]}
                    />
                    <Project
                        title={"Course Manager"}
                        description={"V-Course system which allows you manage your courses"}
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/v-course-manager" }}
                        tags={["Nest", "Postgres", "MinIO", "Prisma", "Postgres", "Next"]}
                    />
                    <Project
                        title={"V Cursor Application"}
                        description={"A small chat system based on a microservices architecture"}
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/v-cursor" }}
                        tags={["Vue", "Nest", "Mongo", "Kafka", "Python"]}
                    />
                    <Project
                        title={"InShare Application"}
                        description={
                            "An app for uploading and sharing files via unique download links."
                        }
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/sevn-inshare-app" }}
                        tags={["Vue", "NodeJS", "Sequelize", "MySQL"]}
                    />
                    {/* <Project
                        title={" Hoang Long OHayO"}
                        description={" A Booking system for hotel, coffee, restaurant, and conference."}
                        links={{
                            "fab fa-github": "#",
                            "fas fa-external-link": "https://ohayodalat.com"
                        }}
                        tags={["Strapi", "Postgres", "Prisma", "FullterFlow", "Next"]}
                    /> */}
                </div>
            </div>
        </>

    )
}
