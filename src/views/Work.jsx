import VNetwork from "../images/projects/VNetwork.png"
import MusicStream from "../images/projects/MusicStream.png"
// import VchatApp from "../images/projects/VchatApp.png"
import HasuFarm from "../images/projects/HasuFarm.png"
import FmCMS from "../images/projects/FMCMS.png"
import XKA from "../images/projects/XKA.png";
import MurrorImage from "../images/projects/MurrorImage.png";
import NguyenVuStore from "../images/projects/NguyenVu.png";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import { useState } from "react";

export default function Work() {

    const [projects] = useState([
        {
            name: "V Network - Social Media",
            description:
                "Freelance Project - An interactive social media platform with real-time messaging, voice/video calls, posts, reactions, notifications, group chats, stories, and OAuth2 login.",
            tags: [
                "Node.js",
                "Google",
                "Facebook",
                "Twilio",
                "MongoDB",
                "Socket.IO",
                "Redis",
                "Cloudinary",
                "React"
            ],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/mern-v-social-media",
                "fas fa-external-link": "https://v-social-media.netlify.app"
            },
            image: VNetwork
        },
        {
            name: "FM - CMS",
            description:
                "Company Project – Backend Developer. Enables remote control of local speakers, user access management, and real-time device monitoring across locations.",
            tags: [
                "NestJS",
                "MongoDB",
                "Socket.io",
                "PostgreSQL",
                "Next.js",
                "Prisma",
                "Strapi",
                "Grafana"
            ],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "https://dev-fe.hoangthelongtto.vn/"
            },
            image: FmCMS
        },
        {
            name: "V Music – Listen & Chill",
            description:
                "Freelance Project - A music streaming platform where users can browse, play, and manage tracks, playlists, and likes.",
            tags: [
                "Node.js",
                "Express.js",
                "YouTube Data API",
                "Auth0",
                "MongoDB"
            ],
            links: {
                "fab fa-github": "https://github.com/vinhngo1907/v-music-stream",
                "fas fa-external-link": "https://v-music-stream.onrender.com"
            },
            image: MusicStream
        },
        {
            name: "Murror App",
            description:
                "Company Project – A mental health mobile platform that builds deep AI conversations to help users explore emotions and personal stories, then transforms those interactions into meaningful psychological insights and self-understanding, supporting ongoing wellbeing after authentic human–AI connection.",
            tags: ["TypeScript", "NestJS", "Supabase", "Deno", "PostgreSQL", "Redis", "RabbitMQ", "Grafana", "Kubernetes"],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "https://apps.apple.com/vn/app/murror-ai/id6741769381",
            },
            image: MurrorImage
        },
        {
            name: "Hasu Farm",
            description:
                "Company Project – Backend Developer. A smart agriculture platform that monitors real-time farm data like temperature, humidity, and lighting, powered by scalable backend and MQTT.",
            tags: ["Node.js", "Express.js", "MongoDB", "MQTT", "React", "Arduino"],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "http://hasufarm.com"
            },
            image: HasuFarm
        },
        {
            name: "XKA - ECommerce Website",
            description:
                "Company Project – Backend Developer. E-commerce platform for local sports shops to sell online effectively.",
            tags: ["Wordpress", "Next.js", "Cloudinary", "MySQL", "Docker", "Traefik"],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "https://xka.vn/"
            },
            image: XKA
        },
        {
            name: "Nguyen Vu Store",
            description:
                "Company Project – Backend Developer. E-commerce website offering essential online shopping and payment features.",
            tags: ["Wordpress", "Next.js", "Cloudinary", "MySQL", "Docker", "Traefik"],
            links: {
                "fab fa-github": "#",
                "fas fa-external-link": "https://nguyenvu.store"
            },
            image: NguyenVuStore
        }
    ]);

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
                        tags={["Apollo GraphQL", "Node.js", "MongoDB", "React", "Firebase"]}
                    />
                    <Project
                        title={"Chat Application"}
                        description={"A real-time platform for private chat, calls, and live presence."}
                        links={{
                            "fab fa-github": "https://github.com/vinhngo1907/mern-v-chat-app",
                            "fas fa-external-link": "https://mern-v-chat-app.netlify.app/"
                        }}
                        tags={["Node.js", "MongoDB", "Cloudinary", "Socket.IO", "Redis", "React"]}
                    />
                    <Project
                        title={"Course Manager"}
                        description={"V-Course system which allows you manage your courses"}
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/v-course-manager" }}
                        tags={["NestJS", "PostgreSQL", "Prisma", "MinIO", "React", "Next.js"]}
                    />
                    <Project
                        title={"V Cursor Application"}
                        description={"A small chat system based on a microservices architecture"}
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/v-cursor" }}
                        tags={["Vue.js", "NestJS", "MongoDB", "Kafka", "Python"]}
                    />
                    <Project
                        title={"InShare Application"}
                        description={
                            "An app for uploading and sharing files via unique download links."
                        }
                        links={{ "fab fa-github": "https://github.com/vinhngo1907/sevn-inshare-app" }}
                        tags={["Vue.js", "Node.js", "Sequelize", "MySQL"]}
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
