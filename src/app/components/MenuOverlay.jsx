import React from "react"
import NavLink from './NavLink'
import {motion} from "framer-motion"

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
            <motion.li key={index}>
                <NavLink
                  href={link.path} title={link.title}/>
                  initial={{ y: -100, opacity:0}}
                  animate={{y:500, opacity:1}}
            </motion.li>
            ))}
        </ul>
    )
}


export default MenuOverlay