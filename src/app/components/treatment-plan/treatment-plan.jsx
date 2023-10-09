import React from 'react'
import styles from './trt-plan.module.css'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMedkitOutline } from "react-icons/io5";

function TreatmentPlan() {
  return (
    <div className={`w-100 bg-white`}>
        <div>
            <div className={styles.title}>
                <p>A’s Hair Regrowth Treatment Plan</p>
            </div>
            <div className='container d-flex justify-content-center'>
                <div className='w-75 card shadow' style={{zIndex:'1'}}>
                    <div className='card-header text-center bg-dark shadow' >
                        <p className='fw-bold text-white mb-0' style={{fontSize:'32px'}}>1 Month Plan</p>
                    </div>
                    <div className='card-body pb-0'>
                        <div>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <span>
                                    <span className={styles.planTitle}> 
                                        Your Hair growth kit
                                    </span>
                                </span>
                                <p className='fs-5 fw-bold'>&#8377;2890</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <span>
                                    <span className={styles.planTitle}>Customized doctor prescription</span>
                                </span>
                                <p className='fs-5 fw-bold'><span className='text-danger'>Free</span> <del>&#8377;1,000</del></p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3'> 
                                <span>
                                    <span className={styles.planTitle}>Ayurvedic Diet Plan</span>
                                </span>
                                <p className='fs-5 fw-bold'><span className='text-danger'>Free</span> <del>&#8377;500</del></p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <span>
                                    <span className={styles.planTitle}>Personal hair coach</span>
                                </span>
                                <p className='fs-5 fw-bold'><span className='text-danger'>Free</span> <del>&#8377;500</del></p>
                            </div>
                            <div className='border-top border-black-50 d-flex justify-content-center align-items-center pt-2 fs-4'>
                                <p className='fw-bold text-dark mb-0'>Your Plan @</p>
                                <p className='fw-bold text-dark mb-0'>
                                    <span><del className='fw-normal text-danger ms-2'>&#8377;4890</del></span>
                                    <span>&#8377;2890</span>
                                    <span className='text-danger ms-2'>(40% OFF)</span>
                                </p>
                            </div>
                            <p className='d-flex justify-content-center mt-3 fs-5 '>
                                🎉 Cheers!
                                <span className='text-danger'>You Saved &#8377;2000</span>
                            </p>
                        </div>
                    </div>
                    <div className='card-footer border-0 p-0'>
                        <button className={`${styles.buyBtn} border-0 w-100 d-flex justify-content-center align-item-center`}>
                            <span className={`text-white`}>
                                <AiOutlineThunderbolt/>
                                BUY NOW
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TreatmentPlan