export default function SideLinks() {
    return (
        <>
            <ul className={"hidden xl:flex flex-col fixed bottom-0 left-0 items-center px-14 slate after-line text-xl"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://github.com/vinhngo1907"} target={"_blank"} className={"hover-accent hover-displace fab fa-github"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://www.instagram.com/vinhngo9395"} target={"_blank"} className={"hover-accent hover-displace fab fa-instagram"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://linkedin.com/in/henry1907"} target={"_blank"} className={"hover-accent hover-displace fab fa-linkedin"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2 pb-4"}><a href={"https://www.quora.com/profile/Henry-Ngo-89"} target={"_blank"} className={"hover-accent hover-displace fab fa-quora"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2 pb-4"}><a href={"https://leetcode.com/u/vinhngo1907"} target={"_blank"} className={"hover-accent hover-displace fab fa-codepen"} rel="noreferrer" /></li>
            </ul>
            <div className={"slate hidden xl:flex flex-col fixed bottom-0 right-0 items-center px-14 after-line w-fit"}>
                <a href={"mailto:vinhtrungngo1907@gmail.com"} 
                    className={"flex flex-col items-center hover-accent pb-4 hover-displace cursor-pointer font-monospace font-medium tracking-widest"}>
                    {/* <span className={"pb-2 text-xl"}>@</span> */}
                    <span className={"vertical-text opacity-60 text-sm"}>
                        henryngo1907@gmail.com
                    </span>
                </a>
            </div>
        </>
    )
}
