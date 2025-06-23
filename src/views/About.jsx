export default function About() {
    return (
        <>
            <div className={"flex flex-col text-md text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>01.</span><span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About me</span>
                </div>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Hello! My name is Henry and I enjoy creating things that live on the internet and helps out people. My interest in programming grew back in 2017 when I decided to write a blog, lack of good themes on the platform and thinking lot of people will read my blog I decided to make my own templates — turns out customizing blogger templates and creating new from scratch taught me a lot about the whole front end world.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    I started my journey with JavaScript and have since added technologies like Node.js, Express, React, Next.js, NestJS, PostgreSQL, MongoDB, and MySQL to my skill set. With experience in both frontend and backend development, I’m continuously improving as a full stack developer while exploring scalable system design and staying updated with modern web technologies.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                    <li>Javascript (ES6+)</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Postgres</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>NestJS</li>
                    <li>NextJS</li>

                </ul>
            </div>
        </>
    )
}
