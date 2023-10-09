import Image from 'next/image'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './header.module.css'
import logo from '../../../../public/others/logo.webp'

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.header}`}>
        <Image alt='...' src={logo} className={styles.logo}/>
        <div className={`${styles.headerIcons}`}>
          <button className={`${styles.button} `}>TAKE THE HAIR TEST <sup className={styles.tm}>TM</sup> </button>
          <span className={styles.cartIcon}>
            <AiOutlineShoppingCart className={styles.cart}/>
            <span className={`${styles.count} position-absolute translate-middle badge rounded-pill bg-danger`}>0</span>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header