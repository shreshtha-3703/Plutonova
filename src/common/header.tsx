'use client'
import Image from "next/image";
import style from "./header.module.css"
import { FaQrcode } from "react-icons/fa6";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={style.main}>
            <div className={style.mainHolders}>
                <div className={style.mainHoldersSections} id={style.mainHoldersSectionsOne}>
                    <div className={style.mainHoldersSectionsItem}>
                        <Link passHref href={"/"}><p style={{ color: "#29d9a4" }}>Home</p></Link>
                    </div>
                    <div className={style.mainHoldersSectionsItem}>
                        <Link passHref href={"/#contact"}><p>Contact</p></Link>
                    </div>
                    <div className={style.mainHoldersSectionsItem}>
                        <Link passHref href={"/"}><p>About</p></Link>
                    </div>
                </div>
                <div className={style.mainHoldersSections}>
                    <div className={style.mainHoldersSectionsItemImage}>
                        <Image src={"/images/logo.png"} alt="plutonova logo" fill style={{ objectFit: "cover" }} />
                    </div>
                </div>
                <div className={style.mainHoldersSections}>
                    <div className={style.mainHoldersSectionsItemRight}>
                        <p onClick={() => {
                            setShowMenu(!showMenu);
                        }}>Menu <span><FaQrcode color="#29d9a4" /></span></p>
                    </div>
                </div>








                <div className={style.mainHolderMenu} style={{ display: `${showMenu == true ? "flex" : "none"}` }}>
                    <div className={style.mainHolderMenuSectionOne}>
                        <div className={style.mainHolderMenuSectionOneHome}>
                            <h2>PLUTONOVA</h2>
                            <p>PlutoNova is a dynamic agency dedicated to providing top-tier IT, motion, and design services. We specialize in curating the best freelance talent to deliver exceptional quality at competitive prices. Whether you{"'"}re looking for innovative IT solutions, captivating motion graphics, or cutting-edge design work, PlutoNova ensures that every project is handled with precision and creativity. Our mission is to empower businesses by connecting them with expert freelancers who bring their vision to life efficiently and affordably.</p>

                            <div className={style.mainHolderMenuSectionOneHomeSocial}>
                                <Link href={""} passHref><p><BsFacebook size={20} /></p></Link>
                                <Link href={""} passHref><p><BsTwitterX size={20} /></p></Link>
                                <Link href={"https://www.linkedin.com/company/plutonova/"} passHref target="_blank"><p><BsLinkedin size={20} /></p></Link>
                                <Link passHref href={"https://www.instagram.com/pluto_nova_?igsh=MTM3azg2bW11aXp2"} target="_blank"><p><BsInstagram size={20} /></p></Link>
                                <Link href={""} passHref><p><MdMailOutline size={25} /></p></Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.mainHolderMenuSectionTwo}>
                        <div className={style.mainHolderMenuSectionTwoClose} onClick={() => {
                            setShowMenu(!showMenu);
                        }}>
                            <CgClose />
                        </div>
                        <div className={style.mainHolderMenuSectionTwoItem}>
                            <Link href={"/"} passHref><p id={style.headerHomeItem}>Home</p></Link>
                            <Link href={"#package"} passHref><p id={style.headerPackageItem}>Package</p></Link>
                            <Link href={"/about"} passHref><p id={style.headerAboutItem}>About</p></Link>
                            <Link href={"#contact"} passHref><p id={style.headerContatItem}>Contact</p></Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Header;