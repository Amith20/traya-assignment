'use-client'

import Image from 'next/image'
import React from 'react'
import { IoLeafOutline } from "react-icons/io5";
import styles from './presc-plan.module.css'
import googleRating from '../../../../public/others/google-rating.webp'

function ProductCard({prod}) {

  return (
        <div className='card p-5 border-0'>
            <div className='card-header border-0 bg-white'>
                <ul className='d-flex justify-content-between px-3' style={{listStyle:'none'}}>
                    <li className={styles.ayurveda}>
                        <span className='fs-4'>
                            <IoLeafOutline className={styles.leaf}/>
                            Ayurveda
                        </span>
                    </li>
                    <li className={styles.mustHave}><span className='fw-bold fs-4'>Must Have</span></li>
                </ul>
            </div>
            <div className='row'>
                <div className='col-lg-5'>
                    <Image alt='...' src={prod.imgUrls} width={420} height={420}/>
                </div>
                <div className='col-lg-7 '>
                    <div className=''>
                        <div className='d-flex justify-content-between mb-5 mt-5' >
                            <div className=''>
                                <div>
                                    <h4 className='fw-bold fs-3'>{prod.productName}</h4>
                                </div>
                                <div>
                                    <h5 className='fw-bold fs-3'>{`₹${prod.price}/-`}</h5>
                                </div>
                            </div>
                            <div>
                                <Image alt='...' src={googleRating} style={{color:'white'}} width={150} height={60}/>
                            </div>
                        </div>
                        <ul className='d-flex justify-content-between align-items-center p-0 border-top border-bottom pt-3 pb-3' style={{listStyle:'none'}}>
                            <li className='fs-5'>Nutrition Absorption</li>
                            <li className='fs-5'>|</li>
                            <li className='fs-5'>Metabolism</li>
                            <li className='fs-5'>|</li>
                            <li className='fs-5'>Energy</li>
                            <li className='fs-5'>|</li>
                            <li className='fs-5'>Hairfall</li>
                        </ul>
                        <p className='text-center w-100 fs-5 text-black-50'>
                            <span>{prod.usage}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCard