import React from 'react'
// import styles
import s from "./Logo.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from "next/image";
import logo from "../../../assets/img/header/headerLogo.png"

const Logo = () => {
    return (
        <>
            <Link href="/" className={s.logo}>
                <Image className={s.logo__img} src={logo} alt="Logo" width={181} height={78} />
            </Link>
        </>
    )
}

export default Logo