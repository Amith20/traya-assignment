/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import styles from './assess-report.module.css'
import img from '../../../../public/others/stage-men.png'
import arrow from '../../../../public/others/right-arrow.png'
import root from  '../../../../public/others/root-cause.webp'
import dandruff from '../../../../public/others/dandruff.png'
import sleep from '../../../../public/others/eyebrow.png'
import genetic from '../../../../public/others/dna.png'
import stress from '../../../../public/others/sound-waves.png'




function AssessmentReport() {
  return (
   <div className={styles.assessReport} >
        <div >
            <div className={`bg-white mt-5 mb-5 rounded-3 container shadow `} style={{width:'75%'}}>
                <span>
                    <p className={styles.heading}>Assessment Report</p>
                </span>
                <hr />
                <div className={`text-center`}>
                    <div className={`mb-4`}>
                        <p className={`fw-bold fs-1 text-center text-dark`}>A,</p>
                        <p className={`text-black-50 fs-2`}>You’ve been diagnosed with</p>
                        <p className={`text-dark fs-2`}>Male pattern hair loss <b>Stage-2</b></p>
                    </div>
                </div>
                <hr />
                <div className={`d-flex justify-content-center align-items-center align-content-center`}>
                    <div className='mx-3 d-flex flex-column justify-content-center'>
                        <p className='fw-bold text-center'>Stage 2</p>
                        <div>
                            <Image alt='...' src={img} className='rounded-circle shadow p-2' width={80} height={80}/>
                            <p className='mt-3 text-center text-black-50'>You are here</p>
                        </div>
                    </div>
                    <div className='mx-3'>
                        <Image alt='...' src={arrow} width={50} height={50}/>
                    </div>
                    <div className='mx-3 mt-4'>
                        <div>
                            <Image alt='...' src={img} className='rounded-circle shadow p-2' width={80} height={80}/>
                            <p className='mt-3 text-center text-black-50'>Let's get you here.</p>
                        </div>
                    </div>
                </div>
                <div className={`text-center mt-4 p-4`}>
                    <p className='fw-bold fs-4 '>Your hair loss has just started but you’re right in time to re-grow. See best results in 5 months.</p>
                </div>
                <Image alt='...' src={root} className='w-100'/>
                <div className='m-5'>
                    <ul className={`${styles.rootCause}`}>
                        <li>
                            <a className='text-center text-dark text-decoration-none'>
                                <Image alt='...' src={dandruff} className={`${styles.rootIcons}`} width={50} height={50}/>
                                <span className='mt-3'>DANDRUFF</span>
                            </a>
                        </li>
                        <li>
                            <a className='text-center text-dark text-decoration-none'>
                                <Image alt='...' src={sleep} className={`${styles.rootIcons}`} width={50} height={50}/>
                                <span className='mt-3'>SLEEP</span>
                            </a>
                        </li>
                        <li>
                            <a className='text-center text-dark text-decoration-none'>
                                <Image alt='...' src={genetic} className={`${styles.rootIcons}`} width={50} height={50}/>
                                <span className='mt-3'>GENETICS</span>
                            </a>
                        </li>
                        <li>
                            <a className='text-center text-dark text-decoration-none'>
                                <Image alt='...' src={stress} className={`${styles.rootIcons}`} width={50} height={50}/>
                                <span className='mt-3'>STRESS</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`text-center pb-4`}>
                    <a className='text-dark font-monospace text-decoration-none border-bottom border-dark p-1'>Learn about root cause</a>
                </div>
            </div>
        </div>
   </div>
  )
}

export default AssessmentReport