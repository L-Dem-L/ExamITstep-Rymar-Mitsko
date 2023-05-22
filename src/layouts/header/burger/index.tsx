import React, { useState } from 'react'
// import styles
import s from "./Burger.module.scss"
// import link
import Link from 'next/link';

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState<any>([]);
    // function open burger
    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { left: "0" }
            })
        }
    }


    const links = [
        { text: 'Реєстратура', path: '/registry' },
        { text: 'Про лікарню', path: '/abouthehospital' },
        { text: 'Пацієнту', path: '/patient' },
        { text: 'Оцініть роботу', path: '/reviews' },
        { text: 'Зворотній звʼязок', path: '/contacts' },
    ]

    return (
        <>
            {isOpen ?
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burgerClose}>
                        <span></span>
                    </div>
                </button> :
                <button onClick={handleMenu} className={s.burger}>
                    <div className={s.burger__icons}>
                        <span></span>
                    </div>
                </button>
            }

            <ul className={s.burgerMenuList} style={hideOrShow}>
                {links.map((link) => (
                    <li className={s.burgerMenuList__li}><Link className={s.burgerMenuList__li_link} href={link.path} onClick={() => {
                        setIsOpen(false);
                        setHideOrShow(() => {
                            return { left: "-100%" }
                        })
                    }}>{link.text}</Link></li>
                ))}
            </ul>
        </>
    )
}

export default Burger