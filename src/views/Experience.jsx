import { useState } from "react";

export default function Experience() {

    const [work] = useState({
        "Murror AI Inc": {
            url: " https://www.murror.app/",
            position: "Software Engineer",
            duration: "(Jul 2025 – Dec 2025)",
            content: [
                "Collaborated with Product, UI/UX, AI (Python), Frontend, and Business teams to align requirements and deliver backend features.",
                "Built real-time socket servers for mobile data exchange.",
                "Developed a custom serverless API gateway using Supabase Edge Functions (Deno runtime), Auth, and Storage.",
                "Engineered and optimized APIs across NestJS and Supabase Edge Functions (Deno runtime) for Frontend, and internal AI services.",
                "Delivered personalized user data to AI pipelines via RabbitMQ (RAG-lite)",
                "Implemented background scheduling with BullMQ (Redis) and notifications via OneSignal.",
                "Set up monitoring and alerting using Grafana and Prometheus.",
                "Supported GitHub Actions CI/CD pipelines with Kubernetes deployment and kubectl-based namespace monitoring.",
                "Use: TypeScript, NestJS, Deno, Python, Supabase, PostgreSQL, Redis, RabbitMQ, GitHub, Jira, Figma, Docker, LLMs, Prisma, Grafana, Kubernetes(K8S), OneSignal."
            ]
        },
        "LizAI Technology Corporation": {
            url: "https://www.lizai.co/",
            position: "Software Engineer",
            duration: "Aug 2023 - May 2025",
            content: [
                "Received requirements from the Site Head and executed tasks assigned by respective team leads (NodeJS, Python and .Net). ",
                "Built a scalable distributed crawler system using microservices, RabbitMQ for communication, and AWS Lambda for event-driven processing. Stored data in MySQL and indexed with Elasticsearch. Deployed services with Docker and Docker Compose.",
                "Extracted and preprocessed data from Excel, CSV, and images (OCR) to support training of machine learning models for language translation (Vietnamese to English).",
                "Developed a real-time data synchronization module for MySQL, PostgreSQL, MongoDB, and MSSQL using Kafka and Debezium for Change Data Capture (CDC).",
                "Use: NodeJS, .NET, Python, RabbitMQ, Kafka, Debezium, MySQL, PostgreSQL, MongoDB, MSSQL, Elasticsearch, Docker, AWS, MinIO, Jira, Bitbucket."
            ]
        },
        "TekNix Technology Corporation": {
            url: "https://www.teknix.vn/",
            position: "Backend Developer",
            duration: "Sep 2022 - Jun 2023",
            content: [
                `Built a real-time socket server (NestJS, Socket.IO, MongoDB, Prisma) to communicate with Android TV Boxes (FlutterFlow app) and execute scheduled media (video, audio, TTS) playback.`,
                "Integrated with Strapi CMS APIs (PostgreSQL, Prisma) to manage users, media uploads (AWS S3), TTS content, schedules, and location data (provinces, districts, communes).",
                "The socket server consumed data from Strapi to send real-time commands to TV Boxes, ensuring accurate content delivery based on user-defined schedules.",
                "Created cron jobs to log blockchain transactions into Elasticsearch (Docker) and visualize logs using Grafana.",
                "Containerized services with Docker, used GitHub for version control, and managed tasks via Jira.",
                "Use: NestJS, Socket.IO, NodeJS, Prisma, MongoDB, PostgreSQL, Strapi CMS, AWS S3, Elasticsearch, Docker, Grafana, GitHub, Jira."
            ]
        },
        "Hau Giang Agricultural Solutions": {
            url: "http://hasufarm.com",
            position: "Backend Developer",
            duration: "Mar - Aug 2022",
            content: [
                "Developed scalable backend services using NodeJS and Express to support a smart farming platform, enabling automation and remote control of environmental conditions.",
                "Integrated MQTT protocol for real-time communication between IoT devices and the backend system, collecting and controlling data related to temperature, humidity, and lighting.",
                "Collaborated with the frontend team to implement key features such as authentication, search, filtering, and pagination, enhancing the usability of the dashboard.",
                "Designed and managed data storage using MongoDB for efficient retrieval and scalability.",
                "Use: NodeJS, Express, MongoDB, MQTT, React, Redmine, GitLab."
            ]
        },
        "Maysoft Technology Solutions": {
            url: "https://maysoft.io/",
            position: "Intership",
            duration: "Jun - Oct 2021",
            content: [
                "Researched APIs and worked with databases.",
                "Developed and fixed frontend features.",
                "Learned tools for source code management (e.g., Git).",
                "Use: NodeJS, ExpressJS, ReactJS, React Native and Git."
            ]
        }
    })

    // const [certifications, setCertifications] = useState({
    //     "Automating Real-World Tasks with Python": {
    //         url: "https://coursera.org/share/3d778b5a6dd8449da384fdd30f99a296",
    //         provider: "Google & Coursera",
    //         font: "google"
    //     },
    //     "From Data to Insights with Google Cloud": {
    //         url: "https://www.coursera.org/account/accomplishments/specialization/LHTMWADX74T6",
    //         provider: "Google & Coursera",
    //         font: "google"
    //     },
    //     "Data Analysis with Python": {
    //         url: "https://www.freecodecamp.org/certification/vinhngo1907/data-analysis-with-python-v7",
    //         provider: "FreeCodeCamp",
    //         font: "free-code-camp"
    //     },
    //     "Scientific Computing with Python": {
    //         url: "https://www.freecodecamp.org/certification/vinhngo1907/scientific-computing-with-python-v7",
    //         provider: "FreeCodeCamp",
    //         font: "free-code-camp"
    //     },
    //     "JavaScript Algorithms and Data Structures": {
    //         url: "https://www.freecodecamp.org/certification/vinhngo1907/javascript-algorithms-and-data-structures",
    //         provider: "FreeCodeCamp",
    //         font: "free-code-camp"
    //     },
    //     "Responsive Web Design": {
    //         url: "https://www.freecodecamp.org/certification/vinhngo1907/responsive-web-design",
    //         provider: "FreeCodeCamp",
    //         font: "free-code-camp"
    //     }
    // })

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span
                        className={"text-[22px] whitespace-nowrap slate font-Poppins font-[600]"}>
                        Experience & Achievements
                    </span>
                </div>
                <p className={"dark-slate w-full mb-2 leading-7"}>
                    I am a Software Engineer with over 5 years of experience in Node.JS, have knowledge in Web Development, Object-Oriented, and Networking.
                    Constantly learning to improve programming knowledge to develop professional skills and have a passion for learning new languages, and technologies.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    I've built full stack web applications using a variety of frameworks such as
                    <a href={"https://expressjs.com/"} target={"_blank"} rel="noreferrer"> ExpressJS</a> and
                    <a href={"https://nodejs.org/en"} target={"_blank"} rel="noreferrer"> NodeJS</a> in JavaScript,
                    along with frontend libraries like React. I’ve worked with RESTful APIs, containerization tools like Docker,
                    and integrated Google services like OAuth login, YouTube Analytics, and Gmail API.
                </p>


                <div className={"flex flex-col md:flex-row w-full mt-12"}>
                    <ul className={"flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <li onClick={() => setActiveTab(i)}
                                    className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${activeTab === i ? "active-item" : ""}`}>{k}</li>
                            })
                        }
                    </ul>
                    <div className={"p-2"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <div className={`${activeTab === i ? "" : "hidden"}`}>
                                    <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                                        <span className={"slate mr-2"}>{work[k].position}</span><a href={work[k].url}
                                            className={"accent"}>@ {k}</a>
                                    </div>
                                    <span className={"slate text-sm font-monospace"}>{work[k].duration}</span>
                                    <ul className={"flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 text-sm"}>
                                        {
                                            Object.values(work[k].content).map((v) => <li className={"mb-2 text-justify"}>{v}</li>)
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
                {/* <div className={"flex items-center justify-center w-full pt-28 pb-8"}>
                    <h3 className={"text-2xl slate font-[600]"}>Certifications</h3>
                </div>
                <ul className={"flex w-full flex-col text-md slate font-monospace cert-list"}>
                    {
                        Object.keys(certifications).map((k, i) => {
                            return <li onClick={() => setActiveTab(i)} className={`p-3 px-6 cursor-pointer`}>
                                <a href={certifications[k].url} target={"_blank"} rel="noreferrer">
                                    <i className={`mr-4 w-[20px] text-center accent fab fa-${certifications[k].font}`} />
                                    <span>{k}</span>
                                    <span
                                        className={"ml-2 hidden md:block text-sm slate-alt"}>- {certifications[k].provider}</span>
                                </a>
                            </li>
                        })
                    }
                </ul> */}
            </div>
        </>
    )
}
