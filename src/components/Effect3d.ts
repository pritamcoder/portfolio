import gsap from "gsap"

export const handelMOusemove = (event: React.MouseEvent, classname: React.RefObject<HTMLDivElement|HTMLImageElement>) => {

    if (classname.current) {
        const { left, top, width, height } = classname.current?.getBoundingClientRect()
        const x = ((event.clientX - left) / width - .5) * 10
        const y = ((event.clientY - top) / height - .5) * 10

        gsap.to(classname.current, {
            rotateX: x,
            rotateY: y,
            transformPerspective: 1000,
            ease: 'power3.out'
        })
    }
}

export const handelMouseleave = (classname: React.RefObject<HTMLDivElement|HTMLIFrameElement>) => {
    if (classname.current) {
        gsap.to(classname.current, {
            rotateX: 0,
            rotateY: 0,
            ease: "power3.out",
            duration: .5
        })
    }
}



