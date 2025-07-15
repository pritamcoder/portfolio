interface Projectdata {
    tittle: string;
    description: string;
    icons: string[];
    image: string;
    siturl: string;
    gradient: [string, string]
}
export const Projectdata: Projectdata[] = [
    {
        tittle: "candel selling website",
        description: "A stylish candle-selling website with an intuitive shopping experience and a secure admin panel for managing products, orders, and customers.",
        icons: ["/icons/nextjs.png", "/icons/typescript.png", "/icons/mongodb.png", "/icons/tailwind-css.png", "/icons/reduex.png"],
        image: "/projectimage/candel.png",
        siturl: "#",
        gradient: ['#96a38a', '#8cb864']
    },

    {
        tittle: "task managment websit",
        description: "A modern project management website with real-time updates, task tracking, and team collaboration tools. Designed with a clean interface to help individuals and teams stay organized and boost productivity.",
        icons: [],
        image: "/image/onetask.png",
        siturl: "#",
        gradient: ['#ff0f7b', '#f89b29']
    },

    {
        tittle: "youtube clone",
        description: "Created a YouTube clone with video upload, streaming, and user login.Built using [your tech stack] with a clean, responsive design.Replicates core YouTube features with focus on performance.",
        icons: ["/icons/nextjs.png", "/icons/typescript.png", "/icons/mongodb.png", "/icons/tailwind-css.png", "/icons/reduex.png"],
        image: "/projectimage/youtub.png",
        siturl: "#",
        gradient: ['#0061ff', '#60efff']
    }

]

export const icon = [
    { icon: "/icons/bootstrap.png", text: "bootstrap" },
    { icon: "/icons/css.png", text: "css" },
    { icon: "/icons/git.png", text: "git" },
    { icon: "/icons/github.png", text: "SQL" },
    { icon: "/icons/gsap.png", text: "gsap" },
    { icon: "/icons/html.png", text: "html" },
    { icon: "/icons/js.png", text: "javascript" },
    { icon: "/icons/typescript.png", text: "typescript" },
    { icon: "/icons/tailwind-css.png", text: "tailwind-css" },
    { icon: "/icons/nextjs.png", text: "next js" },
    { icon: "/icons/react.png", text: "react" },
    { icon: "/icons/nodejs.png", text: "node js" },
    { icon: "/icons/reduex.png", text: "redux" },
    { icon: "/icons/shadcn.png", text: "shadcn" },
    { icon: "/icons/mongodb.png", text: "mongodb" },
]