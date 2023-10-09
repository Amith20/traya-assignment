import React from 'react'
import { AiFillInstagram , AiFillTwitterSquare, AiFillYoutube , AiFillLinkedin , AiFillFacebook } from "react-icons/ai";
import styles from './footer.module.css'
import Image from 'next/image';
import { BsPhoneFill } from "react-icons/bs";
import playStoreBtn from '../../../../public/others/play-store.webp';
import appStoreBtn from '../../../../public/others/app-store.webp'
import logo from '../../../../public/others/logo.webp'


function Footer() {
  return (
    <>
    <footer className={`${styles.footer} d-md-none d-sm-none`}>
        <div className={`container-fluid`}>
          <div className={`row`}>
            <div className={`col-lg-6`}>
                <div className={`row`}>
                    <div className={`col-lg-4`}>
                            <ul className={`${styles.list}`}>
                                <li className={`mb-3 fw-bold`}>Traya Journey</li>
                                <li className={`mb-2`}><a>Track Order</a></li>
                                <li className={`mb-2`}><a>My Plan</a></li>
                                <li className={`mb-2`}><a>Online Diagnosis</a></li>
                                <li className={`mb-2`}><a>Referral</a></li>
                                <li className={`mb-2`}><a>Customer Stories</a></li>
                                <li className={`mb-2`}><a>Reviews</a></li>
                            </ul>
                    </div>
                    <div className={`col-lg-4`}>
                        <ul className={`${styles.list}`} >
                            <li className={`mb-3 fw-bold`}>Company</li>
                            <li className={`mb-2`}><a>FAQ</a></li>
                            <li className={`mb-2`}><a>Science</a></li>
                            <li className={`mb-2`}><a>Our Story</a></li>
                            <li className={`mb-2`}><a>Blog</a></li>
                            <li className={`mb-2`}><a>All Products</a></li>
                            <li className={`mb-2`}><a>Hair Treatment for women</a></li>
                            <li className={`mb-2`}><a>Hair Treatment for Men</a></li>
                        </ul>
                    </div>
                    <div className={`col-lg-4`}>
                        <ul className={`${styles.list}`}>
                            <li className={`mb-3 fw-bold`}>Legal</li>
                            <li className={`mb-2`}><a>Refund Policy</a></li>
                            <li className={`mb-2`}><a>Privacy Policy</a></li>
                            <li className={`mb-2`}><a>Terms of Service</a></li>
                            <li className={`mb-2`}><a>Return Policy</a></li>
                            <div className={``}>
                                <ul className={`${styles.list} ${styles.socialIcons}`}>
                                    <li className={`fs-5`}><a><AiFillInstagram/></a></li>
                                    <li className={`fs-5`}><a><AiFillFacebook/></a></li>
                                    <li className={`fs-5`}><a><AiFillLinkedin/></a></li>
                                    <li className={`fs-5`}><a><AiFillYoutube/></a></li>
                                    <li className={`fs-5`}><a><AiFillTwitterSquare/></a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`col-lg-6 d-flex`}>
                <div>
                    <div>
                        <h4 style={{fontSize:'18px'}}>
                            <BsPhoneFill/>
                            Experience the traya mobile app
                        </h4>
                        <div>
                            <a href="">
                                <Image alt='...' src={playStoreBtn}/>
                            </a>
                            <a href="">
                                <Image alt='...' src={appStoreBtn}/>
                            </a>
                        </div>
                        <div className={`${styles.address} mt-5`}>
                            <p>Registered Copyright 2023</p>
                            <p>Tatvartha Health Pvt. Ltd. Mumbai Office: Unit no - 101, B wing, Building - 16, Interface, Off Link Road, Malad (West), Mumbai - 400064, Maharashtra</p>
                            <p>Registered Office: C67 P1, Fortune Hotel Galaxy,Koparli R, GIDC, Vapi, Gujarat - 396195</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image alt='...' src={logo} width={100} height={30}/>
                </div>
           </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer