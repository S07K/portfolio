import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const animate = {
    vertical: {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
    },
    horizontal: {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 }
    }
}

const Reveal = ({ children, type = "vertical" }) => {
    const mainControls = useAnimation()
    const ref = useRef()
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [inView])

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <motion.div
                variants={animate[type]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )

}

export default Reveal